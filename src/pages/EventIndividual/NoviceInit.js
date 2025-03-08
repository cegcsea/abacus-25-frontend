import React, { useEffect, useState } from "react";
import "../../styles/Intern.css";
import { useNavigate, useParams, Link } from "react-router-dom";
import Contact from "../../components/Contact.js";
//import img4 from "../../assets/images/internship.png";
import { events } from "../../constants/events.js";
import { UserData } from "../../context/userContext.js";
import { LoaderData } from "../../context/loaderContext.js";
import Loader from "../../components/Loader/Loader.jsx";
import { FaInfo } from "react-icons/fa";

const NoviceInit = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Ensure the route has a dynamic :id parameter
  const { userEvents, isAuth, eventRegister, getEvents, user, refreshauth } =
    UserData();
  //const selectedEvent = events.find((event) => event.to === id);
  const allEvents = events.flatMap((category) => category.event);

  const selectedEvent = allEvents.find((event) => {
    //console.log(`Checking event:`, event.to, "Expected:", id,event.to === id);
    return event.to === id;
  });

  useEffect(() => {
    getEvents();
  }, []);
  const [bestPayment, setBestPayment] = useState(null);
  const getbestPayment = () => {
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
  useEffect(() => {
    let x = getbestPayment();
    //console.log("x=", x);
    setBestPayment(x);
  }, [user?.eventPayments]);
  useEffect(() => {
    refreshauth();
  }, [user?.eventPayments?.length]);
  const [activeTab, setActiveTab] = useState("description");
  if (!selectedEvent) {
    return (
      <h1 style={{ textAlign: "center", color: "#fff" }} className="my-32">
        Event Not Found {typeof id}
      </h1>
    );
  }

  // Check if the user is already registered for this event
  const isRegistered =
    (userEvents || []).some(
      (event) => event.eventName === selectedEvent.title
    ) ||
    (user.eventPayments || []).some(
      (payment) => payment.eventId === selectedEvent.id
    );

  // Handle tab switching
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Handle event registration
  const handleRegister = async (e) => {
    //e.preventDefault();
    if (selectedEvent.formLink) {
      // If the event has a form link, open it in a new tab
      window.open(selectedEvent.formLink, "_blank");
    } else {
      eventRegister({ eventId: Number(selectedEvent.id) });
    }
  };
  const { isLoading } = LoaderData();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#fff" }} className="heading">
        {selectedEvent.title}
      </h1>
      <div className="middle-section">
        <div className="content-container">
          <img src={selectedEvent.image} alt="Event" className="event-image" />
          <div className="content" style={{ color: "#fff" }}>
            <div className="tabs mx-auto text-sm lg:text-md lg:p-auto">
              <button
                onClick={() => handleTabClick("description")}
                className={activeTab === "description" ? "active" : ""}
              >
                Description &lt;~&gt;
              </button>
              {selectedEvent.intern?.length > 0 && (
                <button
                  onClick={() => handleTabClick("internship")}
                  className={activeTab === "internship" ? "active" : ""}
                >
                  Internship &lt;~&gt;
                </button>
              )}
              {selectedEvent.rounds?.length > 0 && (
                <button
                  onClick={() => handleTabClick("rounds")}
                  className={activeTab === "rounds" ? "active" : ""}
                >
                  Rounds &lt;~&gt;
                </button>
              )}
            </div>

            {/* Description Tab */}
            {activeTab === "description" && (
              <div className="par !mx-8 text-justify">
                <p>{selectedEvent.description}</p>
                <p>
                  <strong>Team members:</strong> {selectedEvent.team || "N/A"}
                </p>
                <p>
                  <strong>Date:</strong> {selectedEvent.Date}
                </p>
                {selectedEvent.time ? (
                  <p>
                    <strong>Time:</strong> {selectedEvent.time}
                  </p>
                ) : (
                  ""
                )}
                  {selectedEvent.venue ? (
                  <p>
                    <strong>Venue:</strong> {selectedEvent.venue}
                  </p>
                ) : (
                  ""
                )}
                {/* <p>
                  <strong>Prize:</strong> {selectedEvent.prize || "N/A"}
                </p> */}
              </div>
            )}

            {/* Internship Tab */}
            {activeTab === "internship" && selectedEvent.intern?.length > 0 && (
              <div className="internship-content !mx-4">
                <p>
                  <strong>{selectedEvent.intern.no_of_team}</strong>
                </p>
                {selectedEvent.intern.map((intern, index) => (
                  <div key={index} className="intern-container">
                    <img
                      src={intern.image}
                      alt={intern.name}
                      className="intern-image"
                    />
                    <p className="intern-name">{intern.name}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Rounds Tab */}
            {activeTab === "rounds" && selectedEvent.rounds?.length > 0 && (
              <div className="rounds-content para">
                {selectedEvent.rounds.map((round, index) => (
                  <div className="round-card" key={index}>
                    <h3>{round.title}</h3>
                    <p>
                      <strong>Details:</strong> {round.content}
                    </p>
                    <p>
                      <strong>Duration:</strong> {round.duration}
                    </p>

                    <p>
                      <strong>Time:</strong> {round.time}
                    </p>
                    {/* <p>
                      <strong>Venue:</strong> {round.venue}
                    </p> */}
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-center">
              {isAuth && !isRegistered && (
                <button
                  className="m-3 w-fit border border-[#c72727] px-4 py-2 text-white duration-150 hover:bg-[#fb525233] "
                  onClick={() => {
                    selectedEvent?.Qr
                      ? navigate(`/events/${selectedEvent.to}/payment`)
                      : handleRegister();
                  }}
                >
                  Register{"<"}~{">"}
                </button>
              )}
            </div>
            <div className="flex justify-center">
              {!isAuth && (
                <button
                  className="m-3 w-fit border border-[#c72727] px-4 py-2 text-white duration-150 hover:bg-[#ff4d4d]"
                  onClick={() => navigate("/login")}
                >
                  Login to Register{"<"}~{">"}
                </button>
              )}
            </div>

            {isRegistered && !bestPayment && (
              <p className="p-2 w-full sm:w-fit flex justify-center items-center text-white text-lg font-semibold text-gray border rounded-lg border-[#c72727] bg-slate-800 mx-auto">
                <span className="text-lime-400">/*</span>
                &nbsp;Already registered for this event!&nbsp;
                <span className="text-lime-400">*/</span>
              </p>
            )}
            {isAuth && isRegistered && bestPayment?.status === "PENDING" && (
              <div className="flex justify-center items-center w-full flex-col">
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

            {isAuth && isRegistered && bestPayment?.status === "SUCCESS" && (
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

            {isAuth && isRegistered && bestPayment?.status === "FAILURE" && (
              <>
                <Link to={`/events/${selectedEvent.to}/payment`}>
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

      {selectedEvent.contact?.length > 0 && (
        <Contact contacts={selectedEvent.contact} category={"events"}/>
      )}
    </div>
  );
};

export default NoviceInit;
