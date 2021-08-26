import Head from "next/head";
import Footer from "../components/Footer";
import HowItWorks from "../components/Howitworks";
import ModalScreen from "../components/modal";
import Header from "../components/Navbar";
import Slider from "../components/Slider";
import TrustedCampaigns from "../components/Trustedcampaigns";
import WhatWeProvide from "../components/Whatweprovide";
import Whyus from "../components/Whyus";

export default function Home() {
  return (
    <div>
      <Head>
        <title>As Good As New</title>
        <meta name="description" content="Buy eco-friendly and affordable clothes." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header/>
      <Slider />
      <Whyus/>
      <ModalScreen/>
      <Footer/>
    </div>
  );
}
