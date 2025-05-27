import { CatalogItem } from '../../components/catalog';
import { useGetProducts } from '../../hooks';

export const CatalogPage = () => {
  const { data } = useGetProducts();

  if (!data) return <h1>No Data Found</h1>;

  return (
    <div className="container lg:max-w-[1024px] mx-auto px-4 py-4">
      <h1 className=" text-3xl font-bold mb-8">Каталог футболок</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.map(item => (
          <CatalogItem key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
};
