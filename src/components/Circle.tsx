import {FC, useEffect, useState, ReactNode } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface CircleProps {
  percentageMax: number;
  icon: ReactNode;
  classApply: string;
}

const Circle : FC<CircleProps> = ({ percentageMax, icon, classApply}) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if(percentage < percentageMax) {
        setPercentage(percentage + 1)
      }
    }, 50);
  },[percentage]);
  
  return(
    <div className="progress-bar">
      <div className="progress-bar-title">
        <span className={ classApply}>{icon}</span>   
      </div>
         
      <div className={"circle " + classApply}>
        <CircularProgressbar value={percentage} text={`${percentage}%`}/>
      </div>
    </div>
  );
}

export default Circle;