import { defineConfig } from "@prisma/config";

export default defineConfig({
  datasource: {
    url: "postgresql://user:password@localhost:5432/mydb", // Apna actual URL yahan daalein
  },
});