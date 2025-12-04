import "./App.css";
import Header from "./layouts/header/Header";
import Catalog from "./components/Catalog";
import Head from "./components/head/Head";
import Baner from "./baner/Baner";
import Footer from "./components/footer/Footer";
import List from "./components/list/List";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Catalog />
        <div>
          <div style={{ marginBottom: "1rem" }}>
            <Head />
          </div>
          <div className="center-container">
            <Baner />
            <List />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
