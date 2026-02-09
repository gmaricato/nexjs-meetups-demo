import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "DELETE") {
    const client = await MongoClient.connect(process.env.MONGO_DB_URI);

    const db = client.db();
    const meetupCollection = db.collection("meetups");
    const meetup = await meetupCollection.deleteOne({ _id: new ObjectId(req.body.id) });

    client.close();

    return res.status(201).json({ data: meetup });
  }
}

export default handler;