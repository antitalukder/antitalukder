import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import { useContext } from 'react';
import { ProductsContext } from './contexts/products.context';

const Shop = () => {
  const {products } = useContext(ProductsContext)
  return (
    <>
    {products.map((products) => (
      <div>{products.name}</div>
    ))}
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
