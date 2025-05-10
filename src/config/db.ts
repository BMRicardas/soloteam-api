import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

const url = process.env.MONGODB_URI;
const client = new MongoClient(url);

const dbName = process.env.NODE_ENV;

async function connectToDatabase() {
  await client.connect();
  console.log("Successfully connected to MongoDB");
  const db = client.db(dbName);
  const collection = db.collection("users");

  return { db, collection };
}

connectToDatabase()
  .then(() => {
    console.log("Database connection established");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  })
  .finally(() => {
    client.close();
  });

export { connectToDatabase };
