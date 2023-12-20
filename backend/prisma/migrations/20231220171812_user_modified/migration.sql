/*
  Warnings:

  - You are about to drop the column `firstname` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `user` table. All the data in the column will be lost.
  - Added the required column `name` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passwordHash` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `firstname`,
    DROP COLUMN `lastname`,
    ADD COLUMN `name` VARCHAR(255) NOT NULL,
    ADD COLUMN `passwordHash` VARCHAR(255) NOT NULL;