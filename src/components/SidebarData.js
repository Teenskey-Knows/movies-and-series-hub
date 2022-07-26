import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"

import * as IoIcons from "react-icons/io5";



const SidebarData = [
    //Here is where we will have as many sidebar items as we need
    {
        title: "Home",
        path: "/",
        icon:<AiIcons.AiFillHome/>,
        className: "nav-text"

    },
    {
        title: "Movies",
        path: "/movies",
        icon:<IoIcons.BiMoviePlay/>,
        className: "nav-text"

    },  
    {
        title: "Reviews",
        path: "/reviews",
        icon:<IoIcons.MdReviews/>,
        className: "nav-text"

    },
    {
        title: "Frequently Asked Questions",
        path: "/frequentlyAskedQuestions",
        icon:<IoIcons.BsFillQuestionSquareFill/>,
        className: "nav-text"

    },
]

export default SidebarData
