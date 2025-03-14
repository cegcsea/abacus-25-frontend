import img1 from "../assets/images/techevent.jpg";
import img2 from "../assets/images/nontech.jpg"; // Example images
import img3 from "../assets/images/preevnt.jpg";
import img4 from "../assets/images/pentacode.png";
import img5 from "../assets/images/ML Mania.png";
import img6 from "../assets/images/ospc.png";
import img7 from "../assets/images/th.webp";
import img21 from "../assets/images/codexcel.png"
import img22 from "../assets/images/pixel.png"
import img8 from "../assets/images/amazon.png";
import img9 from "../assets/images/ctrlesc.jpg";
import img10 from "../assets/images/img10.jpg";
import img11 from "../assets/images/img11.jpg";
import img12 from "../assets/images/img12.jpg";
import img13 from "../assets/images/img13.jpg";
import img14 from "../assets/images/img14.jpg";
import img15 from "../assets/images/img15.jpg";
import img16 from "../assets/images/img16.jpg";
import img17 from "../assets/images/img17.jpg";
import img18 from "../assets/images/img18.jpg";
import img20 from "../assets/images/img20.jpg";
import chess_30 from "../assets/images/chess_qr.jpeg";
export const EventContacts = [
  {
    id: 1,
    name: "Ajai Krishna T S",
    phone: "+91 7010707652",
  },
  { id: 2, name: "Dinesh Sundarrajan", phone: "+91 9360380769" },
  { id: 3, name: "Harini S", phone: "+91 9363349994" },
  {
    id: 4,
    name: "Infancy P",
    phone: "+91 9047366527",
  },
];

