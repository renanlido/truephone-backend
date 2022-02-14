/*
  Warnings:

  - Added the required column `file_id` to the `ContactsList` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ContactsList" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "file_id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "ContactsList_file_id_fkey" FOREIGN KEY ("file_id") REFERENCES "File" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ContactsList" ("created_at", "id", "message", "phone", "status", "updated_at") SELECT "created_at", "id", "message", "phone", "status", "updated_at" FROM "ContactsList";
DROP TABLE "ContactsList";
ALTER TABLE "new_ContactsList" RENAME TO "ContactsList";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
