import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DetailPage from "./Pages/DetailPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <main className="py-3">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:_id" element={<DetailPage />} />
          </Routes>
        </main>

        <Footer />
      </Container>
    </Router>
  );
}

export default App;
