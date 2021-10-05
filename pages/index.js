import Head from "next/head";
import Image from "next/image";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MainSection from "../Components/MainSection";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      {/* <MainSection />
      <Footer /> */}
    </div>
  );
}
