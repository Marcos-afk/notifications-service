/*
  Warnings:

  - You are about to drop the column `canceledAt` on the `notifications` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_notifications" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "recipient_id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "canceled_at" DATETIME,
    "read_at" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_notifications" ("category", "content", "created_at", "id", "read_at", "recipient_id") SELECT "category", "content", "created_at", "id", "read_at", "recipient_id" FROM "notifications";
DROP TABLE "notifications";
ALTER TABLE "new_notifications" RENAME TO "notifications";
CREATE INDEX "notifications_recipient_id_idx" ON "notifications"("recipient_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
