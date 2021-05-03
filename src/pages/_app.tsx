import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Component {...pageProps} />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js" type="text/javascript"></script>
    </div>
    
    )
  
}

export default MyApp
