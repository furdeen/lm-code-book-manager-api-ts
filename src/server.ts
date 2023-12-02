import { app } from "./app";
import { populateDummyData } from "./database/database_seed";
import { APP_CONFIG } from "./config";

const environment = process.env.NODE_ENV || "test";
const PORT = 3000;

console.log(`🌍 Running in ${environment} environment`);

app.listen(APP_CONFIG.port, () => {
	console.log(`🚂 Express started on port ${PORT}`);

	// Seed the database with some data
	if (environment === "dev") {
		populateDummyData();
	}
});
