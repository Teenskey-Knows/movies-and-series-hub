import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BoxIcons from "react-icons/bi";
import * as BSIcons from "react-icons/bs";


const SidebarData = [
  //Here is where we will have as many sidebar items as we need
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    className: "nav-text",
  },
  {
    title: "Movies",
    path: "/movies",
    icon: <BoxIcons.BiMoviePlay />,
    className: "nav-text",
  },
  {
    title: "Frequently Asked Questions",
    path: "/reviews",
    icon: <BSIcons.BsFillQuestionSquareFill />,
    className: "nav-text",
  }
 
];

export default SidebarData;
