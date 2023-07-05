import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, ProductDetails, Search } from './pages';

import { AppRoute } from './app-route';
import { IProduct } from './types/product';
import { Navigation } from './components';
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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path={AppRoute.Home} element={<Home />} />
        <Route path={AppRoute.Search} element={<Search />} />
        <Route path={AppRoute.ProductDetails} element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
