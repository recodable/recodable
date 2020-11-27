import React, { useState, useEffect } from 'react';
import ReactIcon from '../components/ReactIcon';
import VueIcon from '../components/VueIcon';
import ElectronIcon from '../components/ElectronIcon';
import IonicIcon from '../components/IonicIcon';
import LaravelIcon from '../components/LaravelIcon';
import NestIcon from '../components/NestIcon';
import NodeIcon from '../components/NodeIcon';
import TailwindIcon from '../components/TailwindIcon';

const items = [
  { name: 'React.js', IconComponent: ReactIcon },
  { name: 'Vue.js', IconComponent: VueIcon },
  { name: 'Electron', IconComponent: ElectronIcon },
  { name: 'Ionic', IconComponent: IonicIcon },
  { name: 'Laravel', IconComponent: LaravelIcon },
  { name: 'Nest.js', IconComponent: NestIcon },
  { name: 'Node.js', IconComponent: NodeIcon },
  { name: 'Tailwind.css', IconComponent: TailwindIcon },
];

function StackList() {
  const [selected, setSelected] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((previous) => {
        if (previous < items.length - 1) return previous + 1;
        return 0;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const selectedItem = !!selected ? selected : items[current];

  return (
    <div className="flex items-center">
      <ul className="bg-gray-100 rounded-lg px-4 py-2 flex">
        {items.map((item) => {
          const { IconComponent } = item;
          return (
            <li
              key={item.name}
              className={`text-gray-500 hover:text-gray-700 cursor-pointer px-1 ${
                selectedItem.name !== item.name ? 'grayscale' : ''
              }`}
              onMouseEnter={() => setSelected(item)}
              onMouseLeave={() => setSelected(null)}
            >
              <IconComponent className="w-7 h-7" />
            </li>
          );
        })}
      </ul>

      <span className="font-light text-gray-500">
        We ❤️ to work with{' '}
        <span className="font-medium">{selectedItem.name}</span>
      </span>
    </div>
  );
}

export default StackList;
