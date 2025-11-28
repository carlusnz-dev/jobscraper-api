-- CreateTable
CREATE TABLE "sites" (
    "id" SERIAL NOT NULL,
    "site_name" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "sites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jobs" (
    "id" SERIAL NOT NULL,
    "job_name" TEXT NOT NULL,
    "companion" TEXT,
    "description" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "site_id" INTEGER NOT NULL,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_site_id_fkey" FOREIGN KEY ("site_id") REFERENCES "sites"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
