import Navbar from '../components/Navbar';
import '../app.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
