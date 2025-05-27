import type { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';

interface props {
  setSelected: Dispatch<SetStateAction<string>>;
  selected: string;
  options: string[];
}

export const ImageSelect = ({ selected, setSelected, options }: props) => {
  if (!selected) return <>laoding</>;

  return (
    <div className="md:w-1/2">
      <div className="mb-4 bg-white rounded-lg overflow-hidden shadow">
        <img src={selected} alt={selected} className="w-full h-auto max-h-[500px] object-contain" />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {options.map((img, index) => (
          <SelectebleItem key={img} img={img} index={index} selected={selected} setSelected={setSelected} />
        ))}
      </div>
    </div>
  );
};

interface slectableProps {
  setSelected: Dispatch<SetStateAction<string>>;
  selected: string;
  index: number;
  img: string;
}

const SelectebleItem = ({ setSelected, selected, index, img }: slectableProps) => {
  const handleSelect = () => setSelected(img);

  return (
    <button
      onClick={handleSelect}
      key={index}
      className={clsx(
        'bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow border-2 border-gray-300 cursor-pointer',
        { 'border-indigo-500': img === selected },
      )}
    >
      <img src={img} alt={`Вариант ${index + 1}`} className="w-full h-20 object-contain" />
    </button>
  );
};
