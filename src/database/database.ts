import { Sequelize, Dialect } from "sequelize";
import { APP_CONFIG } from "../config";

//export let sequelize: Sequelize;
//const connString ="postgres://bookshopuser:super-secret-password@127.0.0.1:5432/bookshop";
const connString ="postgres://postgres:HFapps2019@@127.0.0.1:5432/bookshop";
export let sequelize = new Sequelize(connString);

if (APP_CONFIG.nodeEnv !== "dev") {
	sequelize = new Sequelize(
		APP_CONFIG.dbName,
		APP_CONFIG.dbUserName,
		APP_CONFIG.dbPassword,
		{
			host: APP_CONFIG.dbHost,
			port: parseInt(APP_CONFIG.dbPort as string),
			dialect: "postgres",
		}
	);
} else {
	sequelize = new Sequelize("sqlite::memory:");
}