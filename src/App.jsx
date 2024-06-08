import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/loader";
import Navbar from "./components/header/Navbar";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div>
          <Navbar />
          <Home />
          <Footer />
        </div>
      )}
      <div className="App"></div>
    </>
  );
}

export default App;
