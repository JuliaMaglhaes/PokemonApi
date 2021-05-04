import React from "react";
import Preloader from "../components/Preloader";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <header>
      </header>
        <main>
          <Component {...pageProps} />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js" type="text/javascript"></script>
        </main>
    </div>
  ) 
}

export default MyApp
