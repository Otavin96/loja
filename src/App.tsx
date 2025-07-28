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
    <div className="flex flex-col h-screen w-full items-center bg-[#303030]">
      <Navbar />
      <div className="grid grid-cols-5 gap-4 justify-center my-20 px-10">
        {products?.items.length === 0 ? (
          <div className="col-span-full justify-center items-center">
            <p>Nenhum Produto cadastrado encontrado!</p>
          </div>
        ) : (
          products?.items.map((product) => (
            <Card className="flex flex-col items-center gap-4 outline outline-offset-2 bg-white rounded-md shadow-xl p-4">
              <Item key={product.id} product={product} />
            </Card>
          ))
        )}
      </div>
      <Pagination />
    </div>
  );
}

export default App;
