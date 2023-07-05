import { IProduct } from './types/product';
import { Main } from './pages';
import { setProducts } from './features/products/productsSlice';
import { useAppDispatch } from './app/hooks';
import { useEffect } from 'react';
import { useProducts } from './hooks/useProducts';

function App() {
  const {data} = useProducts();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setProducts(data as IProduct[]));
  }, [data, dispatch]);
  
  return (
    <Main />
  );
}

export default App;
