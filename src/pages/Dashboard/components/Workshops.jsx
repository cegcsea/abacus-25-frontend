import { UserData } from "../../../context/userContext";
import { workshopsReach } from "../../../constants/workshops.js";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Workshops = () => {
  const navigate = useNavigate();
  const { user ,refreshauth} = UserData();

  const eventNames = (user?.WorkshopPayment || []).map((event) => event.workshopId);
  const filteredEvents = (workshopsReach || []).filter((event) =>
    eventNames.includes(event.code)
  );
  const notIncludedEvents = (workshopsReach || []).filter(
    (event) => !eventNames.includes(event.code)
  );

  

  // useEffect(() => {
  //   refreshauth();
  //   console.log("filteredEvents:", filteredEvents);
  //   console.log("notIncludedEvents:", notIncludedEvents);
  //   console.log("registeredSession:", registeredSession);
  // },[]);

  return (
    <div className="flex flex-col gap-5">
      {filteredEvents.map((event, index) => {
        let { title, content, image, to } = event;
        return (
          <div
            className="my-3 py-3 flex md:flex-row flex-col border border-[#2F2F2F]"
            key={index}
          >
            <div className="w-full md:w-2/5 p-5 border border-r-0 border-b md:border-r md:border-y-0 border-l-0 flex justify-center items-center">
              <img
                src={image}
                alt="Event Image"
                className="w-full object-cover"
              />
            </div>
            <div className="w-full md:w-3/5 flex flex-col justify-center items-center">
              <div>
                <h2 className=" text-white font-medium text-2xl border border-b border-x-0 border-t-0 p-3">
                  <span className="text-red-500">&#60;</span>
                  &nbsp;{title}&nbsp;
                  <span className="text-red-500">&#62;</span>
                </h2>
                <p className=" text-white p-3 text-justify">
                  {content.slice(0, 150)}...&nbsp;
                  <span className="text-red-300">
                    <Link to={`/workshops/${to}`}>Read More</Link>
                  </span>
                </p>
                <p className="p-2 m-3 text-center mx-auto w-fit text-white text-sm md:text-lg font-semibold  border rounded-lg border-gray-700 bg-black">
                  <Link to={`/workshops/${to}`}>
                    <span className="text-red-400">/*</span>
                    &nbsp;Check your payment status!&nbsp;
                    <span className="text-red-400">*/</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        );
      })}
      {notIncludedEvents.map((event, index) => {
        let { title, content, image, to } = event;
        return (
          <div
            className="card w-full flex md:flex-row flex-col border border-[#2F2F2F]"
            key={index}
          >
            <div className="w-full md:w-2/5 p-5 border border-r-0 border-b md:border-r md:border-y-0 border-l-0 flex justify-center items-center">
              <img
                src={image}
                alt="Event Image"
                className="w-full object-cover"
              />
            </div>
            <div className="w-full md:w-3/5 flex flex-col justify-center items-center">
              <div>
                <h2 className=" text-white font-medium text-2xl border border-b border-x-0 border-t-0 p-3">
                  <span className="text-red-500">&#60;</span>
                  &nbsp;{title}&nbsp;
                  <span className="text-red-500">&#62;</span>
                </h2>
                <p className=" text-white p-3 text-justify">
                  {content.slice(0, 150)}...&nbsp;
                  <span className="text-red-300">
                    <Link to={`/workshops/${to}`}>Read More</Link>
                  </span>
                </p>
                <p className="p-2 m-3 text-center mx-auto w-fit text-white text-sm md:text-lg font-semibold  border rounded-lg border-gray-700 bg-black">
                  <span className="text-red-400">/*</span>
                  &nbsp;Not Registered for this workshop!&nbsp;
                  <span className="text-red-400">*/</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
      
      <div className="w-full mt-5 mx-auto">
        <button
          className={`py-3 px-4 w-fit md:text-base text-xs text-white border  border-red-600 hover:bg-red-700/40 duration-150`}
          onClick={() => navigate("/workshops")}
        >
          Explore Workshops {"<"}~{">"}
        </button>
      </div>
    </div>
  );
};

export default Workshops;
