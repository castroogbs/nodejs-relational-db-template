module.exports = {
  type: process.env.DB_TYPE,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  migrations: [`${process.env.ORM_MIGRATIONS_DIR}*.ts`],
  entities: [`${process.env.ORM_ENTITIES_DIR}*.ts`],
  cli: {
    migrationsDir: process.env.ORM_MIGRATIONS_DIR,
  },
};
