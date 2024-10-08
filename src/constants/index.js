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
        " Canonc game is a fun way to pass the time with friens or family",
        "It can also be a great gift or an addition to your 3D models collection.",
      ],
      video: highlightFirstVideo,
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: ["This Mario model represents a", 
        "innovative concept of a toy and a phont holder.",
        "Six colors that smothly align in this model.",
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
        "Lookig for something one-of-the kind?",
        "This 3D bottle can be charged by USB cable or battery light bulbs.",
        "Insert photo can be changed." 
      ],
      video: highlightFourthVideo,
      videoDuration: 3.63,
    },
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
  ];
  
  export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ];
  
  export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
  ];