//Mannualy created seed data for the investor summary and investments
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create sample investor summaries
  const investor1 = await prisma.investorSummary.create({
    data: {
      totalInvested: 1000000,
      currentValue: 1200000,
      totalReturn: 200000,
      returnPercentage: 20,
      activeInvestments: 3,
      completedInvestments: 2,
      distributionsReceived: 150000,
      outstandingCommitments: 500000,
    },
  })

  const investor2 = await prisma.investorSummary.create({
    data: {
      totalInvested: 500000,
      currentValue: 550000,
      totalReturn: 50000,
      returnPercentage: 10,
      activeInvestments: 2,
      completedInvestments: 1,
      distributionsReceived: 75000,
      outstandingCommitments: 250000,
    },
  })

  // Create sample investments
  await prisma.investment.createMany({
    data: [
      {
        investorId: investor1.id,
        projectName: 'Tech Startup A',
        tokenClass: 'Series A',
        sharesOwned: 1000,
        marketValue: 500000,
        roi: 25,
        nextDistributionDate: new Date('2024-12-31'),
        amount: 400000,
        status: 'Active',
        startDate: new Date('2023-01-01'),
        endDate: new Date('2025-01-01'),
        returnRate: 25,
        currentValue: 500000,
      },
      {
        investorId: investor1.id,
        projectName: 'Real Estate Fund B',
        tokenClass: 'Class B',
        sharesOwned: 500,
        marketValue: 300000,
        roi: 15,
        nextDistributionDate: new Date('2024-06-30'),
        amount: 250000,
        status: 'Active',
        startDate: new Date('2023-06-01'),
        endDate: new Date('2024-12-31'),
        returnRate: 15,
        currentValue: 300000,
      },
      {
        investorId: investor2.id,
        projectName: 'Venture Fund C',
        tokenClass: 'Series C',
        sharesOwned: 750,
        marketValue: 350000,
        roi: 20,
        nextDistributionDate: new Date('2024-09-30'),
        amount: 300000,
        status: 'Active',
        startDate: new Date('2023-03-01'),
        endDate: new Date('2024-12-31'),
        returnRate: 20,
        currentValue: 350000,
      },
    ],
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 