import { PostgreSQLClient } from "@prisma/client/runtime"
var jwt = require('jsonwebtoken');

const ConnectToDatabase = async () => {
    try {
        const client = await PostgreSQLClient.connect({
            connectionString: process.env.DATABASE_URL,
        })
        return client
    } catch (error) {
        console.error(error)
    }
};

export default ConnectToDatabase;

