import Image from "next/image";
import styles from "../styles/Home.module.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home({ country }) {
  console.log(country);
  const { data: session } = useSession();

  return (
    <>
      <Header country={country} />
      {session ? "Logged in" : "Logged Out"}
      <Footer country={country} />
    </>
  );
}

export async function getServerSideProps() {
  // const data = await axios
  //   .get("https://api.ipregistry.co/?key=qetny5d5qhcmsljb")
  //   .then((response) => {
  //     return response.data.location.country;
  //   })
  //   .catch((err) => console.log(err));

  return {
    props: {
      // country: { name: data.name, flag: data.flag.emojitwo },
      country: {
        name: "India",
        flag: "https://cdn.ipregistry.co/flags/emojitwo/in.svg",
      },
    },
  };
}
