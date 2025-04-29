import { Fragment } from "react";
import Head from "next/head";

import MeetupList from "../components/meetups/MeetupList";
import handler from "./api/meetups";

export default function HomePage({ meetups }) {
  return (
    <Fragment>
      <Head>
        <title>Meetups App</title>
        <meta
          name="description"
          content="A meetups manager website"
        />
      </Head>
      <MeetupList meetups={meetups} />;
    </Fragment>
  ) 
}

export async function getStaticProps() {
  const meetups = await handler();

  return {
    props: {
      meetups: meetups,
    },
    revalidate: 10, // will be regenarated (at the server) every 10s if there is requests being done at the page, 
    // otherwise, if we dont set this prop, the page will only be updated if you build it again, cause the "getStaticProps"
    // method only runs during the build proccess (SSG - static site generation)
    // generally better for pages where the content dont update to often and also if we dont need authentication 
  };
}

// it will not be runned during build, but at real time at the server, dinamically on every request 
// (have to wait the page to be genetated on every request)
// (SSR - server side rendering)
// export async function getServerSideProps(context) {
//   const res = context.res;
//   const req = context.req;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   }
// }