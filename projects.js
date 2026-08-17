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
  ================================================================
*/

const PROJECTS = [
  {
    id: "PRJ-01",
    title: "Autonomous Underwater Vehicle — Team Diyakwa",
    tag: "SAUVC 2026 Competition",
    status: "Finalist — China",
    period: "2025 – Present",
    team: "10-member, non-academic team",
    stack: ["SolidWorks", "ESP32", "Thruster Design"],
    summary: "Designed the vehicle structure and thruster mounting brackets for underwater navigation and exploration. Serving as team leader and design engineer for Team Diyakwa, selected for the SAUVC 2026 finals in China representing Sri Lanka.",
    image: "assets/projects/diyakawa.jpg",
    link: ""
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
    link: ""
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
    link: ""
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
    link: ""
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
