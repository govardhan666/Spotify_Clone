import Head from "next/head";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Spotify-Clone</title>
        <meta
          name="description"
          content="Spotify Clone built with NEXTJS and TailwindCSS"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Dashboard />
    </>
  );
}
