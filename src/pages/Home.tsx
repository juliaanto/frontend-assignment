import { ProductList } from "../components";
import { getInitialProducts } from "../features/products/productsSlice";
import { useAppSelector } from "../app/hooks";

function Home() {
  const products = useAppSelector(getInitialProducts);
  
  return (
    <main className="m-20">
      <ProductList products={products} />
    </main>
  )
}

export default Home;