import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenItemIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div className="border-b border-slate-100" key={index}>
          <button
            className="inline-flex items-center gap-[8px] w-full font-semibold text-left p-2 rounded transition duration-300 relative"
            onClick={() => toggleItem(index)}
          >
            <span className='grow'>
            {item.title}
            </span>
            <FontAwesomeIcon
              icon={openItemIndex === index ? faAngleUp : faAngleDown}
            />
          </button>
          {openItemIndex === index && (
            <div className="p-4 bg-slate-50 rounded text-sm whitespace-pre-wrap">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

