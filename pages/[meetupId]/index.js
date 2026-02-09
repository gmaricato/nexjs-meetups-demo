import { Fragment } from "react";
import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import { useRouter } from "next/router";

import MeetupDetails from "../../components/meetups/MeetupDetails";
import handler from "../api/meetups";

export default function MeetupDetailsPage({ meetup = {} }) {
  const router = useRouter();

  async function deleteMeetupHandler() {
    try {
      await fetch("/api/delete-meetup", {
        method: "DELETE",
        body: JSON.stringify({ id: meetup.id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push("/");
    } catch (error) {
      console.log("An error occurred");
      console.log(error);
    }
  }

  return (
    <Fragment>
      <Head>
        <title>{meetup?.title}</title>
        <meta name="description" content={meetup?.description} />
      </Head>
      <MeetupDetails
        image={meetup?.image}
        title={meetup?.title}
        address={meetup?.address}
        description={meetup?.description}
        onDeleteMeetup={deleteMeetupHandler}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const meetups = await handler();

  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup.id,
      },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(process.env.MONGO_DB_URI);

  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const meetup = await meetupCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  meetup.id = meetupId;
  delete meetup._id;
  client.close();

  return {
    props: {
      meetup,
    },
  };
}
