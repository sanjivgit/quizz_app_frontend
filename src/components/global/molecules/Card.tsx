import React from "react";

interface CardProps {
    title: string;
    state: string;
    startDate: string;
    endDate: string;
}

const Card:React.FC<CardProps> = (props) => {
    const {title, state, startDate, endDate} = props;
  return (
    <div className="shadow-md p-2 border cursor-pointer hover:bg-primary_bg hover:text-white hover:animate-pulse transition duration-300">
      <span>{title}</span>
      <div className="flex items-center justify-between">
        <span>state: {state}</span>
        <span>{startDate} to {endDate}</span>
      </div>
    </div>
  );
};

export default Card;
