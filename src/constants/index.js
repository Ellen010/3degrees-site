import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
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
      videoDuration: 5,
    }
  ];
  
  export const models = [
    {
      id: 1,
      title: "Pirate Cannon Game.",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: yellowImg,
    },
    {
      id: 2,
      title: "Mario Phone Holder",
      color: ["#53596E", "#6395ff", "#21242e"],
      img: blueImg,
    },
    {
      id: 3,
      title: "Lithophane wagon",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img: whiteImg,
    },
    {
      id: 4,
      title: "Bottle of Champagne - Lithophane holder",
      color: ["#454749", "#3b3b3b", "#181819"],
      img: blackImg,
    },
    {
      id: 5,
      title: "Halloween basket - Doublefaced ghost",
      color: ["#454749", "#3b3b3b", "#181819"],
      img: blackImg,
    }
  ];
  
  export const attachments = [
    { label: 'Free standing model wihtouth attachments"', value: "Without the phone" },
    { label: 'Mario can hold a phone up to 20 sm height and the up to 2 sm/1 iches width"', value: "With the phone" },
  ];
  

  export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
  ];