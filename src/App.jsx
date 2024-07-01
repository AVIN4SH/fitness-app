import Header from "./components/Header";
import Home from "./components/Home";
import Exercise from "./components/Excercise";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise" element={<Exercise />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
