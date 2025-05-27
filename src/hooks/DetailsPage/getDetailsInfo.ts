import { useNavigate, useParams } from 'react-router';
import { useGetProductById } from '../useGetProductById';
import { useEffect, useMemo, useState } from 'react';
import { useGetProductColorById } from '../useGetProductColorById';
import { useGetSizes } from '../useGetSizes';
import { useCartItemStore } from '../../store';
import { compareCartItem } from '../../helpers';
import { AppRoutes } from '../../appRouter';

export const getDetailsInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { items } = useCartItemStore();

  const [selectedColorId, setSelectedColorId] = useState(1);
  const [selectedSizeId, setSelectedSizeId] = useState(1);
  const [selectedImage, setSelectedImage] = useState('');

  const { data: itemData, error: itemError, isPending: isItemPending } = useGetProductById(+(id ?? 0));

  const {
    data: colorData,
    error: colorError,
    isPending: colorIsPending,
  } = useGetProductColorById(itemData?.id ?? 0, selectedColorId);

  const { data: sizesData, error: sizesError, isPending: sizesIsPending } = useGetSizes();

  useEffect(() => {
    if (!colorData) return;
    setSelectedSizeId(colorData.sizes[0]);
    setSelectedImage(colorData.images[0]);
  }, [colorData?.id, colorData?.name]);

  if (itemError || colorError || sizesError) navigate(AppRoutes.NotFound);

  const isPending = isItemPending || colorIsPending || sizesIsPending;

  const isCanUseItemSize = colorData?.sizes?.includes(selectedSizeId);

  const isAddToCartAvaliable =
    isCanUseItemSize &&
    !items.some(item =>
      compareCartItem(item, {
        sizeId: selectedSizeId,
        colorId: selectedColorId,
        itemId: itemData?.id!,
      }),
    );

  const colorsOptions = useMemo(() => {
    if (!itemData) return [];

    return itemData!.colors.map(item => ({
      value: item.name,
      id: item.id,
      isAvaliable: true,
    }));
  }, [itemData?.name, itemData?.name]);

  const sizesOptions = useMemo(() => {
    if (!sizesData || !colorData) return [];

    return sizesData!.map(item => {
      const isHasSize = colorData.sizes.includes(item.id);
      const isNotAddedToCart = !items.some(_item =>
        compareCartItem(_item, {
          sizeId: item.id,
          colorId: selectedColorId,
          itemId: itemData?.id!,
        }),
      );

      return {
        value: item.label,
        id: item.id,
        isAvaliable: isHasSize && isNotAddedToCart,
      };
    });
  }, [!!sizesData, sizesData?.length, colorData?.sizes.length, items.length]);

  return {
    isPending,
    isAddToCartAvaliable,
    colorData,
    itemData,
    colorsOptions,
    sizesOptions,
    colorHandlers: {
      options: colorsOptions,
      selected: selectedColorId,
      setSelected: setSelectedColorId,
    },
    sizeHandlers: {
      options: sizesOptions,
      selected: selectedSizeId,
      setSelected: setSelectedSizeId,
    },
    imageHandlers: {
      options: colorData?.images!,
      selected: selectedImage,
      setSelected: setSelectedImage,
    },
  };
};
