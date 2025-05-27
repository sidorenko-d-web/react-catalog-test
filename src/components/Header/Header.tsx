import { Link } from 'react-router';
import { useCartItemStore } from '../../store';
import { AppRoutes } from '../../appRouter';

export const Header = () => {
  const { items } = useCartItemStore();

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to={AppRoutes.CatalogPage} className="text-xl font-bold text-indigo-600">
          T-Shirt Shop
        </Link>
        <div className="flex space-x-4">
          <Link to={AppRoutes.CatalogPage} className="px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors">
            Каталог
          </Link>
          <Link to={AppRoutes.CartPage} className="px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors">
            Корзина
            {items.length > 0 && (
              <span className="text-sm bg-violet-400 rounded-full w-5 h-5 text-center text-white absolute -translate-y-[10px]">
                {items.length}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};
