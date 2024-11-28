import { useState, useRef, useEffect } from "react";
import { data } from "../../content/FAQ";
import icon from "../../assets/category/eva_arrow-ios-back-fill.svg";

type faq = {
  id: number;
  title: string;
  active: boolean;
};

const Question = () => {
  const [FAQs, setFAQs] = useState<faq[]>(data);
  const contentRefs = useRef<HTMLDivElement[]>([]); // to store references to each FAQ content div

  const handleClick = (id: number) => {
    const newData = FAQs.map((item) =>
      id === item.id ? { ...item, active: !item.active } : { ...item, active: false }
    );
    setFAQs(newData);
  };

  useEffect(() => {
    FAQs.forEach((faq, index) => {
      if (contentRefs.current[index]) {
        if (faq.active) {
          contentRefs.current[index].style.maxHeight = `${contentRefs.current[index].scrollHeight}px`;
        } else {
          contentRefs.current[index].style.maxHeight = "0px";
        }
      }
    });
  }, [FAQs]);

  return (
    <div className="flex-col flex gap-6">
      {FAQs.map((item, ind) => (
        <div key={ind} className="sm:py-6 p-3 sm:px-7 rounded-md bg-white">
          <div className="flex items-center justify-between">
            <p className="text-[#242331] text-lg sm:text-xl md:text-3xl font-medium">
              <span>{ind + 1}.</span> {item.title}
            </p>
            <button
              onClick={() => {
                handleClick(item.id);
              }}
              className={`${
                item.active ? "rotate-90" : ""
              } transition-all duration-200`}
            >
              <img
                src={icon}
                alt="arrow icon"
                className="bg-gradient-to-r from-red to-yalwe p-2 sm:p-4 rounded-full"
              />
            </button>
          </div>
          <div
            ref={(el) => (contentRefs.current[ind] = el!)}
            className={`text-[#242331] text-sm sm:text-lg font-medium opacity-80 mt-3 m-2 sm:m-4 overflow-hidden transition-all duration-200 max-h-0`}
            style={{ maxHeight: item.active ? '1000px' : '0px' }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur. Leo mattis lorem facilisis diam
              consectetur. Convallis eget orci at orci massa integer. Morbi magna ornare
              iaculis mi sed. Vulputate tincidunt commodo commodo pellentesque id
              porttitor. At urna tellus enim amet nulla diam vestibulum sed. Habitant
              aliquam dolor non eget amet commodo praesent feugiat. Quis id egestas
              maecenas a orci aliquam habitant aliquet quisque. Adipiscing a tincidunt id
              mollis elementum. Mus orci quis arcu adipiscing. In arcu fames tempus a
              phasellus odio interdum risus. Nulla faucibus gravida massa sit.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Question;
