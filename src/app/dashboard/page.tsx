'use client'

import { useEffect, useState } from 'react'

interface InvestorSummary {
  totalInvested: number
  currentValue: number
  distributionsReceived: number
  outstandingCommitments: number
}

interface Investment {
  projectName: string
  tokenClass: string
  sharesOwned: number
  marketValue: number
  roi: number
  nextDistributionDate: string | null
}

interface PaginationInfo {
  total: number
  page: number
  limit: number
  totalPages: number
}

type SortField = 'roi' | 'marketValue' | 'sharesOwned' | 'nextDistributionDate' | 'projectName' | 'tokenClass'
type SortOrder = 'asc' | 'desc'

const ITEMS_PER_PAGE = 5

export default function Dashboard() {
  const [summary, setSummary] = useState<InvestorSummary | null>(null)
  const [investments, setInvestments] = useState<Investment[]>([])
  const [loading, setLoading] = useState(true)
  const [sortField, setSortField] = useState<SortField>('roi')
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc')
  const [roiFilter, setRoiFilter] = useState<number | ''>('')
  const [simulatingPayout, setSimulatingPayout] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [pagination, setPagination] = useState<PaginationInfo>({
    total: 0,
    page: 1,
    limit: ITEMS_PER_PAGE,
    totalPages: 0
  })
  const [selectedInvestment, setSelectedInvestment] = useState<Investment | null>(null)

  const fetchData = async () => {
    try {
      const queryParams = new URLSearchParams({
        page: currentPage.toString(),
        limit: ITEMS_PER_PAGE.toString(),
        sortField,
        sortOrder,
        ...(roiFilter !== '' && { minRoi: roiFilter.toString() })
      })

      const response = await fetch(`/api/dashboard?${queryParams}`)
      const data = await response.json()
      setSummary(data.summary)
      setInvestments(data.investments)
      setPagination(data.pagination)
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [currentPage, sortField, sortOrder, roiFilter])

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortOrder('desc')
    }
    setCurrentPage(1) // Reset to first page when sorting changes
  }

  const handlePayoutSimulation = async (investment: Investment) => {
    try {
      setSimulatingPayout(true)
      const response = await fetch('/api/dashboard/payout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ investment }),
      })
      const data = await response.json()
      if (response.ok) {
        await fetchData()
        setSelectedInvestment(null)
        alert(`Payout simulated successfully for ${investment.projectName}! Amount: ${data.payoutAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`)
      } else {
        alert('Failed to simulate payout')
      }
    } catch (error) {
      console.error('Error simulating payout:', error)
      alert('Failed to simulate payout')
    } finally {
      setSimulatingPayout(false)
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <div className="p-8">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Total Invested Amount"
          value={summary?.totalInvested.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        />
        <MetricCard
          title="Portfolio Value"
          value={summary?.currentValue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        />
        <MetricCard
          title="Distributions Received"
          value={summary?.distributionsReceived.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        />
        <MetricCard
          title="Outstanding Commitments"
          value={summary?.outstandingCommitments.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        />
      </div>

      {/* Investments Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Investments</h2>
          <div className="flex items-center gap-4">
            <label className="text-sm text-gray-600">
              Min ROI %:
              <input
                type="number"
                value={roiFilter}
                onChange={(e) => {
                  setRoiFilter(e.target.value ? Number(e.target.value) : '')
                  setCurrentPage(1) // Reset to first page when filter changes
                }}
                className="ml-2 px-2 py-1 border rounded w-20"
                min="0"
                max="100"
              />
            </label>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('projectName')}
                >
                  Project Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('tokenClass')}
                >
                  Token Class
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('sharesOwned')}
                >
                  Shares Owned
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('marketValue')}
                >
                  Market Value
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('roi')}
                >
                  ROI %
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('nextDistributionDate')}
                >
                  Next Distribution
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {investments.map((investment, index) => (
                <tr 
                  key={index}
                  onClick={() => setSelectedInvestment(investment)}
                  className={`cursor-pointer hover:bg-gray-50 ${
                    selectedInvestment?.projectName === investment.projectName ? 'bg-blue-50' : ''
                  }`}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{investment.projectName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{investment.tokenClass}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{investment.sharesOwned.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {investment.marketValue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{investment.roi}%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {investment.nextDistributionDate ? new Date(investment.nextDistributionDate).toLocaleDateString() : 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePayoutSimulation(investment);
                      }}
                      disabled={simulatingPayout}
                      className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {simulatingPayout ? 'Simulating...' : 'Simulate Payout'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing {((pagination.page - 1) * pagination.limit) + 1} to {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total} investments
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={pagination.page === 1}
              className="px-2 py-1 text-sm border border-gray-300 bg-gray-50 text-gray-600 rounded hover:bg-gray-100 disabled:opacity-50"
            >
              First
            </button>
            <button
              onClick={() => setCurrentPage(pagination.page - 1)}
              disabled={pagination.page === 1}
              className="px-2 py-1 text-sm border border-gray-300 bg-gray-50 text-gray-600 rounded hover:bg-gray-100 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-sm text-gray-600">
              Page {pagination.page} of {pagination.totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(pagination.page + 1)}
              disabled={pagination.page === pagination.totalPages}
              className="px-2 py-1 text-sm border border-gray-300 bg-gray-50 text-gray-600 rounded hover:bg-gray-100 disabled:opacity-50"
            >
              Next
            </button>
            <button
              onClick={() => setCurrentPage(pagination.totalPages)}
              disabled={pagination.page === pagination.totalPages}
              className="px-2 py-1 text-sm border border-gray-300 bg-gray-50 text-gray-600 rounded hover:bg-gray-100 disabled:opacity-50"
            >
              Last
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function MetricCard({ title, value }: { title: string; value: string | undefined }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="mt-2 text-3xl font-semibold text-gray-900">{value || 'Loading...'}</p>
    </div>
  )
} 