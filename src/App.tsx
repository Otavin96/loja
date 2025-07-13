import "./App.css";
import CardItem from "./componets/CardItem";
import Navbar from "./componets/Navbar";
import Pagination from "./componets/Pagination";

function App() {
  return (
    <div className="flex flex-col w-full items-center">
      <Navbar />
      <div className="flex flex-wrap justify-center gap-5 mt-20">
        <CardItem url="../public/assets/produto1.png" />
        <CardItem url="../public/assets/produt2.png" />
        <CardItem url="../public/assets/produto1.png" />
        <CardItem url="../public/assets/produt2.png" />
        <CardItem url="../public/assets/produto1.png" />
        <CardItem url="../public/assets/produt2.png" />
      </div>
      <Pagination />
    </div>
  );
}

export default App;
