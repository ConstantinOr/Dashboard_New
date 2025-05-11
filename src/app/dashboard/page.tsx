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

export default function Dashboard() {
  const [summary, setSummary] = useState<InvestorSummary | null>(null)
  const [investments, setInvestments] = useState<Investment[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/dashboard')
        const data = await response.json()
        setSummary(data.summary)
        setInvestments(data.investments)
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

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
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Investments</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Token Class</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shares Owned</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROI %</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Distribution</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {investments.map((investment, index) => (
                <tr key={index}>
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
                </tr>
              ))}
            </tbody>
          </table>
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