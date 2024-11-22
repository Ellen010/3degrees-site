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
  
  export const navLists = ["Models", "About", "Contact", "Equipment" , "Filament", "Electronics"];
  
  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "You wanna try something new?",
        " Canon game is a fun way to pass the time with friens or family",
        "It can also be a great gift or an addition to your 3D models collection.",
      ],
      video: highlightFirstVideo,
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: ["This Mario model represents an", 
        "innovative concept of a toy and a photo holder.",
        "Six colors that smothly align in this legendary toy.",
      ],
      video: highlightSecondVideo,
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "Notable model",
        "with personal photo that can be changed.",
        "Unique point includes modifable concept with possibility to add more pieces.",
      ],
      video: highlightThirdVideo,
      videoDuration: 2,
    },
    {
      id: 4,
      textLists: [
        "Lookig for one-of-the kind model?",
        "This 3D bottle can be charged by USB cable or battery light bulbs.",
        "Insert the photo to personalise your bottle." 
      ],
      video: highlightFourthVideo,
      videoDuration: 3.63,
    },
    {
      id: 5,
      textLists: [
        "Hallowen vibes",
        " Candy festive basket is a tricky gift",
        "It has happy and scary faces on each side. Pick yours!",
      ],
      video: highlightFifthVideo,
      videoDuration: 3.63,
    }
  ];
  
  export const models = [
    {
      id: 1,
      title: "Blue Tube",
      color: ["#2596be"],
      img: blueImg,
    },
    {
      id: 2,
      title: "Green Tube",
      color: ["#5bcb76"],
      img: greenImg,
    },
    {
      id: 3,
      title: "Orange Tub",
      color: ["#fb8436"],
      img: orangeImg,
    },
    {
      id: 4,
      title: "Red Tub",
      color: ["#cc1c14"],
      img: redImg,
    },
    {
      id: 5,
      title: "Turquoise Tub",
      color: ["#6fde9b"],
      img: turquoiseImg,
    },
    {
      id: 6,
      title: "Yellow Tub",
      color: ["#fbdc4e"],
      img: yellowImg,
    }
  ];
  
  export const sizes = [
    { label: '8s', value: "small" },
    { label: '12s"', value: "large" },
  ];
  

  export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
  ];