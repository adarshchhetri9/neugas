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
    id:1,
    name: "Overview",
    icon: overview,
  },
  {
    id:2,
    name: "Task",
    icon: task,
  },
  {
    id:3,
    name: "Mentor",
    icon: mentor,
  },
  {
    id:4,
    name: "Message",
    icon: message,
  },
  {
    id:5,
    name: "Settings",
    icon: setting,
  },
];

const mentors = [
  {
    id:1,
    pic: george,
    name: "Curious George",
    Do: "UI/UX Design",
    task: "40 Task ",
    rating: "4,7 (750 Reviews)",
    Follow: "+ Follow",
  },
  {
    id:2,
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
    id:1,
    img: mobileC,
    name: "Creating Mobile App Design",
    Do: "UI UX Design",
    percent: "75%",
    days: "3 Days Left ",
    pImg: seventyfive,
  },
  {
    id:2,
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
    id:1,
    day: "S",
    date: 10,
  },
  {
    id:2,
    day: "M",
    date: 11,
  },
  {
    id:3,
    day: "T",
    date: 12,
  },
  {
    id:4,
    day: "W",
    date: 13,
  },
  {
    id:5,
    day: "T",
    date: 14,
  },
  {
    id:6,
    day: "F",
    date: 15,
  },
  {
    id:7,
    day: "S",
    date: 16,
  },
];

const detailTask = [
  {
    id:1,
    no: 1,
    text: "Understanding the tools in figma",
  },
  {
    id:2,
    no: 2,
    text: "Understanding the basic of making designs",
  },
  {
    id:3,
    no: 1,
    text: "Design a mobile application with Figma",
  },
];

export { menuItem, mentors, upcoming, date, detailTask };
