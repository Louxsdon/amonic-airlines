import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.headers = { "Content-Type": "application/json" };

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