// List of events
export const events = [
  {
    title: "Technical Events",
    image: img1, // Event image
    event: [
      {
        id: 1,
        title: "OSPC",
        description:
          "Get ready for a high-intensity programming contest where sharp minds compete to crack the toughest coding challenges! Tackle complex problems involving data structures and algorithms, and showcase your speed, skill, and innovation in this high-stakes battle of logic and code!",
        image: img4, // Replace with your image path
        path: "/events/ospc",

        team: "2-3 members",
        Date: "22nd and 23rd March 2025",
        prize: "Rs 7k",
        to: "ospc",
        rounds: [
          {
            title: "Round 1 – The Ultimate Tech Quiz",
            content:
              "The first round is a high-speed multiple-choice quiz designed to test participants on core computer science concepts. Get ready to tackle questions covering Data Structures & Algorithms, Problem Solving, Database Management Systems, and Programming fundamentals. Accuracy and speed are key—only the sharpest minds will make it to the next stage!",

            duration: "40 minutes",
            time: "09:00 AM to 12:30 PM",
            // venue: "Main Building Room No 238",
          },
          {
            title: "Round 2 – The Coding Showdown",
            content:
              "The finalists will face off in an intense coding battle on HackerRank, where they must solve 5-6 challenging DSA problems within the given time. This round will test not only problem-solving skills but also efficiency, logic, and coding prowess. Do you have what it takes to emerge as the ultimate programming champion?",
            duration: "2 hours",
            time: "1:00 pm – 4:00 pm",
            // venue: "Main Building Room No 238",
          },
        ],
        contact: [
          {
            id: 1,
            name: "Sreenithika S",
            phone: "99650 65777",
          },
          {
            id: 2,
            name: "Infancy P",
            phone: "90473 66527",
          },
        ],
        intern: [],
      },
      {
        id: 2,
        title: "BYTE BEGIN",
        description:
          "Designed especially for first-year students, this event is the ultimate kickstart to their coding journey! Dive into the fundamentals of logical reasoning, arithmetic, and programming through interactive challenges that are both fun and beginner-friendly. Get ready to think, solve, and code your way to success!",
        image: img6,
        path: "/events/byte-begin",
        team: "1-2 members",
        Date: "22nd March 2025",
        prize: "Rs 7k",
        to: "byte-begin",
        rounds: [
          {
            title: "Round 1 – The Brainstorm Challenge",
            content:
              "Kick off your coding journey with an exciting multiple-choice quiz that tests your general aptitude, logical reasoning, and programming fundamentals in C, Python, and Java. From problem-solving puzzles to logo guessing challenges, this round will assess your analytical thinking and coding basics in a fun and engaging way. Only the top problem solvers will advance to the next stage!",
            duration: "30 minutes",
            time: "09:00 AM to 12:30 PM",
            // venue: "Main Building Room No 238",
          },
          {
            title: "Round 2 – The Code Sprint",
            content:
              "In the final round, participants will compete in a beginner-friendly competitive programming contest on HackerRank. Solve a series of easy-level CP problems that test your logic, efficiency, and coding skills. This is your chance to put your programming knowledge into action and prove your potential as a future coding pro!",
            duration: "2 hours",
            time: "01:30 PM to 03:00 PM",
            // venue: "Main Building Room No 238",
          },
        ],
        contact: [
          {
            id: 1,
            name: "Renjitha K",
            phone: "79078 54731",
          },
          {
            id: 2,
            name: "Ajai Krishna T.S",
            phone: "70107 07652",
          },
        ],
        intern: [],
      },
      {
        id: 3,
        title: "BRAINWAVE.ML",
        description:
          "Dive into the world of machine learning in this thrilling event! Test your knowledge, solve challenges, and showcase your skills by developing innovative solutions to given problems. Compete with the best and prove your expertise in ML!",
        image: img5, // Replace with your image path
        path: "/events/brainwave.ml",
        team: "1-2 members",
        Date: "22nd March 2025",
        prize: "Rs 5k",
        to: "brainwave.ml",
        rounds: [
          {
            title: "Round 1 - The ML Quiz Challenge",
            content:
              "Gear up for a stimulating multiple-choice quiz that will test your understanding of core Machine Learning concepts! This round will challenge participants with questions on ML algorithms, data preprocessing, model evaluation, and key theoretical concepts. Only those with a solid grasp of ML fundamentals will advance to the next stage!",
            duration: "30 minutes",
            time: "09:00 AM to 12:30 PM",
            // venue: "Main Building Room No 238",
          },
          {
            title: "Round 2 - The Model Building Challenge",
            content:
              "In this hands-on round, participants will be given a dataset and tasked with building a machine learning model to derive meaningful insights or make accurate predictions. Creativity, technical skills, and problem-solving abilities will be put to the test as participants develop, train, and fine-tune their models. Can you craft the most efficient and innovative solution to win the challenge?",
            duration: "1 hour 30 minutes",
            time: "01:00 PM to 04:00 PM",
            // venue: "Main Building Room No 238",
          },
        ],
        contact: [
          {
            id: 1,
            name: "Sahana S",
            phone: "74182 47031",
          },
          {
            id: 2,
            name: "Harini S",
            phone: "93633 49994",
          },
        ],
      },

      {
        id: 4,
        title: "CTRL+ESCAPE",
        description:
          "Ctrl+Escape is a dynamic fusion of a tech quiz and coding challenges, designed to test both your knowledge and programming skills! Solve intriguing quiz questions to unlock coding tasks, where logic and speed are key. Get ready for an electrifying battle of wit and code!",
        image: img9, // Replace with your image path
        path: "/events/ctrl+escape",
        team: "2-3 members",
        Date: "23rd March 2025",
        prize: "Rs 7k",
        to: "ctrl+escape",
        rounds: [
          {
            title: "Round 1 - The Tech Trivia Challenge",
            content:
              "Kickstart the competition with a thrilling multiple-choice quiz that will put your technical knowledge to the test! This round covers a mix of algorithms, cryptography, programming languages (C, C++, Python), and Linux system fundamentals. Speed and accuracy are crucial—only the sharpest minds will advance to the next level!",
            duration: "40 minutes",
            time: "09:00 AM to 12:00 PM",
            // venue: "Main Building Room No 238",
          },
          {
            title: "Round 2 - The Code Conqueror",
            content:
              "In the final round, participants will battle it out in a high-stakes coding contest on HackerRank. Solve 5-6 challenging DSA problems that will test your problem-solving skills, logic, and efficiency. It’s a race against time—do you have what it takes to crack the code and emerge victorious?",
            duration: "2 hours",
            time: "01:00 PM to 04:00 PM",
            // venue: "Main Building Room No 238",
          },
        ],
        contact: [
          {
            id: 1,
            name: "Hariharan A",
            phone: "77084 62392",
          },
          {
            id: 2,
            name: "Renjitha K",
            phone: "79078 54731",
          },
        ],
      },
      // {
      //   id: 5,
      //   title: "PAPER PRESENTATION",
      //   description:
      //     "Paper Presentation is an intellectual platform where participants showcase their innovative ideas and research on cutting-edge topics. This event challenges individuals to present their findings with clarity, creativity, and confidence, demonstrating both technical depth and communication excellence.",
      //   image: img6, // Replace with your image path
      //   path: "/events/paper-presentation",
      //   team: "Two or three members",
      //   Date: "21st February 2025",
      //   prize: "Rs 1.5k+",
      //   to: "paper-presentation",
      //   rounds: [
      //     {
      //       title: "Round 1",
      //       content: "MCQ on Data Structures, Algorithms, and OOPs concepts",
      //       duration: "30 minutes",
      //       time: "09:00 AM to 12:30 PM",
      //     },
      //     {
      //       title: "Round 2",
      //       content:
      //         "Solve challenging programming questions based on DSA and algorithms",
      //       time: "01:30 PM to 03:00 PM",
      //     },
      //   ],
      //   contact: [
      //     {
      //       id: 1,
      //       name: "Gautham",
      //       phone: "+1 234 567 890",
      //     },
      //     {
      //       id: 2,
      //       name: "Ganesh",
      //       phone: "+1 234 567 890",
      //     },
      //   ],
      // },
      {
        id: 5,
        title: "READY.SET.HIRE!",
        description:
          "Ready. Set. Hire! is your ultimate gateway to the real-world hiring experience! Dive into a competitive coding round, followed by a mock interview that mirrors actual recruitment challenges. Test your technical skills, sharpen your problem-solving abilities, and gain invaluable hands-on experience to ace future job interviews!",
        image: img10, // Replace with your image path
        path: "/events/ready-set-hire",
        team: "Individual",
        Date: "23rd March 2025",
        prize: "Rs 7k",
        to: "ready-set-hire",
        rounds: [
          {
            title: "Round 1 - The Recruitment Test",
            content:
              "Step into the shoes of a job applicant and take on a rigorous screening test designed to evaluate your aptitude, programming knowledge, and problem-solving skills. This round will challenge you with a mix of logical reasoning, quantitative aptitude, and coding questions—just like the first step of a real-world hiring process. Only the most promising candidates will move forward to the interview round!",
            duration: "50 mins (Online)",
            time: "09:00 AM to 12:30 PM",
            // venue: "Main Building Room No 238",
          },
          {
            title: "Round 2 - The Mock Interview",
            content:
              "Face the ultimate test in a realistic mock interview setting! Participants will be evaluated on their technical expertise, problem-solving approach, and communication skills. Expect coding challenges, scenario-based questions, and real-world problem-solving discussions, all designed to simulate an actual job interview experience. Are you ready to impress and prove you're hire-ready?",
            duration: "35 mins",
            time: "01:30 PM to 03:00 PM",
            // venue: "Main Building Room No 238",
          },
        ],
        contact: [
          {
            id: 1,
            name: "Harini S",
            phone: "93633 49994",
          },
          {
            id: 2,
            name: "Infancy P",
            phone: "90473 66527",
          },
        ],
      },
      {
        id: 6,
        title: "GLITCH SNITCH",
        description:
          "Glitch Snitch is an exciting challenge that puts your debugging skills to the test! Hunt down and fix bugs in pre-written code, tackling real-world coding issues under time pressure. Sharpen your problem-solving abilities and level up your coding expertise in this fast-paced, brain-teasing event!",
        image: img11, // Replace with your image path
        path: "/events/glitch-snitch",
        team: "1-2 members",
        Date: "23rd March 2025",
        prize: "Rs 5k",
        to: "glitch-snitch",
        rounds: [
          {
            title: "Round 1 - The Debugging IQ Test",
            content:
              "Get ready to put your analytical skills to the test! This multiple-choice quiz will challenge participants with questions on debugging, code analysis, and programming logic. Identify errors, predict outputs, and spot the flaws in given code snippets. Only those with a keen eye for detail and a solid understanding of debugging will advance to the next round!",
            duration: "40 minutes",
            time: "09:00 AM to 12:30 PM",
            // venue: "Main Building Room No 238",
          },
          {
            title: "Round 2 - The Bug Hunt",
            content:
              "Now, it's time to get hands-on! Participants will be given programs riddled with bugs—logical errors, syntax issues, and unexpected behaviors. Your task? Identify and fix these errors to make the program run correctly and produce the expected results. Speed, precision, and problem-solving prowess will determine who emerges as the ultimate 'Glitch Snitch'!",
            duration: "1 hour 30 minutes",
            time: "01:00 PM to 04:00 PM",
            // venue: "Main Building Room No 238",
          },
        ],
        contact: [
          {
            id: 1,
            name: "Hariharan A",
            phone: "77084 62392",
          },
          {
            id: 2,
            name: "Dinesh S",
            phone: "93603 80769",
          },
        ],
      },
      {
        id: 7,
        title: "CodeXcelerate: CODE VELOCITY F1",
        description: "CodExcelerate is a high-octane coding duel where speed meets strategy! In Round 1, individual participants race against the clock to solve 30 coding problems of escalating difficulty—faster submissions earn higher points, so time is of the essence. Round 2 flips the game into an exciting board-style team challenge. Teams roll dice to unlock hidden coding tasks on a dynamic map, navigating penalties for wrong answers and grabbing bonus points for swift completions. Only the most strategic and swift coders will race their way to victory in this logic-fueled adventure!",
        image: img21, // Replace with your image path
        path: "/events/codexcelerate",
        team: "1-2 members",
        Date: "23rd March 2025",
        prize: "",
        to: "codexcelerate",
        rounds: [
          {
            title: "Round 1 -  Code Sprint Showdown",
            content:
              "Dive into a fast-paced solo challenge where participants must solve 30 coding problems of varying difficulty. The twist? Faster solutions earn higher points! Bring your A-game, because every second saved is a point gained. Precision and pace go hand-in-hand in this high-pressure race against the clock!",
            duration: "30 minutes",
            time: "09:00 AM to 12:30 PM",
            // venue: "Main Building Room No 238",
          },
          {
            title: "Round 2 - CodeQuest Board Battle",
            content:
              "The battlefield transforms into a coding board game! Teams take turns rolling a die to unlock mystery coding challenges placed across a strategic game map.Earn points by solving them—but beware! Wrong answers may cost you a move or more. Plan wisely, code swiftly, and claim victory with bonus points for reaching the finish first!",
            duration: "1 hour 30 minutes",
            time: "01:00 PM to 04:00 PM",
            // venue: "Main Building Room No 238",
          },
        ],
        contact: [
          {
            id: 1,
            name: "Nivedha B",
            phone: "76049 63610",
          },
          {
            id: 2,
            name: "Ajay Krishna",
            phone: "70107 07652",
          },
        ],
      },
      {
        id: 8,
        title: "Prose to Pixel",
        description: "Prose to Pixel is an electrifying event where innovation meets intellect. This event blends coding logic with creative design. Round 1 throws participants into a dynamic relay where roles alternate between solving tech puzzles and crafting imaginative content—while facing surprise sabotages. Round 2 shifts into a high-stakes design arena where teams build interactive Figma prototypes, tackling hurdles that test both their strategy and creativity. It’s the ultimate fusion of tech, teamwork, and design thinking!",
        image: img22, // Replace with your image path
        path: "/events/prose-to-pixel",
        team: "2-3 members",
        Date: "23rd March 2025",
        prize: "",
        to: "prose-to-pixel",
        rounds: [
          {
            title: "Round 1 - Brainstorm Relay",
            content:
              "One member dives into coding and puzzle-solving, while others handle creative writing or design—based on a given theme. Random sabotages add a fun twist! Roles rotate periodically so everyone gets to showcase both technical and creative skills.",
            duration: "1 hour",
            time: "10:00 AM to 11:00 AM",
            // venue: "Main Building Room No 238",
          },
          {
            title: "Round 2 - Design Challenge",
            content:
              "Using Figma, teams convert their concepts into interactive prototypes. Starting with a base score, teams encounter surprise hurdles—accepting them can earn bonuses, but skipping causes penalties. Balance creativity, strategy, and problem-solving to win!",
            duration: "1 hour 30 minutes",
            time: "11:30 AM to 01:00 PM",
            // venue: "Main Building Room No 238",
          },
        ],
        contact: [
          {
            id: 1,
            name: "Dinesh S",
            phone: "9360380769",
          },
          {
            id: 2,
            name: "Akshaya",
            phone: "9342583181",
          },
        ],
      },
    ],
    path: "/events/technical-events", // Path to the event page
  },
  {
    title: "Non Technical Events",
    image: img2, // Event image,
    Date: "22nd March 2025",

    event: [
      {
        id: 9,
        title: "TREASURE HUNT",
        time: "01:30 PM to 04:00 PM",
        Date: "23rd March 2025",
        team: "2-3 members",
        description:
          "Embark on an exhilarating campus-wide Treasure Hunt! Solve clever clues, uncover hidden locations, and race against time to crack the final mystery. Teams will navigate through a series of challenges, with the fastest ones claiming victory. Get ready for a thrilling adventure of wits, strategy, and speed!",
        image: img7, // Replace with your image path
        path: "/events/treasure-hunt",
        rules: `• Participants answer survey-based questions on topics like Books, Food, Movies, Lifestyle, and Technology. Responses are ranked (1 = most popular, 7 = least popular).
              • Teams compete to guess the most popular answers.
              • Buzzers decide who answers first.
              • Correct guesses earn points based on the popularity ranking.
              • Three consecutive wrong guesses result in negative points, and the chance passes to the other team.
              • Each round includes 10 questions.
              • Top 3 teams with the highest total scores win.`,
        to: "treasure-hunt",
        prize: "Rs 2.5k",
        rounds: [
          {
            title: "Round 1 - The Ultimate Chase",
            content:
              "Gear up for an exciting adventure where every clue brings you closer to the final treasure! Teams will decode hints leading to hidden locations across the campus. At each spot, a new clue awaits, challenging your wit, teamwork, and speed. The hunt continues until the final mystery is cracked. The team that completes the journey in the shortest time will emerge as the ultimate treasure hunters! Do you have what it takes to outsmart and outrun the competition?",
            duration: "40 minutes",
            time: "10:00 AM to 4:00 PM",
            // venue: "Main Building Room No 238",
          },
        ],
        contact: [
          {
            id: 1,
            name: "Sahana S",
            phone: "74182 47031",
          },
          {
            id: 2,
            name: "Harini S",
            phone: "93633 49994",
          },
        ],
      },
      {
        id: 10,
        title: "IPL AUCTION",
        time: "01:30 PM to 04:00 PM",
        Date: "22nd March 2025",
        team: "1-3 members",
        description:
          "IPL Auction gives you the ultimate chance to build your dream team! Strategize, bid smartly, and assemble a winning squad that can dominate the tournament. Choose wisely—every pick counts in this high-stakes game of skill and strategy!",
        image: img12, // Replace with your image path
        path: "/events/ipl-auction",
        rules: `• Participants answer survey-based questions on topics like Books, Food, Movies, Lifestyle, and Technology. Responses are ranked (1 = most popular, 7 = least popular).
              • Teams compete to guess the most popular answers.
              • Buzzers decide who answers first.
              • Correct guesses earn points based on the popularity ranking.
              • Three consecutive wrong guesses result in negative points, and the chance passes to the other team.
              • Each round includes 10 questions.
              • Top 3 teams with the highest total scores win.`,
        to: "ipl-auction",
        prize: "Rs 2.5k",
        rounds: [
          {
            title: "Round 1 - The Cricket Quiz Showdown",
            content:
              "Kick off the auction with a thrilling multiple-choice quiz that tests your knowledge of Cricket and the IPL! From legendary matches to player stats and team histories, this round will challenge your expertise in the game. Only the most knowledgeable participants will earn an advantage in the next round!",
            duration: "35 minutes",
            time: "09:00 AM to 12:00 PM",
            // venue: "Main Building Room No 238",
          },
          {
            title: "Round 2 - The Grand IPL Auction",
            content:
              "Time to put your strategic skills to the test! Participants will enter a high-stakes auction where they must bid smartly to build the ultimate IPL squad. With a limited budget, choosing the right players is crucial. Balance star power, team chemistry, and game strategy to assemble a winning team. Do you have what it takes to create a championship-worthy squad?",
            duration: "2 hours",
            time: "01:00 PM to 04:00 PM",
            // venue: "Main Building Room No 238",
          },
        ],
        contact: [
          {
            id: 1,
            name: "Sreenithika S",
            phone: "99650 65777",
          },
          {
            id: 2,
            name: "Infancy P",
            phone: "90473 66527",
          },
        ],
      },
      {
        id: 11,
        title: "CHATGPT PULSE",
        time: "01:30 PM to 04:00 PM",
        Date: "23rd March 2025",
        team: "1-2 members",
        description:
          "Put your prompt engineering skills to the test in this exciting AI challenge! With only a few chances, craft the perfect prompts to steer ChatGPT toward a specific target word. Unleash your creativity, refine your logic, and master the art of AI communication in this fun and brain-teasing competition.",
        image: img13, // Replace with your image path
        path: "/events/chatgpt-pulse",
        rules: `• Participants answer survey-based questions on topics like Books, Food, Movies, Lifestyle, and Technology. Responses are ranked (1 = most popular, 7 = least popular).
              • Teams compete to guess the most popular answers.
              • Buzzers decide who answers first.
              • Correct guesses earn points based on the popularity ranking.
              • Three consecutive wrong guesses result in negative points, and the chance passes to the other team.
              • Each round includes 10 questions.
              • Top 3 teams with the highest total scores win.`,
        to: "chatgpt-pulse",
        prize: "Rs 2k",
        rounds: [
          {
            title: "Round 1 - The Ultimate AI Challenge",
            content:
              "Participants choose a themed set and solve puzzles to find 5 hidden words. Using only 10 prompts, they must craft inputs to make ChatGPT generate these words without using clues as prompts. Lifeline: Sacrifice 1 prompt for a hint. Scoring: 10 pts per correct word, 5 pts per correct AI-generated word, 5 bonus pts per unused prompt. ",
            duration: "30 minutes",
            time: "09:00 AM to 12:00 PM",
            // venue: "Main Building Room No 238",
          },
        ],
        contact: [
          {
            id: 1,
            name: "Renjitha K",
            phone: "79078 54731",
          },
          {
            id: 2,
            name: "Ajai Krishna T.S",
            phone: "70107 07652",
          },
        ],
      },
      {
        id: 12,
        title: "Checkmate Chronicles",
        time: "01:30 PM to 04:00 PM",
        Date: "23rd March 2025",
        team: "Individual",
        Qr: chess_30,
        entry_fee: "Rs.30",
        description:
          "Checkmate Chronicles is the ultimate test of strategy, logic, and precision! Outsmart your opponents in intense chess battles where every move shapes your path to victory. Sharpen your tactics, anticipate your rival’s next move, and compete for the title of Chess Champion!",
        image: img14, // Replace with your image path
        path: "/events/checkmate-chronicles",
        rules: `• Participants answer survey-based questions on topics like Books, Food, Movies, Lifestyle, and Technology. Responses are ranked (1 = most popular, 7 = least popular).
              • Teams compete to guess the most popular answers.
              • Buzzers decide who answers first.
              • Correct guesses earn points based on the popularity ranking.
              • Three consecutive wrong guesses result in negative points, and the chance passes to the other team.
              • Each round includes 10 questions.
              • Top 3 teams with the highest total scores win.`,
        to: "checkmate-chronicles",
        prize: "Rs 3.5k",
        rounds: [
          {
            title: "Round 1 - The Ultimate Chess Knockout",
            content:
              "Players will compete in a knockout-style chess tournament, where only the sharpest minds advance. Each match is a battle of strategy, foresight, and precision—one wrong move can cost victory! The last player standing claims the title of Chess Champion. Do you have what it takes to checkmate your way to glory?",
            duration: "Subject to Player Count",
            time: "10:00 AM to 3:00 PM",
            // venue: "Main Building Room No 238",
          },
        ],
        contact: [
          {
            id: 1,
            name: "Hariharan A",
            phone: "77084 62392",
          },
          {
            id: 2,
            name: "Dinesh S",
            phone: "93603 80769",
          },
        ],
      },
      // {
      //   id: 13,
      //   title: "Collab with Quizzers Anonymous",
      //   // time: "01:30 PM to 04:00 PM",
      //   // Date: "23rd March 2025",
      //   // team: "Individual",
      //   // description:
      //   //   "Checkmate Chronicles is the ultimate test of strategy, logic, and precision! Outsmart your opponents in intense chess battles where every move shapes your path to victory. Sharpen your tactics, anticipate your rival’s next move, and compete for the title of Chess Champion!",
      //   image: img7, // Replace with your image path
      //   path: "/events/chatgpt-pulse",
      //   rules: `• Participants answer survey-based questions on topics like Books, Food, Movies, Lifestyle, and Technology. Responses are ranked (1 = most popular, 7 = least popular).
      //         • Teams compete to guess the most popular answers.
      //         • Buzzers decide who answers first.
      //         • Correct guesses earn points based on the popularity ranking.
      //         • Three consecutive wrong guesses result in negative points, and the chance passes to the other team.
      //         • Each round includes 10 questions.
      //         • Top 3 teams with the highest total scores win.`,
      //   to: "chatgpt-pulse",
      //   prize: "Rs 3.5k",
      //   // rounds: [
      //   //   {
      //   //     title: "Round 1 - The Ultimate Chess Knockout",
      //   //     content: "Players will compete in a knockout-style chess tournament, where only the sharpest minds advance. Each match is a battle of strategy, foresight, and precision—one wrong move can cost victory! The last player standing claims the title of Chess Champion. Do you have what it takes to checkmate your way to glory?",
      //   //     duration: "Subject to Player Count",
      //   //     time: "10:00 AM to 3:00 PM",
      //   //   },
      //   // ],
      //   contact: [
      //     {
      //       id: 1,
      //       name: "Infancy P",
      //       phone: "90473 66527",
      //     },
      //     {
      //       id: 2,
      //       name: "Harini S",
      //       phone: "93633 49994",
      //     },
      //   ],
      // },
    ],
    // Add more events
    path: "/events/non-technical-events", // Path to the event page
  },
  {
    title: "Pre Events",
    image: img3, // Event image
    event: [
      {
        id: 14,
        title: "OLPC",
        description:
          "OLPC is the ultimate arena for online programming contests, where sharp minds battle against the clock to solve intricate challenges packed with complex data structures and algorithms. Speed, precision, and problem-solving skills will determine who emerges victorious in this high-stakes digital showdown!",
        image: img20, // Replace with your image path
        Date: "20th March 2025",
        team: "Individual",
        prize: "Rs 4k",
        path: "/events/olpc",
        to: "olpc",
        venue: "online",
        time: "08.30pm to 10.30pm",
        contact: [
          {
            id: 1,
            name: "Harini S",
            phone: "93633 49994",
          },
          {
            id: 2,
            name: "Infancy P",
            phone: "90473 66527",
          },
        ],
      },

      {
        id: 15,
        title: "LIGHTS, CAMERA, REEL!",
        description:
          "Unleash your creativity and showcase your talent in this ultimate reels competition! Whether it’s dance, drama, comedy, or art—hit record, shine bright, and make your moment go viral! ",
        image: img15, // Replace with your image path
        Date: "22-23 March 2025",
        team: "Individual",
        prize: "Rs 1.5k",
        formLink: "https://forms.gle/GfJJbjS1LhxBuZYEA",
        path: "/events/lights-camera-reel",
        to: "lights-camera-reel",

        contact: [
          {
            id: 1,
            name: "Sreenithika S",
            phone: "99650 65777",
          },
          {
            id: 2,
            name: "Sahana S",
            phone: "74182 47031",
          },
        ],
      },
      {
        id: 16,
        title: "WAR OF THE RACKETS ",
        description:
          "War of the Rackets is an electrifying badminton showdown exclusively for girls! Battle it out in intense, fast-paced matches where agility, precision, and strategy take center stage. Smash your way to victory and claim your spot at the top in this ultimate test of skill and endurance!",
        image: img16, // Replace with your image path
        Date: "17th March 2025",
        time: "4:00pm - 7:00pm",
        venue: "Badminton  Ground",
        team: "Individual (Inter dept)",
        prize: "Rs 1.5k",
        path: "/events/war-of-the-rackets",
        to: "war-of-the-rackets",
        contact: [
          {
            id: 1,
            name: "Renjitha K",
            phone: "79078 54731",
          },
          {
            id: 2,
            name: "Sahana S",
            phone: "74182 47031",
          },
        ],
      },
      {
        id: 17,
        title: "Grand Cricket League (GCL)",
        description:
          "Grand Cricket League is the ultimate battle of skill, strategy, and endurance! Compete in high-energy matches where every run matters, every wicket counts, and teamwork paves the path to victory. Step onto the pitch, showcase your batting, bowling, and fielding prowess, and chase the glory of becoming the champions!",
        image: img17, // Replace with your image path
        Date: "16th March 2025",
        team: "11 members (Intra Dept)",
        venue: "Sports Ground,CEG",
        prize: "Rs 2k",
        formLink: "https://forms.gle/H5GXgcX9vWW4ero9A",
        path: "/events/gcl",
        to: "gcl",
        contact: [
          {
            id: 1,
            name: "Hariharan A",
            phone: "77084 62392",
          },
          {
            id: 2,
            name: "Dinesh S",
            phone: "93603 80769",
          },
        ],
      },
      {
        id: 18,
        title: "CSEA SUPER LEAGUE (CSL) - Kick, Pass, Goal!",
        description:
          "Lace up your boots and get ready for an electrifying intra-departmental football showdown! Form your dream team, showcase your dribbling, passing, and scoring skills, and battle your way to glory in this fast-paced tournament of teamwork, strategy, and passion for the game!",
        image: img18, // Replace with your image path
        Date: "15th March 2025",
        team: "5 members (Intra Dept)",
        prize: "Rs 2k",
        venue: "Sports Ground,CEG",
        path: "/events/csl",
        to: "csl",
        formLink: "https://forms.gle/SUjUj2p9PZVmrMo67",
        contact: [
          {
            id: 1,
            name: "Hariharan A",
            phone: "77084 62392",
          },
          {
            id: 2,
            name: "Hamza",
            phone: "7010543155",
          },
        ],
      },
    ],
    path: "/events/technical-events", // Path to the event page
  },
];
