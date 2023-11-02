import React from "react";

import { FiBarChart } from "react-icons/fi";
import { FcHighPriority } from "react-icons/fc";
import { BiDotsHorizontal } from "react-icons/bi";
import {
  MdSignalCellularAlt1Bar,
  MdSignalCellularAlt2Bar,
} from "react-icons/md";
import './PriorityLevel.css'

const PriorityLevel = ({ priority }) => {
  const priorityIcons = [
    <BiDotsHorizontal />,
    <MdSignalCellularAlt1Bar />,
    <MdSignalCellularAlt2Bar />,
    <FiBarChart />,
    <FcHighPriority />,
  ];

  return <div className="priority_image">{priorityIcons[priority]}</div>;
};

export default PriorityLevel;
