import React from "react";
import "../css/styles.css";
import Header from '../components/Header'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Header/>
      <h1>MyApp</h1>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
