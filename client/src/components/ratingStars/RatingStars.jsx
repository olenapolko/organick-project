import { memo } from 'react';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Star({ filled }) {
  return (
    <FontAwesomeIcon
      icon={faStar}
      style={{ color: filled ? '#FFA858' : '#9da0a1' }}
    />
  );
}

const MemoizedStar = memo(Star);

export function RatingStars({ stars }) {
  const drawStars = (rating) => {
    const starsArray = [];
    for (let i = 1; i <= 5; i++) {
      const isFilled = i <= rating;
      starsArray.push(<MemoizedStar key={uniqid()} filled={isFilled} />);
    }
    return starsArray;
  };

  return <>{drawStars(stars)}</>;
}


