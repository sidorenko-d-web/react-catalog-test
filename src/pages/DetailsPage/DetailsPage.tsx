import { Select, ReturnButton, ImageSelect, Button } from '../../components';
import { getDetailsInfo } from '../../hooks';
import { useCartItemStore } from '../../store';

export const DetailsPage = () => {
  const { colorData, itemData, isPending, colorHandlers, sizeHandlers, imageHandlers, isAddToCartAvaliable } =
    getDetailsInfo();

  const { addItem } = useCartItemStore();

  const handleAddItem = () => {
    const data = {
      sizeId: sizeHandlers.selected,
      colorId: colorHandlers.selected,
      itemId: itemData?.id!,
    };

    addItem(data);
  };

  if (isPending) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <ReturnButton />

      <div className="flex flex-col md:flex-row gap-8">
        <ImageSelect {...imageHandlers} />

        <div className="md:w-1/2 flex flex-col gap-6">
          <h1 className="text-3xl font-bold">{itemData?.name}</h1>

          <span className="text-2xl font-bold text-indigo-600">{colorData?.price} ₽</span>

          <span className="text-lg font-bold text-gray-800 ">{colorData?.description}</span>

          <Select title={'Цвет'} {...colorHandlers} />

          <Select title={'Размер'} {...sizeHandlers} />

          <Button disabled={!isAddToCartAvaliable} onClick={handleAddItem}>
            Добавить в корзину
          </Button>
        </div>
      </div>
    </div>
  );
};
