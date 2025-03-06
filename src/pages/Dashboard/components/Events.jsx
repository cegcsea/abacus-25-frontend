import { UserData } from "../../../context/userContext";
import { events } from "../../../constants/events.js";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaInfo } from "react-icons/fa";
const Events = () => {
  const navigate = useNavigate();
  const { userEvents, user, isAuth, refreshauth } = UserData();
  //const { userEvents, getEvents } = useContext(UserContext);

  //const eventNames = { ...Object.fromEntries((userEvents || []).map((event) => [event.eventName, true])), ...(user.eventPayments || {}) };
  const eventNames = [
    ...(userEvents || []).map((event) => event.eventId),
    ...(user.eventPayments || []).map((event) => event.eventId),
  ];

  //console.log(userEvents, user.eventPayments);
  const allEvents = events.flatMap((category) => category.event);
  const filteredEvents = allEvents.filter((event) =>
    eventNames.includes(event.id)
  );
  const notIncludedEvents = allEvents.filter(
    (event) => !eventNames.includes(event.id)
  );

  // useEffect(() => {
  //   console.log(userEvents);
  //   console.log(eventNames);
  //   console.log(filteredEvents);
  //   console.log(notIncludedEvents);
  // }, [userEvents]);
  const [bestPayment, setBestPayment] = useState(null);
  const getbestPayment = (selectedEvent) => {
    if (!user?.eventPayments || !Array.isArray(user.eventPayments)) {
      return null;
    }
    const eventPaymentss = user.eventPayments.filter(
      (payment) => payment.eventId === selectedEvent.id
    );

    let bestPayment = null;

    for (const payment of eventPaymentss) {
      if (payment.status === "SUCCESS") {
        return payment;
      } else if (
        payment.status === "PENDING" &&
        (bestPayment?.status === "FAILURE" || !bestPayment)
      ) {
        bestPayment = payment;
      } else if (!bestPayment) {
        bestPayment = payment;
      }
    }

    return bestPayment;
  };
  const colorFinder = (status) => {
    if (status === "PENDING") return "text-yellow-500";
    if (status === "SUCCESS") return "text-green-500";
    if (status === "FAILURE") return "text-red-400";
  };

  //console.log(userEvents);

  return (
    <div className="flex flex-col gap-5">
      {(filteredEvents || []).map((event, index) => {
        let { title, description, image, to } = event;
        const isPaid = (user.eventPayments || []).some(
          (payment) => payment.eventId === event.id
        );
        let bestPayment = getbestPayment(event);
        return (
          <div
            className="my-3 py-3 flex md:flex-row flex-col border border-[#2F1B1B] bg-black w-full"
            key={index}
          >
            <div className="w-full md:w-2/5 p-2 border border-r-0 border-b md:border-r md:border-y-0 border-l-0">
              <img
                src={image}
                alt="Event Img"
                className="w-full object-cover"
              />
            </div>
            <div className="w-full md:w-3/5 flex flex-col justify-center mt-10 items-center">
              <div>
                <h2 className="text-white font-medium text-2xl  border border-b border-x-0 border-t-0 p-1">
                  <span className="text-red-500">&#60;</span>
                  &nbsp;{title}&nbsp;
                  <span className="text-red-500">&#62;</span>
                </h2>
                <p className="text-[#e2e3e4]  text-justify p-3 ">
                  {(description || []).slice(0, 150)}...&nbsp;
                  <span className="text-[#ABB2BF]">
                    <Link to={`/events/${to}`}>Read More</Link>
                  </span>
                </p>
                <p className="p-1 m-3 text-center  mx-auto w-fit text-white text-sm md:text-lg font-semibold text-gray border rounded-lg border-gray-700 bg-slate-800/50">
                  <span className="text-lime-400 ">/*</span>
                  &nbsp;Registered for this event!&nbsp;
                  <span className="text-lime-400">*/</span>
                </p>
                {isAuth && isPaid && bestPayment?.status === "PENDING" && (
                  <div className="flex justify-center items-center w-[95%] flex-col mx-auto">
                    <button className="m-3 w-fit border border-[#ddb878] px-4 py-2 text-white duration-150 hover:bg-[#ddc27833] mx-auto">
                      Paid for the event {"<"}~{">"}
                    </button>
                    <p className="text-xl font-semibold text-white">
                      Status:&nbsp;
                      <span className={colorFinder(bestPayment?.status)}>
                        {bestPayment?.status}
                      </span>
                    </p>
                    <p className="flex justify-center items-center gap-2 text-white bg-gray-500 py-3 px-1 rounded-3xl">
                      <span className="text-white bg-red-400 p-1 rounded-full">
                        <FaInfo />
                      </span>
                      Your payment will be reflected within 2 business days!
                    </p>
                  </div>
                )}

                {isAuth && isPaid && bestPayment?.status === "SUCCESS" && (
                  <>
                    <button className="m-3 w-fit border border-lime-400 px-4 py-2 text-white duration-150 hover:bg-lime-400/40">
                      Payment Verified! {"<"}~{">"}
                    </button>
                    <p className="text-xl font-semibold text-white">
                      Status:&nbsp;
                      <span className={colorFinder(bestPayment?.status)}>
                        {bestPayment?.status}
                      </span>
                    </p>
                  </>
                )}

                {isAuth && isPaid && bestPayment?.status === "FAILURE" && (
                  <>
                    <Link to={`/events/${event.to}/payment`}>
                      <button className="m-3 w-fit border border-red-400 px-4 py-2 text-white duration-150 hover:bg-red-400/40">
                        Pay Again! {"<"}~{">"}
                      </button>
                    </Link>
                    <p className="text-xl font-semibold text-white">
                      Status:&nbsp;
                      <span className={colorFinder(bestPayment?.status)}>
                        {bestPayment?.status}
                      </span>
                    </p>
                    <p className="flex justify-center items-center gap-2 text-white bg-gray-500 py-3 px-1 rounded-3xl">
                      <span className="text-white bg-red-400 p-1 rounded-full">
                        <FaInfo />
                      </span>
                      There seems to be some error during your payment. Please
                      initiate payment again!
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
      {notIncludedEvents.map((event) => {
        let { title, description, image, to } = event;
        return (
          <div
            className="my-3 py-3 flex md:flex-row flex-col border border-[#2F1B1B] bg-black w-full"
            key={event.id}
          >
            <div className="w-full md:w-2/5 p-5 border border-r-0 border-b md:border-r md:border-y-0 border-l-0">
              <img
                src={image}
                alt="Event Img"
                className="w-full object-cover"
              />
            </div>
            <div className="w-full md:w-3/5 flex flex-col justify-center mt-10 items-center">
              <div>
                <h2 className="text-white font-medium text-2xl border border-b border-x-0 border-t-0 p-3">
                  <span className="text-red-500">&#60;</span>
                  &nbsp;{title}&nbsp;
                  <span className="text-red-500">&#62;</span>
                </h2>
                <p className="text-[#e2e3e4] p-3 text-justify">
                  {(description || []).slice(0, 150)}...&nbsp;
                  <span className="text-[#ABB2BF]">
                    <Link to={`/events/${to}`}>Read More</Link>
                  </span>
                </p>
                <p className="p-1 m-2 mx-auto text-center w-fit text-white text-sm md:text-lg font-semibold text-gray border rounded-lg border-gray-700 bg-slate-800/50">
                  <span className="text-red-400">/*</span>
                  &nbsp;Not Registered for this event!&nbsp;
                  <span className="text-red-400">*/</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="w-full flex justify-end mt-5 ">
        <button
          className={`py-3 px-4 w-fit md:text-base mx-auto text-xs text-white border border-red-600 hover:bg-red-700/40 duration-150`}
          onClick={() => navigate("/events")}
        >
          Explore Events {"<"}~{">"}
        </button>
      </div>
    </div>
  );
};

export default Events;
