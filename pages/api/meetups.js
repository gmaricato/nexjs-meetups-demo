import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req?.method === "GET" || !req?.method || !req) {
    const client = await MongoClient.connect(
      "mongodb+srv://guimaricato:Z3zDfDDNV2UXxeV2@cluster0.ikv5cvb.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
    );

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
    // res.status(200).json({ data: meetups });
    return meetups;
  }
}

export default handler;
