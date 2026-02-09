import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req?.method === "GET" || !req?.method || !req) {
    const client = await MongoClient.connect(process.env.MONGO_DB_URI);

    const db = client.db();
    const meetupCollection = db.collection("meetups");
    const response = await meetupCollection.find().toArray();

    client.close();

    const meetups = response.map((meetup) => ({
      title: meetup.title,
      image: meetup.image,
      address: meetup.address,
      id: meetup._id.toString(),
    }));
    return meetups;
  }
}

export default handler;
