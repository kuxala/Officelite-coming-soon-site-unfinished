import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import CardWhite from "./components/CardWhite";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <MainPage />

      <div>
        <Card
          plan="Basic"
          price="Free"
          span="Up to 5 users for free"
          storage={2}
          text="Basic document collaboration"
          text2="Great security and support"
        />
        <CardWhite
          plan="Pro"
          price="$9.99"
          span="Per user, billed monthly"
          storage={50}
          text="All essential integrations"
          text2="More control and insights"
        />
        <Card
          plan="Ultimate"
          price="$19.99"
          span="Per user, billed monthly"
          storage={100}
          text="Robust work management"
          text2="VIP support"
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
