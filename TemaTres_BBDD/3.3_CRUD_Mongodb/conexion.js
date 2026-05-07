import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.URI;
const client = new MongoClient(uri);

let db;

export async function conectar() {
    await client.connect();
    db = client.db("Backend"); 
    console.log("Conexión exitosa a MongoDB");
}

export function getDB() {
    if (!db) throw new Error("Base de datos no conectada");
    return db;
}