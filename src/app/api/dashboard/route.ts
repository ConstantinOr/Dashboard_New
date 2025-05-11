import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

interface InvestorSummary {
  totalInvested: number
  currentValue: number
  distributionsReceived: number
  outstandingCommitments: number
}

export async function GET() {
  try {
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
    
    // Get all investments
    const investments = await prisma.investment.findMany({
      select: {
        projectName: true,
        tokenClass: true,
        sharesOwned: true,
        marketValue: true,
        roi: true,
        nextDistributionDate: true,
      },
    })

    return NextResponse.json({
      summary: totalSummary,
      investments,
    })
  } catch (error) {
    console.error('Error fetching dashboard data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch dashboard data' },
      { status: 500 }
    )
  }
} 