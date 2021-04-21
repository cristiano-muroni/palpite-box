import React from "react";
import "../css/styles.css"
//import "tailwindcss/tailwind.css";
import Header from '../components/Header'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Header/>
      <h1 className= 'bg-green-400 md:bg-red-900 p-8'>MyApp</h1>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
