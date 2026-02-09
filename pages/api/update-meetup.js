import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "PUT") {
    const { data, id } = req.body;
    const client = await MongoClient.connect(process.env.MONGO_DB_URI);

    const db = client.db();
    const meetupCollection = db.collection("meetups");
    const meetup = await meetupCollection.updateOne({ _id: new ObjectId(id) }, { $set: data });

    client.close();

    return res.status(201).json({ data: meetup });
  }
}

export default handler;
