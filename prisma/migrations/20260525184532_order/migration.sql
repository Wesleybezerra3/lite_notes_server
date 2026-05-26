-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Anotacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "criadaEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" INTEGER NOT NULL,
    "ordem" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Anotacao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Anotacao" ("criadaEm", "id", "titulo", "usuarioId") SELECT "criadaEm", "id", "titulo", "usuarioId" FROM "Anotacao";
DROP TABLE "Anotacao";
ALTER TABLE "new_Anotacao" RENAME TO "Anotacao";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
