import { Link } from 'react-router'

import { CartItem } from '../../components/cart'
import { useCartItemStore } from '../../store'
import { Button } from '../../components'

export const CartPage = () => {
  const { items } = useCartItemStore()

  return (
    <div className='container lg:max-w-[1024px] mx-auto px-4 py-4'>
      <h1 className=' text-3xl font-bold mb-8'>Корзина</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {items.length <= 0 && (
          <div className='flex flex-col gap-8'>
            <h2 className='text-lg'>Ваша корзина пуста!</h2>

            <Link to={'/'}>
              <Button>Вернуться в каталог</Button>
            </Link>
          </div>
        )}
        {items?.map((item) => (
          <CartItem
            key={'' + item?.colorId + item.itemId + item.sizeId}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}
