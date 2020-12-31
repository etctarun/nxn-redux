import React from "react";

//react-icons imports
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Boxes",
        path: "/home/boxes",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Details",
        path: "/home/details",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },

  // add similar {} here to add items in side bar
];
