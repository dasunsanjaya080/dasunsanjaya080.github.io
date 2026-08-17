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
    tag: "SAUVC 2026 Competition",
    status: "Finalist — China",
    period: "2025 – 2026",
    team: "10-member, non-academic team",
    stack: ["SolidWorks", "ESP32", "Thruster Design"],
    summary: "Designed the vehicle structure and thruster mounting brackets for underwater navigation and exploration. Serving as team leader and design engineer for Team Diyakwa, selected for the SAUVC 2026 finals in China representing Sri Lanka.",
    image: "assets/projects/diyakawa.jpg",
    link: "",
    detailedDescription: "Team Diyakwa is competing in the Southeast Asia Underwater Vehicle Championship (SAUVC) 2026 in China. As the design engineer and team leader, I am responsible for the overall vehicle architecture, structural design, and thruster integration. The AUV is designed for autonomous underwater navigation with emphasis on stability, maneuverability, and sensor integration. The vehicle will navigate through underwater challenges including object detection, navigation gates, and autonomous path planning.",
    processSteps: [
      {
        title: "Conceptual Design & Requirements Analysis",
        description: "Analyzed competition requirements and developed initial vehicle specifications including dimensions, weight distribution, and propulsion requirements."
      },
      {
        title: "Structural Design in SolidWorks",
        description: "Created detailed 3D models of the vehicle frame, pressure hull design, and thruster mounting brackets with emphasis on hydrodynamic efficiency."
      },
      {
        title: "Thruster Selection & Integration",
        description: "Selected appropriate thrusters based on vehicle specifications and designed custom mounting brackets for optimal thrust vectoring."
      },
      {
        title: "Electronics & Control System Integration",
        description: "Integrated ESP32 microcontroller with sensor arrays including cameras, pressure sensors, and IMU for autonomous control."
      },
      {
        title: "Testing & Iteration",
        description: "Conducted pool testing and hydrodynamic analysis to validate design and make iterative improvements."
      }
    ],
    galleryImages: [
      "assets/projects/diyakawa.jpg"
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
    image: "",
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
    galleryImages: []
  },
  {
    id: "PRJ-03",
    title: "Instrumentation System Design — Smart Bicycle DAQ",
    tag: "3rd Semester Project",
    status: "Completed",
    period: "2025",
    team: "5-member group project",
    stack: ["ESP32", "LabVIEW", "MATLAB"],
    summary: "Designed a data acquisition system for a smart bicycle, including a heart-rate monitoring system and a custom IR-based distance-measuring sensor, with data visualization in LabVIEW and MATLAB.",
    image: "",
    link: "",
    detailedDescription: "This project involved creating a comprehensive instrumentation and data acquisition system for a bicycle to monitor rider health metrics and environmental conditions. The system integrates multiple sensors including heart-rate monitors, IR distance sensors, and motion sensors, with real-time data logging and visualization capabilities.",
    processSteps: [
      {
        title: "Sensor Selection & Integration",
        description: "Selected appropriate sensors for heart-rate monitoring, distance measurement, and motion detection. Designed circuits for signal conditioning."
      },
      {
        title: "ESP32 Firmware Development",
        description: "Programmed ESP32 microcontroller for multi-sensor data acquisition, calibration, and wireless data transmission."
      },
      {
        title: "Custom IR Distance Sensor Design",
        description: "Designed and tested custom IR-based distance measuring sensor for obstacle detection during cycling."
      },
      {
        title: "Data Logging & Storage",
        description: "Implemented SD card data logging for long-term data collection and analysis."
      },
      {
        title: "Visualization Dashboard",
        description: "Created LabVIEW and MATLAB-based dashboards for real-time data visualization and post-processing analysis."
      }
    ],
    galleryImages: []
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
    summary: "Collection of mechanical designs and CAD models covering robotics, mechanical systems, and product design concepts.",
    image: "",
    link: "",
    detailedDescription: "",
    processSteps: [],
    galleryImages: [
      "assets/projects/cad-01.jpg",
      "assets/projects/cad-02.jpg",
      "assets/projects/cad-03.jpg",
      "assets/projects/cad-04.jpg"
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
