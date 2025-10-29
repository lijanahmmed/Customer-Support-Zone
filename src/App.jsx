import { Suspense } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import MainSection from "./Components/MainSection";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";

const fetchData = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};

function App() {
  const promiseData = fetchData();

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={"Loading"}>
        <MainSection promiseData={promiseData}></MainSection>
      </Suspense>
      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
