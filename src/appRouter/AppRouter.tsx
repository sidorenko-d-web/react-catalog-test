import { BrowserRouter, Routes, Route } from 'react-router'
import { CartPage, CatalogPage, DetailsPage } from '../pages'
import { Header } from '../components'

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <div className='min-h-screen bg-gray-100'>
          <Header />
          <Routes>
            <Route
              path='/'
              element={<CatalogPage />}
            />
            <Route
              path='/cart'
              element={<CartPage />}
            />
            <Route
              path='/details/:id'
              element={<DetailsPage />}
            />
            <Route
              path='*'
              element={<h1>404</h1>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}
