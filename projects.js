/*
  ================================================================
  PROJECT DATA
  ================================================================
  This is the ONLY file you should need to touch to add, remove,
  or edit a project. Copy an existing block, change the values,
  and add it to the PROJECTS array below.

  FIELDS
  ------
  id       : short part-number tag, e.g. "PRJ-05" (just increment)
  title    : project title
  tag      : short category label, e.g. "Semester 2 Project"
  status   : one short phrase — "Ongoing", "Completed", "Finalist — China"
  period   : e.g. "2025" or "2025 – Present"
  team     : e.g. "5-member group project" or "Individual project"
  stack    : array of short strings — tools/tech used
  summary  : 1-3 sentences on what you did and why it mattered
  image    : path to an image in assets/projects/ (see README for sizing)
             leave as "" to show a placeholder panel instead
  link     : optional — GitHub repo or write-up URL. Leave as "" to hide.
  detailedDescription : full project description for detail page
  processSteps : array of objects with {title, description} for project timeline
  galleryImages : array of image paths for photo gallery on detail page
  ================================================================
*/

const PROJECTS = [
  {
    id: "PRJ-01",
    title: "Autonomous Underwater Vehicle — Team Diyakwa",
    tag: "Singapore Autonomous Underwater Vehicle Competition (SAUVC)",
    status: "Selected for Finals — China 2026",
    period: "2025 – 2026",
    team: "10-member, non-academic team",
    stack: ["SolidWorks", "ESP32", "Thruster Design"],
    summary: "Designed the vehicle structure and thruster mounting brackets for underwater navigation and exploration. Serving as team leader and design engineer for Team Diyakwa, selected for the SAUVC finals in China 2026 representing Sri Lanka.",
    image: "assets/projects/diyakawa.jpg",
    link: "",
    detailedDescription: "Team Diyakwa was selected for the finals of the Singapore Autonomous Underwater Vehicle Competition (SAUVC) in China 2026. As the design engineer and team leader, I am responsible for the overall vehicle architecture, structural design, and thruster integration. The AUV is designed for autonomous underwater navigation with emphasis on stability, maneuverability, and sensor integration. The vehicle is developed to tackle underwater challenges including object detection, navigation gates, and autonomous path planning.",
    processSteps: [
      {
        title: "Phase 1: Conceptual Design & SolidWorks Modeling",
        description: "Analyzed competition requirements and created detailed 3D models of the vehicle frame, pressure hull design, and thruster mounting brackets with emphasis on hydrodynamic efficiency."
      },
      {
        title: "Phase 2: Manufacturing & Assembly",
        description: "Transitioned from design to physical manufacturing, fabricating structural components and assembling the vehicle frame with integrated thruster mounts."
      },
      {
        title: "Phase 3: Pool Testing & Buoyancy Validation",
        description: "Conducted initial pool testing to validate vehicle buoyancy, balance, and response to thruster commands before progressing to advanced maneuvers."
      },
      {
        title: "Phase 4: Operational Testing & Refinement",
        description: "Performed final operational testing of the vehicle in controlled environments, demonstrating autonomous navigation and mission-critical functionality for competition readiness."
      }
    ],
    galleryImages: [
      "assets/projects/diyakawa/phase1.png",
      "assets/projects/diyakawa/phase2.jpeg",
      "assets/projects/diyakawa/phase3.mp4",
      "assets/projects/diyakawa/Phase4.mp4"
    ]
  },
  {
    id: "PRJ-02",
    title: "Cartesian Pick-and-Place Robotic System",
    tag: "2nd Semester Project",
    status: "Completed",
    period: "2025",
    team: "5-member group project",
    stack: ["Arduino", "Raspberry Pi", "Image Processing"],
    summary: "Designed a Cartesian robot platform for automated pick-and-place operations, with actuator control and Arduino–Raspberry Pi communication. Integrated image processing for object detection to guide pick-and-place actions.",
    image: "assets/projects/pickplace/pickplace.jpeg",
    link: "",
    detailedDescription: "This semester project involved designing and building a three-axis Cartesian robot system capable of automated pick-and-place operations. The system uses stepper motors for linear motion control on X, Y, and Z axes, with an Arduino controlling motor movements and a Raspberry Pi running image processing algorithms for object detection and positioning.",
    processSteps: [
      {
        title: "System Architecture Design",
        description: "Designed mechanical structure with precision rails and stepper motor integration for three-axis movement."
      },
      {
        title: "Arduino Control Implementation",
        description: "Programmed stepper motor drivers and developed motion control algorithms for coordinated multi-axis movement."
      },
      {
        title: "Image Processing Pipeline",
        description: "Implemented Python-based computer vision on Raspberry Pi to detect objects and calculate pick-and-place coordinates."
      },
      {
        title: "Communication Protocol",
        description: "Established serial communication between Raspberry Pi and Arduino for real-time command execution."
      },
      {
        title: "Integration & Testing",
        description: "Integrated all systems and conducted full functional testing with various object types and placement scenarios."
      }
    ],
    galleryImages: [
      "assets/projects/pickplace/phase1.jpeg",
      "assets/projects/pickplace/phase2.mp4",
      "assets/projects/pickplace/phase3.png",
      "assets/projects/pickplace/phase4.jpg"
    ]
  },
  {
    id: "PRJ-03",
    title: "Instrumentation System Design — Smart Bicycle DAQ",
    tag: "3rd Semester Project",
    status: "Completed",
    period: "2025",
    team: "5-member group project",
    stack: ["ESP32", "MAX30102", "MPU9250", "LabVIEW", "MATLAB", "IR Sensor"],
    summary: "Developed a smart bicycle data acquisition system for rider health and motion monitoring. My contribution was the custom IR-based distance-measurement sensor and the heart-rate monitoring subsystem, with data logging and visualization in LabVIEW and MATLAB.",
    image: "assets/projects/instrumentation/instrumentation.png",
    link: "",
    detailedDescription: "This project involved designing a smart bicycle instrumentation and data acquisition system to monitor rider health and road conditions in real time. The system combines an IMU for pitch and roll estimation, a MAX30102-based heart-rate monitoring module, and a custom IR distance-measuring sensor for distance-related measurements. My contributions focused on the custom IR distance sensor and the heart-rate monitoring system, while also supporting overall DAQ integration, calibration, and signal processing. The collected data was logged and analyzed in LabVIEW and MATLAB to assess rider motion, physiological response, and road inclination.",
    processSteps: [
      {
        title: "System Requirement Analysis",
        description: "Defined the DAQ requirements for rider health monitoring, road inclination measurement, and distance sensing on a bicycle."
      },
      {
        title: "Custom Distance Sensor Design",
        description: "Designed and calibrated a custom IR-based distance-measurement sensor to estimate relevant distance information for the bicycle instrumentation system."
      },
      {
        title: "Heart-Rate Monitoring Integration",
        description: "Integrated a MAX30102-based heart-rate sensing module and processed the signal to extract pulse information during cycling."
      },
      {
        title: "IMU-based Motion Sensing",
        description: "Used an MPU9250 to measure accelerometer and gyroscope data and applied sensor fusion to estimate pitch and roll angles accurately."
      },
      {
        title: "DAQ, Logging & Visualization",
        description: "Connected the sensors to the acquisition system, logged live measurements, and visualized the results in LabVIEW and MATLAB for analysis."
      }
    ],
    galleryImages: [
      "assets/projects/instrumentation/phase1.png",
      "assets/projects/instrumentation/phase2.png",
      "assets/projects/instrumentation/phase3.png",
      "assets/projects/instrumentation/phase4.png",
      "assets/projects/instrumentation/phase5.png"
    ]
  },
  {
    id: "PRJ-04",
    title: "ROS2 & Robotics Mini-Projects",
    tag: "Ongoing Experiments",
    status: "Ongoing",
    period: "2025 – Present",
    team: "Individual / small team",
    stack: ["ROS2", "Gazebo", "Python"],
    summary: "A growing set of smaller ROS2 experiments and simulations — kinematics, control, and simulation work built alongside coursework and larger team projects.",
    image: "",
    link: "",
    detailedDescription: "",
    processSteps: [],
    galleryImages: [
      "assets/projects/ros2-01.jpg",
      "assets/projects/ros2-02.jpg",
      "assets/projects/ros2-03.jpg"
    ]
  },
  {
    id: "PRJ-05",
    title: "CAD Design Portfolio",
    tag: "Design Showcase",
    status: "Ongoing",
    period: "2024 – Present",
    team: "Individual project",
    stack: ["SolidWorks", "AutoCAD", "3D Modeling"],
    summary: "Comprehensive collection of mechanical CAD designs spanning product engineering, robotics systems, and precision components including reverse-engineered parts, thruster systems, and battery solutions.",
    image: "assets/projects/ball_valve_handle.png",
    link: "",
    detailedDescription: "",
    processSteps: [],
    isCategoryPage: true,
    subProjects: ["PRJ-06", "PRJ-07", "PRJ-08", "PRJ-09"],
    galleryImages: []
  },
  {
    id: "PRJ-06",
    title: "Hand Mixer Motor Housing — Reverse Engineering",
    tag: "CAD Mini Project",
    status: "Completed",
    period: "2024",
    team: "Individual project",
    stack: ["SolidWorks", "3D Modeling"],
    summary: "Reverse-engineered a commercial hand mixer motor housing with precision 3D modeling. Captured complete geometry including mounting surfaces and internal structure.",
    image: "assets/projects/motor-housing/actual.jpeg",
    link: "",
    detailedDescription: "",
    processSteps: [],
    galleryImages: [
      "assets/projects/motor-housing/actual.jpeg",
      "assets/projects/motor-housing/reverse_front.png",
      "assets/projects/motor-housing/reverse_back.png"
    ]
  },
  {
    id: "PRJ-07",
    title: "AUV Thruster System Design",
    tag: "CAD Mini Project",
    status: "Completed",
    period: "2025",
    team: "Team Diyakwa",
    stack: ["SolidWorks", "Thruster Design"],
    summary: "Custom thruster mounting bracket designs for autonomous underwater vehicle. Optimized for hydrodynamic efficiency and structural stability.",
    image: "assets/projects/diyakawa/thruster_front.png",
    link: "",
    detailedDescription: "",
    processSteps: [],
    galleryImages: [
      "assets/projects/diyakawa/thruster_front.png",
      "assets/projects/diyakawa/thruster_up.png"
    ]
  },
  {
    id: "PRJ-08",
    title: "Removable EV Battery Pack System",
    tag: "CAD Mini Project",
    status: "Completed",
    period: "2024",
    team: "Individual project",
    stack: ["SolidWorks", "Product Design"],
    summary: "Complete removable battery pack solution with locking mechanisms and guided rail systems for secure insertion and removal.",
    image: "assets/projects/removable-battery/guid_rails.JPG",
    link: "",
    detailedDescription: "",
    processSteps: [],
    galleryImages: [
      "assets/projects/removable-battery/guid_rails.JPG",
      "assets/projects/removable-battery/inside.JPG",
      "assets/projects/removable-battery/internal_cell.JPG"
    ]
  },
  {
    id: "PRJ-09",
    title: "Mechanical Components & Practice Designs",
    tag: "CAD Mini Project",
    status: "Completed",
    period: "2024",
    team: "Individual project",
    stack: ["SolidWorks", "AutoCAD"],
    summary: "Collection of precision mechanical component designs including clamps, flange connections, and machine parts for iterative learning.",
    image: "assets/projects/cad-practice/circularclamp.png",
    link: "",
    detailedDescription: "",
    processSteps: [],
    galleryImages: [
      "assets/projects/cad-practice/circularclamp.png",
      "assets/projects/cad-practice/flange_pipe.png",
      "assets/projects/cad-practice/machine_part.png"
    ]
  }
];

/*
  ================================================================
  SKILLS LEGEND
  ================================================================
  Short list shown as a "component legend" in the Skills section.
  Group label + comma-separated items.
  ================================================================
*/
const SKILLS = [
  { group: "CAD & Simulation", items: "SolidWorks, AutoCAD, Gazebo" },
  { group: "Embedded Hardware", items: "Raspberry Pi, ESP32, Arduino" },
  { group: "Programming", items: "Python, C++, MATLAB" },
  { group: "Robotics Frameworks", items: "ROS2" }
];
