//Mannualy created seed data for the investor summary and investments
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const generateRandomDate = (start: Date, end: Date) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

const generateRandomInvestment = (investorId: number, index: number) => {
  const startDate = new Date(2023, 0, 1)
  const endDate = new Date(2025, 11, 31)
  const investmentDate = generateRandomDate(startDate, endDate)
  const endInvestmentDate = new Date(investmentDate)
  endInvestmentDate.setFullYear(endInvestmentDate.getFullYear() + 2)

  const amount = Math.floor(Math.random() * 900000) + 100000 // Random amount between 100k and 1M
  const roi = Math.floor(Math.random() * 30) + 5 // Random ROI between 5% and 35%
  const marketValue = amount * (1 + roi / 100)
  const sharesOwned = Math.floor(amount / 1000) // Rough estimate of shares based on amount

  return {
    investorId,
    projectName: `Project ${String.fromCharCode(65 + (index % 26))}${Math.floor(index / 26) + 1}`,
    tokenClass: ['Series A', 'Series B', 'Series C', 'Class A', 'Class B'][Math.floor(Math.random() * 5)],
    sharesOwned,
    marketValue,
    roi,
    nextDistributionDate: generateRandomDate(new Date(), endInvestmentDate),
    amount,
    status: Math.random() > 0.2 ? 'Active' : 'Completed',
    startDate: investmentDate,
    endDate: endInvestmentDate,
    returnRate: roi,
    currentValue: marketValue,
  }
}

const generateRandomInvestor = (index: number) => {
  const totalInvested = Math.floor(Math.random() * 9000000) + 1000000 // Random between 1M and 10M
  const returnPercentage = Math.floor(Math.random() * 30) + 5 // Random between 5% and 35%
  const currentValue = totalInvested * (1 + returnPercentage / 100)
  const totalReturn = currentValue - totalInvested
  const activeInvestments = Math.floor(Math.random() * 20) + 10 // Random between 10 and 30
  const completedInvestments = Math.floor(Math.random() * 10) + 5 // Random between 5 and 15
  const distributionsReceived = Math.floor(totalReturn * 0.3) // 30% of total return
  const outstandingCommitments = Math.floor(totalInvested * 0.4) // 40% of total invested

  return {
    totalInvested,
    currentValue,
    totalReturn,
    returnPercentage,
    activeInvestments,
    completedInvestments,
    distributionsReceived,
    outstandingCommitments,
  }
}

async function main() {
  // Create 100 random investors
  const investors = []
  for (let i = 0; i < 100; i++) {
    const investor = await prisma.investorSummary.create({
      data: generateRandomInvestor(i),
    })
    investors.push(investor)
  }

  // Generate 5-10 random investments for each investor
  const investments = []
  for (const investor of investors) {
    const numInvestments = Math.floor(Math.random() * 6) + 5 // Random between 5 and 10
    for (let i = 0; i < numInvestments; i++) {
      investments.push(generateRandomInvestment(investor.id, i))
    }
  }

  // Create all investments
  await prisma.investment.createMany({
    data: investments,
  })

  console.log(`Created ${investors.length} investors and ${investments.length} investments`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 