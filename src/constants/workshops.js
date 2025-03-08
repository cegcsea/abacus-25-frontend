import placement from "../assets/Reach/placement.svg";
import UI from "../assets/images/ai.webp";
import UI2 from "../assets/images/api&kub.webp";
import UI3 from "../assets/images/linux.webp";
import UI_400 from "../assets/images/workshop_qr.jpeg";
import UI_150 from "../assets/images/150.jpeg";
import UI_1600 from "../assets/images/UI_1600.jpg";

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
    bulkBooking: UI_1600,
    qr: UI_400,
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
      conducted_by: "Vinith Aswath A S , Software Engineer, Walmart",
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
  {
    title: "API & Kubernetes: The Dynamic Duo of Modern Tech",
    to: "api",
    image: UI2,
    bulkBooking: UI_1600,
    qr: UI_400,
    code: 2,
    note: "To register for a single topic, use the provided form link. To register for both topics together, complete the registration directly on the website.",
    content:
      "APIs and Kubernetes are at the heart of modern software development, powering seamless integrations and scalable cloud-native applications. This workshop brings together industry experts to explore the role of APIs and Kubernetes in building robust, efficient, and scalable systems.",
    contentexpand: [
      {
        heading: "Topic-1",
        topic: "APIs & You: The tech behind every click",
        speaker: "Deepa Sankaranarayanan,Software Development Manager, IBM",
        title:
          "Understand how APIs drive the digital world, enabling smooth communication between applications,",
      },
      {
        heading: "Topic-2",
        topic: "API Avengers: Assembling Kubernetes Gateway APIs",
        speaker: "Dhivakar Asokan,Software Development Manager, IBM",
        title:
          "Dive into the power of Kubernetes Gateway APIs and how they revolutionize API management and service orchestration in cloud environments.",
      },
    ],
    prerequisites:
      "Participants are required to bring laptops.No prior knowledge is needed.",
    // speakers: "John Doe, Jane Smith",
    moreInfo: {
      certificate: "Physical Certificate",
      takeaways: "Takeaways",
      time: "9:00 AM to 04:00 PM",
      date: "21st March, 2025",
      venue: "Hall of 1960, Department of Chemi`stry, CEG",
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
  {
    title: "Dive into Linux Networking Mastery!",
    to: "linux",
    image: UI3,
    qr: UI_150,
    code: 3,
    content:
      "Linux networking is the backbone of modern infrastructure, enabling secure communication, efficient data transfer, and seamless connectivity across systems. This workshop delves into essential networking concepts, covering protocols like DNS, HTTP, and TCP/IP, while equipping participants with hands-on experience in configuring network interfaces, troubleshooting connectivity issues, and optimizing performance using industry-standard tools.",
    prerequisites:
      "Ensure you have a working Linux host or VM (Ubuntu recommended).",
    // speakers: "John Doe, Jane Smith",
    moreInfo: {
      certificate: "E-Certificate",
      takeaways: "Takeaways",
      time: "9:30 AM to 12:30 PM",
      date: "15th March, 2025",
      mode: "online",
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

// export const sessions = [
//   {
//     code: 3,
//     title: "Placement Session",
//     image: placement,
//     content:
//       "Participate in focused sessions on interview techniques, enhancing your confidence and readiness for placement scenarios. Stay informed about current hiring trends and industry expectations, positioning yourself effectively during placement processes. Engage in simulated interview experiences, receiving valuable feedback to optimize your performance in real-world placements.",
//   },
// ];
