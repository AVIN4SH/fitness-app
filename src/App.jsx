import Header from "./components/Header";
import Home from "./components/Home";
import Exercise from "./components/Excercise";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import ExerciseDetails from "./components/ExerciseDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
