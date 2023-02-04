import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [subject, setSubject] = useState([]);
  const {classes, setClasses, value, setValue} = useContext(AuthContext);

  useEffect(() => {
    fetch("subject.json")
      .then((res) => res.json())
      .then((data) => {
        setSubject(data);
      });
  }, []);

  const handleName = (data) => {
    setValue(data);
    setClasses(false);
  };

  return (
    <nav className="w-full bg-white">
      <div className="justify-between px-4 mx-auto md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div>
              <button
                onClick={() => setClasses(!classes)}
                className="flex gap-2 font-semibold p-2 border border-blue-500 rounded text-blue-500"
              >
                Class {value.cl ? value.cl : "1"}{" "}
                {value.name ? value.name : "English"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-chevron-down"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`absolute bg-gray-200 ml-4 px-8 z-20 ${
          classes ? "block" : "hidden"
        }`}
      >
        {subject?.map((sub,index) => {
          return (
            <div class="my-5" key={index}>
              <div class="dropdown inline-block relative">
                <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                  <span class="mr-1">Class {sub.class}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-chevron-right"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="#909296"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <polyline points="9 6 15 12 9 18"></polyline>
                  </svg>
                </button>
                <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 left-[100px] -top-1">
                  {sub?.subject?.map((sa, index) => {
                    return (
                      <li class="" key={index}>
                        <p
                          onClick={() =>
                            handleName({ name: sa.name, cl: sa.cls })
                          }
                          class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
                        >
                          {sa.name}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
