import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    
    const client = await MongoClient.connect(
      "mongodb+srv://guimaricato:Z3zDfDDNV2UXxeV2@cluster0.ikv5cvb.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
    );

    const db = client.db();
    const meetupCollection = db.collection("meetups");
    const meetup = await meetupCollection.insertOne(data);

    client.close();

    return res.status(201).json({ data: meetup });
  }
}

export default handler;
