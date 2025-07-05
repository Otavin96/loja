import "./App.css";
import { CardItem } from "./componets/CardItem";
import { Navbar } from "./componets/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <h1 className="text-4xl text-amber-300 font-bold">Hello Word!</h1>
      <div className="flex flex-wrap justify-center gap-5">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
}

export default App;
