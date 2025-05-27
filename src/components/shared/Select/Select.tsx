import type { Dispatch, SetStateAction } from 'react';

type TypeOption = { value: string; id: number; isAvaliable: boolean };

interface props {
  options: TypeOption[];
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
  title: string;
}

export function Select({ options, setSelected, selected, title }: props) {
  const handleSelect = (item: TypeOption) => {
    setSelected(item.id);
  };
  return (
    <>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {options?.map((item, index) => (
          <button
            disabled={!item.isAvaliable}
            onClick={() => handleSelect(item)}
            key={index}
            className={`px-3 py-2 rounded-lg border-2 capitalize hover:bg-indigo-100 transition-all disabled:opacity-[0.2] cursor-pointer ${
              selected === item.id ? 'border-indigo-500' : 'border-transparent'
            }`}
          >
            {item.value}
          </button>
        ))}
      </div>
    </>
  );
}
