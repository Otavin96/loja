import type { Product } from "../../models/Product/product-model";

interface ItemProps {
  product: Product;
}

export default function Item({ product }: ItemProps) {
  return (
    <div>
      <h3>{product.name}</h3>
      <img className="w-64 h-64" src={`http://localhost:3000${product.images[0]}`} alt="" />
      <p>Descrição: {product.description}</p>
      <p>Preço: {product.price}</p>
    </div>
  );
}
