import { BrowserRouter, Routes, Route } from 'react-router';
import { CartPage, CatalogPage, DetailsPage } from '../pages';
import { Header } from '../components';
import { AppRoutes } from './AppRoutes';

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <Routes>
            <Route path={AppRoutes.CatalogPage} element={<CatalogPage />} />
            <Route path={AppRoutes.CartPage} element={<CartPage />} />
            <Route path={AppRoutes.DetailsPage + '/:id'} element={<DetailsPage />} />

            <Route path={AppRoutes.NotFound} element={<h1>404</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
