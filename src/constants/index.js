import {
    resume,
    firebase,
    salesforce,
    sql,
    python,
    coding,
    c,
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
  } from "../assets/icons";
  
  import {
    aa, sss, ca, bb, tt, techila, aps, sri, rgipt, prtfolio, taskweb, blog, classtenth, classtwel, internlog, CO2_prediction, face_detection, algo_vis,
  } from '../assets/images';
  
  console.log(css);
  
  export const skills = [
    { imageUrl: coding, name: "C++", type: "Coding" },
    { imageUrl: c, name: "C", type: "Coding" },
    { imageUrl: python, name: "Python", type: "Backend/ML" },
    { imageUrl: css, name: "CSS", type: "Frontend" },
    { imageUrl: express, name: "Express", type: "Backend" },
    { imageUrl: git, name: "Git", type: "Version Control" },
    { imageUrl: github, name: "GitHub", type: "Version Control" },
    { imageUrl: html, name: "HTML", type: "Frontend" },
    { imageUrl: javascript, name: "JavaScript", type: "Frontend" },
    { imageUrl: mongodb, name: "MongoDB", type: "Database" },
    { imageUrl: sql, name: "SQL", type: "Database" },
    { imageUrl: mui, name: "Material-UI", type: "Frontend" },
    { imageUrl: nodejs, name: "Node.js", type: "Backend" },
    { imageUrl: react, name: "React", type: "Frontend" },
    { imageUrl: tailwindcss, name: "Tailwind CSS", type: "Frontend" },
    { imageUrl: firebase, name: "Firebase", type: "Web" },
  ];
  
  export const experiences = [
    {
      title: "Data Science Intern",
      company_name: "EDUFABRICA PVT. LTD.",
      icon: internlog,
      iconBg: "#accbe1",
      date: "June 2023 - Sept 2023",
      points: [
        "Analyzed large datasets to extract meaningful insights and support data-driven decision making.",
        "focusing on data quality enhancement through implemented mean and median imputation methods to address missing values and employed outlier detection strategies to maintain dataset integrity",
        "Collaborated in a team environment, gaining proficiency in Git and GitHub for version control and collaborative development.",
        "Technologies Used: Machine Learning, Python, Pandas, OpenCV, Anaconda and Jupyter Notebook, Git.",
      ],
    },
  ];
  
  export const educations = [
    {
      title: 'Master of Technology in Agile software Engineering',
      company_name: 'Maulana Azad National Institute of Technology',
      icon: rgipt,
       iconBg: "#accbe1",
      date: " 2024 -  2026",
      points: [
        "A Agile software Engineering student at Maulana Azad National Institute of Technology.",
        "Coursework:DevOps tool and Chain,Software Architecture and Design,Cloud Computing and Virtualization and Machine learning.",
      ],
    },
    {
      title: 'Bachelor of Technology in Computer Science Engineering',
      company_name: 'Rajiv Gandhi Institute Of Petroleum Technology',
      icon: rgipt,
      iconBg: "#accbe1",
      date: "Dec 2020 - Jun 2024",
      points: [
        "A Computer Science Engineering student at Rajiv Gandhi Institute of Petroleum Technology (An Institute of National Importance along the lines of IITs).",
        "Coursework: Data Structures, Algorithms Analysis, Computer Architecture, Operating System, Database Management, Machine learning.",
      ],
    },
    {
      title: 'Higher Secondary Education (BSEB)',
      company_name: 'A N College, Boaring Road, Patna',
      icon: classtwel,
      iconBg: "#accbe1",
      date: "Jun 2017 - May 2019",
      points: ["PCM", "81%"],
    },
    {
      title: 'Higher Education (BSEB)',
      company_name: 'Utkramit M S School, Barh, Patna',
      icon: classtenth,
      iconBg: "#accbe1",
      date: "July 2016 - May 2017",
      points: ["83%"],
    },
  ];
  
  export const socialLinks = [
    { name: 'GitHub', iconUrl: github, link: 'https://github.com/krohit2552' },
    { name: 'LinkedIn', iconUrl: linkedin, link: 'https://www.linkedin.com/in/rohit-kumar-407b30215/' },
    { name: 'Resume', iconUrl: resume, link: 'https://drive.google.com/file/d/11RT-olWLnAGVv_U-DSj2PM7bV3epuwMT/view?usp=sharing' },
  ];
  
  export const projects = [
    
    {
      iconUrl: prtfolio,
      theme: 'btn-back bg-purple-700',
      name: 'Portfolio',
      description: 'Created an interactive 3D animation website using Three.js, showcasing my personal projects. Implemented adaptive scaling and positioning techniques for seamless user experience across devices. Introduced touch rotation for 3D elements on smaller devices and integrated EmailJS for contact functionality.',
      link: 'https://github.com/krohit2552/MY-Portfolio',
      linkcc: 'https://rohit2552portfolioproject.netlify.app',
    },
    {
      iconUrl: algo_vis,
      theme: 'btn-back-yellow',
      name: 'Algorithm Visualizer',
      description: 'React-based visualization platform for searching, sorting, and scheduling algorithms with a Node.js backend for user feedback via Nodemailer. Utilizes tsParticles for customizable JavaScript particle effects in the background, enhancing UI aesthetics.',
      link: 'https://github.com/krohit2552/MY-ALGO-VIS',
      linkcc: 'https://algo-vizzz.netlify.app/',
    },
    {
      iconUrl: face_detection,
      theme: 'btn-back-blue',
      name: 'Sport Person Face Detection',
      description: 'Developed an advanced face detection system for identifying and recognizing sports personalities in image formats, based on a combination of attributes. Ensemble models namely Support Vector Machine (SVM) and k-fold Validation and got an accuracy of 97%. Technology Stack: Python, OpenCV, Flask, JavaScript.',
      link: 'https://github.com/krohit2552/Sport_Person_Face_detection',
      linkcc: 'https://github.com/krohit2552/Sport_Person_Face_detection/blob/main/face_dictation.pdf',
    },
    {
      iconUrl: taskweb,
      theme: 'btn-back bg-cyan-600',
      name: 'TaskMaster Pro',
      description: 'Integrated Angular and Flask to develop a robust task management system with Angular Material for dynamic UI components. Utilized PostgreSQL and SQLAlchemy for efficient data storage and management, optimizing backend APIs for streamlined task handling and achieving enhanced system performance.',
      link: 'https://github.com/krohit2552/TaskWebApp-Fronted',
      linkcc: 'https://taskwebapp.netlify.app',
    },
    {
      iconUrl: CO2_prediction,
      theme: 'btn-back bg-lime-800',
      name: 'CO2 Prediction',
      description: 'In this project, we used a linear regression model to predict the CO2 emissions of cars based on their weight and volume. The dataset used for this task contains information about various cars, including their weight, volume, and corresponding CO2 emissions. This was done in Jupyter Notebook and using a machine learning model.',
      link: 'https://github.com/krohit2552/Prediction-of-CO2-emitted-by-cars',
      linkcc: 'https://github.com/krohit2552/Prediction-of-CO2-emitted-by-cars/blob/main/prediction%20of%20CO2.pdf',
    },
  ];
  