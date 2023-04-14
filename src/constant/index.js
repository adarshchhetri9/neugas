import {
  overview,
  message,
  task,
  setting,
  mentor,
  george,
  lincoln,
  mobileC,
  seventyfive,
  webC,
  eightyfive,
} from "../assets";

const menuItem = [
  {
    name: "Overview",
    icon: overview,
  },
  {
    name: "Task",
    icon: task,
  },
  {
    name: "Mentor",
    icon: mentor,
  },
  {
    name: "Message",
    icon: message,
  },
  {
    name: "Settings",
    icon: setting,
  },
];

const mentors = [
  {
    pic: george,
    name: "Curious George",
    Do: "UI/UX Design",
    task: "40 Task ",
    rating: "4,7 (750 Reviews)",
    Follow: "+ Follow",
  },
  {
    pic: lincoln,
    name: "Abraham Linclon",
    Do: "3D Design",
    task: "32 Task ",
    rating: "4,9 (510 Reviews)",
    Follow: "Followed",
  },
];

const upcoming = [
  {
    img: mobileC,
    name: "Creating Mobile App Design",
    Do: "UI UX Design",
    percent: "75%",
    days: "3 Days Left ",
    pImg: seventyfive,
  },
  {
    img: webC,
    name: "Creating Perfect Website",
    Do: "Web Developer",
    percent: "85%",
    days: "4 Days Left ",
    pImg: eightyfive,
  },
];

const date = [
  {
    day: "S",
    date: 10,
  },
  {
    day: "M",
    date: 11,
  },
  {
    day: "T",
    date: 12,
  },
  {
    day: "W",
    date: 13,
  },
  {
    day: "T",
    date: 14,
  },
  {
    day: "F",
    date: 15,
  },
  {
    day: "S",
    date: 16,
  },
];

const detailTask = [
  {
    no: 1,
    text: "Understanding the tools in figma",
  },
  {
    no: 2,
    text: "Understanding the basic of making designs",
  },
  {
    no: 1,
    text: "Design a mobile application with Figma",
  },
];

export { menuItem, mentors, upcoming, date, detailTask };
