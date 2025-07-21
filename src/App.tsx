import "./App.css";
import Card from "./componets/Card";
import Item from "./componets/Item";
import Navbar from "./componets/Navbar";
import Pagination from "./componets/Pagination";
import { useFetchProducts } from "./hooks/useFecthProducts";

function App() {
  const { data: products, isLoading } = useFetchProducts();

  if (isLoading) {
    return (
      <div className="flex w-full h-full justify-center items-center z-50">
        <h2>Carregando...</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full items-center">
      <Navbar />
      <div className="grid grid-cols-5 gap-4 justify-center my-20 px-10">
        {
          products?.items.length === 0 ? <p>Nenhum Produto cadastrado encontrado!</p> :
            products?.items.map((product) => (
              <Card className="flex flex-col items-center gap-4 outline outline-offset-2 outline-zinc-700 rounded-md shadow-xl py-4">
                <Item key={product.id} product={product} />
              </Card>
            ))}
      </div>
      <Pagination />
    </div>
  );
}

export default App;
