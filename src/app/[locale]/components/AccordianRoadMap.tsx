import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

interface AccordionItem {
  title: JSX.Element | string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const AccordionRoadMap: React.FC<AccordionProps> = ({ items }) => {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenItemIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div className="border-b border-slate-100" key={index}>
          <button
            className="w-full font-semibold text-left p-2 rounded transition duration-300 relative flex justify-between items-center"
            onClick={() => toggleItem(index)}
          >
            {item.title}
            <FontAwesomeIcon
              icon={openItemIndex === index ? faAngleUp : faAngleDown}
              className="ml-2"
            />
          </button>
          {openItemIndex === index && (
            <div
              className="p-4 bg-slate-50 rounded text-sm"
              dangerouslySetInnerHTML={{ __html: item.content }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionRoadMap;


