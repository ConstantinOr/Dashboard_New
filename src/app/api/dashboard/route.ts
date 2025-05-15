import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

interface InvestorSummary {
  totalInvested: number
  currentValue: number
  distributionsReceived: number
  outstandingCommitments: number
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '5')
    const sortField = searchParams.get('sortField') || 'roi'
    const sortOrder = searchParams.get('sortOrder') || 'desc'
    const minRoi = searchParams.get('minRoi')

    // Get all investor summaries
    const summaries = await prisma.investorSummary.findMany()
    
    // Calculate total metrics across all investors
    const totalSummary = summaries.reduce((acc: InvestorSummary, summary: InvestorSummary) => ({
      totalInvested: acc.totalInvested + summary.totalInvested,
      currentValue: acc.currentValue + summary.currentValue,
      distributionsReceived: acc.distributionsReceived + summary.distributionsReceived,
      outstandingCommitments: acc.outstandingCommitments + summary.outstandingCommitments,
    }), {
      totalInvested: 0,
      currentValue: 0,
      distributionsReceived: 0,
      outstandingCommitments: 0,
    })
    
    // Build where clause for ROI filter
    const where = minRoi ? {
      roi: {
        gte: parseFloat(minRoi)
      }
    } : {}

    // Get total count for pagination
    const totalCount = await prisma.investment.count({ where })

    // Get paginated investments with sorting
    const investments = await prisma.investment.findMany({
      where,
      select: {
        projectName: true,
        tokenClass: true,
        sharesOwned: true,
        marketValue: true,
        roi: true,
        nextDistributionDate: true,
      },
      orderBy: {
        [sortField]: sortOrder
      },
      skip: (page - 1) * limit,
      take: limit,
    })

    return NextResponse.json({
      summary: totalSummary,
      investments,
      pagination: {
        total: totalCount,
        page,
        limit,
        totalPages: Math.ceil(totalCount / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching dashboard data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch dashboard data' },
      { status: 500 }
    )
  }
} 