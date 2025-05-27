import { Link } from 'react-router';
import type { IItem } from '../../../types';
import { AppRoutes } from '../../../appRouter';

interface props {
  item: IItem;
}

export const CatalogItem = ({ item }: props) => {
  const detailsPath = AppRoutes.DetailsPage + '/' + item.id;
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={detailsPath}>
        <img src={item.colors[0].images[0]} alt={item.colors[0].name} className="w-full h-64 object-contain" />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">
          <Link to={detailsPath} className="hover:text-indigo-600">
            {item.name}
          </Link>
        </h3>
      </div>
    </div>
  );
};
