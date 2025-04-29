import { Fragment } from "react";
import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";

import MeetupDetails from "../../components/meetups/MeetupDetails";
import handler from "../api/meetups";

export default function MeetupDetailsPage({ meetup }) {
  return (
    <Fragment>
      <Head>
        <title>{meetup.title}</title>
        <meta name="description" content={meetup.description} />
      </Head>
      <MeetupDetails
        image={meetup.image}
        title={meetup.title}
        address={meetup.address}
        description={meetup.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const meetups = await handler();

  return {
    fallback: false, // false means the all the possibles ids/paths are included at the paths and any path different than then would result in a 404 page
    // setting it to true means that for the ids/paths the are not included at the paths, it would try to fetch dinamically the server before resulting a 404 page
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup.id,
      },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://guimaricato:Z3zDfDDNV2UXxeV2@cluster0.ikv5cvb.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );

  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const meetup = await meetupCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  delete meetup._id;
  client.close();

  return {
    props: {
      meetup,
    },
  };
}
