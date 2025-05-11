-- CreateTable
CREATE TABLE "InvestorSummary" (
    "id" SERIAL NOT NULL,
    "totalInvested" DOUBLE PRECISION NOT NULL,
    "currentValue" DOUBLE PRECISION NOT NULL,
    "totalReturn" DOUBLE PRECISION NOT NULL,
    "returnPercentage" DOUBLE PRECISION NOT NULL,
    "activeInvestments" INTEGER NOT NULL,
    "completedInvestments" INTEGER NOT NULL,
    "distributionsReceived" DOUBLE PRECISION NOT NULL,
    "outstandingCommitments" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InvestorSummary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Investment" (
    "id" SERIAL NOT NULL,
    "investorId" INTEGER NOT NULL,
    "projectName" TEXT NOT NULL,
    "tokenClass" TEXT NOT NULL,
    "sharesOwned" DOUBLE PRECISION NOT NULL,
    "marketValue" DOUBLE PRECISION NOT NULL,
    "roi" DOUBLE PRECISION NOT NULL,
    "nextDistributionDate" TIMESTAMP(3),
    "amount" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "returnRate" DOUBLE PRECISION NOT NULL,
    "currentValue" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Investment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Investment" ADD CONSTRAINT "Investment_investorId_fkey" FOREIGN KEY ("investorId") REFERENCES "InvestorSummary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
