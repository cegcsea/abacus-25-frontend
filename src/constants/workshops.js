import ML from "../assets/Reach/ML.png";
import placement from "../assets/Reach/placement.svg";
import UI from "../assets/images/mobile-app-ux-ui-basics.jpg";
import GENAI_300 from "../assets/Reach/300.jpg";
import UI_150 from "../assets/Reach/150.jpg";
import GENAI_1200 from "../assets/Reach/1200.jpg";
import PAY from "../assets/Reach/new.jpg";

export const WorkshopContacts = [
  {
    id: 1,
    name: "Pooja",
    phone: "+91 7558121642",
  },
  { id: 2, name: "Ragul", phone: "+91 9361469631" },
];

export const workshopsReach = [
  {
    title: "Emergence of AI Engineers and Evolution of Vibe coding",
    to: "AI",
    image: UI,

    qr: UI_150,
    venue: [
      {
        name: "PSNA College of Engineering and Technology",
        time: "09:00 AM to 12:00 PM",
        location: "Venue: Hall of 1960, Department of Chemistry, CEG",
      },
    ],
    code: 1,
    content:
      "The Emergence of AI Engineers and Evolution of Vibe Coding is a full-day workshop designed to explore the rapidly evolving role of AI engineers and the transformative shift in coding paradigms. Participants will gain hands-on experience in AI-driven development, understand how machine learning is reshaping software engineering, and explore the concept of Vibe Coding—a new approach that emphasizes intuitive, real-time, and adaptive coding techniques. Through interactive sessions, expert talks, and live demonstrations, this workshop will equip attendees with the skills to seamlessly integrate AI into their workflows and stay ahead in the dynamic tech landscape.",
    prerequisites:
      "Participants are required to bring laptops.No prior knowledge is needed.",
    // speakers: "John Doe, Jane Smith",
    moreInfo: {
      certificate: "Physical Certificate",
      conducted_by:"Vinith Aswath A S , Software Engineer, Walmart",
      takeaways: "Takeaways",
      time: "9:00 AM to 04:00 PM",
      date: "20th March, 2025",
      venue: "Hall of 1960, Department of Chemistry, CEG",
      entryFee: "Rs. 400/-",
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
