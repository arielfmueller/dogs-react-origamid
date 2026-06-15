import React from "react";
import styles from "../Styles/Components/Home.module.css";
import Feed from "../Components/Feed/Feed";
import Head from '../Components/Helper/Head'

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title='Feed' description='Home do site Dogs.' />
      <Feed />
    </section>
  );
};

export default Home;
