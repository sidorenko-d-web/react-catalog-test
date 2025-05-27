import { useGetProductById, useGetProductColorById, useGetSizeById } from '../../hooks';
import { useCartItemStore } from '../../store';
import { Button } from '../shared';

interface props {
  itemId: number;
  colorId: number;
  sizeId: number;
}

export const CartItem = ({ itemId, colorId, sizeId }: props) => {
  const { data: itemData } = useGetProductById(itemId);
  const { data: colorData } = useGetProductColorById(itemId, colorId);
  const { data: sizeData } = useGetSizeById(sizeId);

  const { removeItem } = useCartItemStore();

  const handleDeleteItem = () => {
    if (!sizeData || !itemData || !colorData) return;

    const data = {
      sizeId: sizeData?.id,
      colorId: colorData?.id,
      itemId: itemData?.id!,
    };
    removeItem(data);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={colorData?.images[0]} alt={itemData?.name} className="w-full h-64 object-contain" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{itemData?.name}</h3>
        <h3 className="text-lg font-semibold mb-2">{sizeData?.label}</h3>
        <Button onClick={handleDeleteItem} className="bg-red-400 hover:bg-red-500">
          Удалить предмет
        </Button>
      </div>
    </div>
  );
};
