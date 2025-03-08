import React from "react";
import { useNavigate } from "react-router-dom";
import { workshopsReach as workshops } from "../constants/workshops";
import { WorkshopContacts } from "../constants/workshops";
import { LoaderData } from "../context/loaderContext";
import Loader from "../components/Loader/Loader";
import Contact from "../components/Contact";
const Workshops = () => {
  const navigate = useNavigate();
  const white = "#fff";

  const { isLoading } = LoaderData();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="bg-black min-h-screen flex justify-center items-center pt-8  ">
      <div className="w-full max-w-7xl px-4 ">
        <h2
          style={{ color: white }}
          className="my-5 mt-20 text-5xl font-bold text-[#fcfcfc] text-center mb-8 overflow-hidden [text-shadow:6px_2px_4px_#c03e3e]"
        >
          Workshops
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {workshops.map((workshop) => (
            <div
              key={workshop.id}
              className="border-[2px] border-[#FF5555] bg-[#1d1d1d] text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 border-b-2 pb-4">
                # {workshop.title}
              </h3>
              <img
                src={workshop.image}
                alt={`Workshop ${workshop.id}`}
                className="w-full h-48 object-contain rounded-md hover:bg-[#303030]"
                onClick={() => {
                  navigate(`${workshop.to}`);
                }}
              />
              <p className="text-lg font-medium pt-4">{workshop.description}</p>
              <button
                className="my-3 px-4 py-2 bg-gradient-to-br from-red-300 via-red-500 to-red-800 text-white font-bold rounded-full shadow-lg hover:shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-shadow"
                onClick={() => {
                  navigate(`${workshop.to}`);
                }}
              >
                Read More {`<~>`}
              </button>
            </div>
          ))}
        </div>

        <Contact contacts={WorkshopContacts} category={"workshop"} />
      </div>
    </div>
  );
};

export default Workshops;
