import {
    blueImg,
    highlightFirstVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    highlightFourthVideo,
    highlightFifthVideo,
    greenImg,
    orangeImg,
    yellowImg,
    redImg,
    turquoiseImg,
  } from "../utils";
  
  export const navLists = [
    { name: "Designs", path: "/designs" },
    { name: "Highlights", path: "/highlights" },
    { name: "Contact", path: "/contact" },
    { name: "Equipment", path: "/equipment" },
    { name: "Filament", path: "/filament" },
    { name: "Software", path: "/software" },
  ];
  
  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "You wanna try something new?",
        " Canon game is a fun way to pass the time with friends or family",
        "It can also be a great gift or an addition to your 3D models collection.",
      ],
      video: highlightFirstVideo,
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: ["This Mario model represents an", 
        "innovative concept of a toy and a photo holder.",
        "Six colors that smoothly align in this legendary toy.",
      ],
      video: highlightSecondVideo,
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "Treasure box",
        "carefully crafted design.",
        "This exceptional gift can be used as a tool or jewelry organiser.",
      ],
      video: highlightThirdVideo,
      videoDuration: 2,
    },
    {
      id: 4,
      textLists: [
        "Looking for one-of-the kind model?",
        "This 3D bottle can be charged by USB cable or battery light bulbs.",
        "Insert the photo to personalise your bottle." 
      ],
      video: highlightFourthVideo,
      videoDuration: 3.63,
    },
    {
      id: 5,
      textLists: [
        "Halloween vibes",
        " Candy festive basket is a tricky gift",
        "It has happy and scary faces on each side. Pick yours!",
      ],
      video: highlightFifthVideo,
      videoDuration: 3.63,
    },
    {
      id: 6,
      textLists: [
        "Notable model",
        "with personal photo that can be changed.",
        "Unique point includes modifiable concept with possibility to add more pieces.",
      ],
      video: highlightThirdVideo,
      videoDuration: 2,
    },
  ];
  
  export const models = [
    {
      id: 1,
      title: "Blue Winnie",
      color: ["#2596be"],
      img: blueImg,
    },
    {
      id: 2,
      title: "Green Winnie",
      color: ["#5bcb76"],
      img: greenImg,
    },
    {
      id: 3,
      title: "Orange Winnie",
      color: ["#fb8436"],
      img: orangeImg,
    },
    {
      id: 4,
      title: "Red Winnie",
      color: ["#cc1c14"],
      img: redImg,
    },
    {
      id: 5,
      title: "Turquoise Winnie",
      color: ["#6fde9b"],
      img: turquoiseImg,
    },
    {
      id: 6,
      title: "Yellow Winnie",
      color: ["#fbdc4e"],
      img: yellowImg,
    }
  ];
  
  export const sizes = [
    { label: '8cm', value: "small" },
    { label: '12cm', value: "large" },
  ];
  

  export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
  ];