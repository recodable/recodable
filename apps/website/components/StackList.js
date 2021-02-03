import { useState, useEffect } from 'react';
import ReactIcon from '../components/ReactIcon';
import VueIcon from '../components/VueIcon';
import ElectronIcon from '../components/ElectronIcon';
import IonicIcon from '../components/IonicIcon';
import LaravelIcon from '../components/LaravelIcon';
import NestIcon from '../components/NestIcon';
import NodeIcon from '../components/NodeIcon';
import TailwindIcon from '../components/TailwindIcon';
import { AnimatePresence, motion } from 'framer-motion';
import SvelteIcon from "../components/SvelteIcon"

const items = [
  { name: 'Svelte', IconComponent: SvelteIcon },
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
    <div className="pt-4 bg-white rounded-lg flex flex-col-reverse md:flex-row md:items-center">
      <ul className="md:px-4 py-2 flex">
        {items.map((item) => {
          const { IconComponent } = item;
          return (
            <li
              key={item.name}
              className={`text-gray-500 hover:text-gray-700 cursor-pointer rounded-lg p-2 ${
                selectedItem.name !== item.name ? 'grayscale' : 'bg-blue-50 '
              }`}
              onMouseEnter={() => setSelected(item)}
              onMouseLeave={() => setSelected(null)}
            >
              <IconComponent className="w-5 h-5 sm:w-7 sm:h-7 " />
            </li>
          );
        })}
      </ul>

      <span className="px-2 md:px-0 text-sm sm:text-md font-thin sm:font-light text-gray-500">
        We ❤️ to work with{' '}
        <AnimatePresence exitBeforeEnter>
          <motion.span
            key={selectedItem.name}
            className="font-medium text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {selectedItem.name}
          </motion.span>
        </AnimatePresence>
      </span>
    </div>
  );
}

export default StackList;
export { items };
