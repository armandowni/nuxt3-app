import { DataSourceOptions } from "typeorm";
import nuxtConfig from "../nuxt.config";
import { entities } from "./source/db";

// const DB = nuxtConfig.env.DB;
export const config: DataSourceOptions = {
  name: "default",
  type: "postgres",
  port: 5432,
  host: "ec2-3-230-122-20.compute-1.amazonaws.com",
  username: "ndphgigmsldyrf",
  password: "2f86ab68c36d3be06b46dd7c10bd1422ffa920303040c3081fb48e823b54f913",
  database: "d3guldico2husd",
  synchronize: true,
  logging: false,
  entities: entities,
  migrations: ["src/migration/**/*.ts"],
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
