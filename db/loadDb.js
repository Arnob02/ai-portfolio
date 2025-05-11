import { DataAPIClient } from "@datastax/astra-db-ts";
import { RecursiveCharacterSplitter } from "langchain/text_splitter";
import 'dotenv/config';
import OpenAI from "openai";
import sampleData from "./sampleData.js" with { type: "json" };

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY
});

const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN)
const db = client.db(process.env.ASTRA_DB_API_ENDPOINT, {
    namespace: process.env.ASTRA_DB_NAMESPACE
});

const splitter = new RecursiveCharacterSplitter({
  chunkSize: 1000,
  chunkOverlap: 200
});

const createCollection = async () => { 
    try {
        await db.createCollection("my-portfolio", {
            vector: {
                dimension: 1536,                
            },
        })
    } catch (error) {
        console.error("Error creating collection:", error);
        
    }
}

const loadData = async () => { 
    const collection = await db.collection("my-portfolio");
    for await (const { id, info, description } of sampleData) { 
        const chunks = await splitter.splitText(description);
        let i = 0;
        for await (const chunk of chunks) { 
            const { data } = await openai.embeddings.create({
                model: "text-embedding-3-small",
                input: chunk
            })
        }
    }
}