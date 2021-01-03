import { ConnectionOptions } from "typeorm"

const options: ConnectionOptions = {
  type: 'sqlite',
  database: 'database.sqlite',
  entities: ["./src/modules/**/entities/*.ts"],
  migrations: ["./src/database/migrations/*.ts"]
} 

export default options