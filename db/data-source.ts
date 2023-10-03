import { DataSource, DataSourceOptions } from "typeorm";


export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'speedreader',
  entities: ['dist/**/entities/*.entity.js'],
  migrations: ['db/migrations/*.ts'],
  synchronize: false
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
