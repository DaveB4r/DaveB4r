import { FC, Fragment, useState } from "react";

interface CardProps {
  img: string;
  title: string;
  description: string;
  gif: string;
}

const Card: FC<CardProps> = ({img, title, description, gif}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  }
  return(
    <Fragment>
      <div 
        className="card_grid"
        onMouseEnter={handlePlay}
        onMouseLeave={handlePlay}  
      >
        <figure className="effect-card">
          <img src={isPlaying ? gif : img} alt={title} />
          <figcaption>
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </figcaption>
        </figure>
      </div>    
    </Fragment>
  );
}

export default Card;
