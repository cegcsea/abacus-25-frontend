import ML from "../assets/Reach/ML.png";
import placement from "../assets/Reach/placement.svg";
import UI from "../assets/images/mobile-app-ux-ui-basics.jpg";
import GENAI_300 from "../assets/Reach/300.jpg";
import UI_150 from "../assets/Reach/150.jpg";
import GENAI_1200 from "../assets/Reach/1200.jpg";
import PAY from "../assets/Reach/new.jpg"

export const workshopsReach = [
  {
    title: "Design for Impact: Power of UX",
    to: "UI-UX",
    image: UI,

    qr: UI_150,
    venue: [
      {
        name: "PSNA College of Engineering and Technology",
        time: "09:00 AM to 12:00 PM",
        location: "CSE Department, First Floor Lab",
      },
    ],
    code: 1,
    content:
      "This half-day workshop delves into the world of User Experience (UX) design, exploring its core principles and how psychology influences user behavior. Participants will learn to differentiate between UI and UX, understand the importance of accessibility and inclusive design, and analyze how successful apps leverage UX psychology. A hands-on activity will allow participants to apply these concepts by redesigning a user flow for a mobile app, fostering a practical understanding of creating impactful and user-centered designs.",
    prerequisites:
      "Participants are required to bring laptops.No prior knowledge is needed.",
    // speakers: "John Doe, Jane Smith",
    moreInfo: {
      certificate: "E-Certificate",
      takeaways: "Takeaways",
      time: "9:00 AM to 12:00 PM",
      date: "21st February, 2025",
      // venue: "X hall, EEE Department",
      entryFee: "Rs. 150/-",
    },
    contact: [
      {
        id: 1,
        name: "Sandhya",
        phone: "+91 9363319596",
      },
      { id: 2, name: "Padmasharan", phone: "+91 9585612262" },
    ],
  },
  {
    title: "Workshop on Generative AI",
    to: "genAI",
    image: ML,
    bulkBooking: PAY,
    qr: GENAI_300,
    venue: [
      {
        name: "PSNA College of Engineering and Technology",
        time: "09:30 AM to 04:00 PM",
        location: "CSE Department, Second Floor Lab",
      },
    ],
    code: 2,
    content:
      "Ignite your curiosity in Generative AI!. This one-day workshop provides a comprehensive introduction to Generative AI, focusing on its fundamentals, applications, and practical implementation. Designed for beginners, the session will help participants understand the transformative potential of Generative AI in various domains through engaging lectures and hands-on activities.",
    prerequistes:
      "No prior machine learning experience is required. Just bring your curiosity, and let's make the most of this short but impactful ML adventure!",
    // speakers: "John Doe, Jane Smith",
    moreInfo: {
      certificate: "E-Certificate",
      takeaways: "Takeaways",
      time: "9:30 AM to 04:00 PM",
      date: "21st February, 2025",
      // venue: "X hall, EEE Department",
      entryFee: "Rs. 300/-",
    },
    contact: [
      {
        id: 1,
        name: "Ajai Krishna",
        phone: "+91 7010707652",
      },
      { id: 2, name: "Nikhil Prasanna", phone: "+91 6379066510" },
    ],
  },
];

// export   const abacusWorkshops = [
//     {
//       id: 1,
//       title: "Rapid Development with AI",
//       image: "https://via.placeholder.com/150",
//       description: "Conducted by experts in the field.",
//       to: "ai-development",
//     },
//     {
//       id: 2,
//       title: "Gen AI Unleashed",
//       image: "https://via.placeholder.com/150",
//       description: "Explore the potential of Generative AI.",
//       to: "gen-ai",
//     },
//     {
//       id: 3,
//       title: "Building a Cloud Home",
//       image: "https://via.placeholder.com/150",
//       description: "Learn to create your own cloud environment.",
//       to: "cloud-home",
//     },
//   ];

export const sessions = [
  {
    code: 3,
    title: "Placement Session",
    image: placement,
    content:
      "Participate in focused sessions on interview techniques, enhancing your confidence and readiness for placement scenarios. Stay informed about current hiring trends and industry expectations, positioning yourself effectively during placement processes. Engage in simulated interview experiences, receiving valuable feedback to optimize your performance in real-world placements.",
  },
];
