import { ProductList, SearchBar } from "../components";

import { getFilteredProducts } from "../features/products/productsSlice";
import { useAppSelector } from "../app/hooks";

function Search() {
  const products = useAppSelector(getFilteredProducts);

  return (
    <main className="m-20">
      <SearchBar />
      <ProductList products={products} />
    </main>
  )
}

export default Search;