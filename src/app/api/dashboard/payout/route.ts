import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const { investment } = await request.json()
    
    // Calculate payout amount (e.g., 5% of market value)
    const payoutAmount = investment.marketValue * 0.05

    // Find the investment by project name and token class
    const existingInvestment = await prisma.investment.findFirst({
      where: {
        projectName: investment.projectName,
        tokenClass: investment.tokenClass,
      },
    })

    if (!existingInvestment) {
      return NextResponse.json(
        { error: 'Investment not found' },
        { status: 404 }
      )
    }

    // Update the investment's market value
    await prisma.investment.update({
      where: {
        id: existingInvestment.id,
      },
      data: {
        marketValue: {
          decrement: payoutAmount,
        },
      },
    })

    // Update investor summary
    await prisma.investorSummary.update({
      where: {
        id: existingInvestment.investorId,
      },
      data: {
        distributionsReceived: {
          increment: payoutAmount,
        },
        currentValue: {
          decrement: payoutAmount,
        },
      },
    })

    return NextResponse.json({ payoutAmount })
  } catch (error) {
    console.error('Error simulating payout:', error)
    return NextResponse.json(
      { error: 'Failed to simulate payout' },
      { status: 500 }
    )
  }
} 