import type { Product } from "../../models/Product/product-model";
import Button from "../Button";

interface ItemProps {
  product: Product;
}

export default function Item({ product }: ItemProps) {
  return (
    <>
      <h3 className="uppercase">{product.name}</h3>
      <img
        className="w-64 h-64"
        src={`http://localhost:3000${product.images[0]}`}
        alt=""
      />
      <p>Descrição: {product.description}</p>
      <p>Preço: {product.price}</p>
      <Button
        type="button"
        className="w-36 h-8 rounded-md text-white font-bold bg-blue-700 cursor-pointer hover:opacity-90"
      >
        Ver mais
      </Button>
    </>
  );
}
