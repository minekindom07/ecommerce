import products from "./productsData"
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <div className="card-container">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}
