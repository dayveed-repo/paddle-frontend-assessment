import Head from "next/head";
import Navbar from "../Components/HomeComponents/Navbar";
import HomeBody from "../Components/HomeComponents/HomeBody";
import ContactUs from "../Components/ContactComponents/ContactUs";
import { useRouter } from "next/router";

const Home = () => {
  const BackgroundImage = "w-screen h-screen md:object-fill object-cover";

  const router = useRouter();

  return (
    <div className="relative flex max-h-screen max-w-screen flex-col bg-[#1a0039]">
      <Head>
        <title>Metricks</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <img
        src={"/HomeBackground.svg"}
        alt="bg-image"
        className={BackgroundImage}
      />

      <main className="absolute w-screen h-screen px-5 flex flex-col">
        <Navbar />
        <HomeBody />
      </main>

      {router.pathname == "/contact-us" && <ContactUs />}
    </div>
  );
};

export default Home;
