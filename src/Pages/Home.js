import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";
import InfoTabs from "./Answers/InfoTabs";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [data, setData] = useState([]);
  const [isActive, setIsActive] = useState('');
  const { setAnsId, value, setClasses } = useContext(AuthContext);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    fetch("options.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleTopic = (d) => {
    setAnsId(d.ansID)
    setIsActive(d.nmbr)
  };



  const cls = value.cl ? value.cl : "1";
  const subj = value.name ? value.name : "English";
  const clsAndSub = cls + " " + subj;

  const mainData = data?.find((dt) => dt.SC === clsAndSub);

  return (
    <div className="md:flex gap-10"
    onClick={()=>setClasses(false)}
    >
      <div>
      {mainData?.options.map((item, index) => (
        <div key={index} className="border-b p-3 w-[320px]">
          <button
            onClick={() => handleClick(index)}
            className="w-full text-left text-gray-700 "
          >
            <h3 className="font-medium text-lg">{item.qus}</h3>
            <span
              className={`float-right text-gray-600 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
            >
              &#x276f;
            </span>
          </button>
          <div className="border-l-2 border-blue-500">
          {activeIndex === index && (
            <>
            {
                item?.ans?.map((an, index) =>(
                    <p
                    onClick={()=>handleTopic(an)}
                    key={index} className={`p-4 my-2 text-gray-700 cursor-pointer ${isActive === an.nmbr ? "text-white bg-blue-500": null}  hover:bg-blue-500 hover:text-white`}>{an.nmbr}</p>
                ))
            }
            </>
          )}
          </div>
        </div>
      ))}
      </div>
      <div>
        <InfoTabs/>
      </div>
    </div>
  );
};

export default Home;
