import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import "../styles/Sponsorinner.css";
import { LoaderData } from "../context/loaderContext";
import Loader from "./Loader/Loader";
import { Link } from "react-router-dom";
import img1 from "../assets/Sponsors/spon11.jpg";
import img2 from "../assets/images/aladi.jpeg";
import img3 from "../assets/Sponsors/tmb.png";
import img4 from "../assets/images/123.avif";
import img5 from "../assets/Sponsors/e2w.png";
import img6 from "../assets/images/jamboree.png";
import img7 from "../assets/Sponsors/int_buddy.png";
const sponsors = [
  {
    name: "MOTORQ - Title Sponsor",
    logo: img1,
    description:
      "Headquartered in the San Francisco Bay Area, Motorq is an analytics software platform company that was created for the sole purpose of realizing the potential of connected-car data. The possibilities are virtually endless. They’re committed to leveraging this data to help businesses unlock the power of raw data by deciphering and creating actionable insights from a variety of disparate connected-car systems. Their cloud-based system allows them to deliver better, faster and more cost-effective insights so the clients can focus on what they do best.",
    website: "https://motorq.com/",
  },
  {
    name: "TMB - Reach'25 Sponsor",
    logo: img3,
    description:
      "Tamilnad Mercantile Bank Limited (TMB) is an Indian bank headquartered at Thoothukudi, Tamil Nadu. The bank currently has 509 full branches throughout India, 12 regional offices and two link offices, two central processing centres, one service branch, four currency chests, 48 eLobby centres, 262 cash recycler machines (cash deposit machines) and 1151 automated teller machines (ATM).",
    website: "https://tmb.in/",
  },
  {
    name: "Interview buddy - Coupon Partner",
    logo: img7,
    description:
      "Interview Buddy is an online platform that helps students and job seekers prepare for interviews through live mock interview sessions with industry experts. Their platform provides real-time feedback, personalized guidance, and valuable insights to boost confidence and improve interview performance. With Interview Buddy, candidates can practice interviews in a simulated environment and gain the skills needed to succeed in their job search.",
    website: "https://interviewbuddy.net/",
  },
  {
    name: "Jamboree - Educational Partner",
    logo: img6,
    description:
      "Jamboree is a leading institute for test preparation and admissions counseling for studies abroad. With a presence in multiple cities, Jamboree specializes in coaching for exams like GRE, GMAT, SAT, IELTS, and TOEFL, along with expert guidance on university selection, application, and visa processes.",
    website: "https://www.jamboreeindia.com/",
  },
  {
    name: "Aaladipattiyan - Refreshment Partner",
    logo: img2,
    description:
      "Aaladipattiyan is a popular South Indian snack brand known for its wide range of traditional and tasty refreshments. From crispy murukkus to spicy mixtures, Aaladipattiyan brings the authentic flavor of home-style snacks made with high-quality ingredients.",
    website: "https://halwakadai.com/",
  },
  {
    name: "Adsprint - Printing Partner",
    logo: img4,
    description:
      "Adsprint is a professional printing service provider offering high-quality printing solutions for banners, brochures, flyers, business cards, and more. Known for their prompt service and attention to detail, Adsprint helps businesses and events create impactful printed materials.",
    website: "https:/www.google.com/",
  },
];

const IndividualSponsors = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { event } = location.state || {};

  const { isLoading } = LoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-black total">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div style={{ backgroundColor: "#000" }}>
        <div className="head mt-0">
          <h1 style={{ textAlign: "center", color: "#fff", marginTop: "50px" }}>
            Sponsors
          </h1>
        </div>
        <div className="out">
          {sponsors.map((sponsor, index) => (
            <div key={index} className={`content-container `}>
              <img src={sponsor.logo} alt={sponsor.name} />
              <div className="text-container">
                <h1 className="title">{sponsor.name}</h1>
                <p>{sponsor.description}</p>
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read"
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndividualSponsors;
