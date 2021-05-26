import { MongoClient, Db, Collection } from "mongodb";
import connect from "./connect";
import setupTestData from "./setupTestData";

(async function Tester() {
    const client = await connect();
    const db = client.db("day1ex1");
    const collection = db.collection("inventory");
    const status = await setupTestData(collection);

    //Add your play-around code here
    //Update quantity and status in a single item
    await collection.updateOne(
        { item: "sketchbook" },
        {
            $set: { qty: 100, status: "B" },
            $currentDate: { lastModified: true },
        }
    );

    client.close();
})();
