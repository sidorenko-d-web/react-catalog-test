import clsx from 'clsx'
import type { PropsWithChildren } from 'react'

interface props {
  disabled?: boolean
  className?: string
  onClick?: (arg: any) => any
}

export const Button = ({
  disabled,
  className,
  children,
  onClick
}: PropsWithChildren<props>) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-indigo-200 cursor-pointer',
        className
      )}
    >
      {children}
    </button>
  )
}
