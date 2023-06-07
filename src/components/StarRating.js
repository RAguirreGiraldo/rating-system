import { useState } from 'react'
import Star from './Star'

const ratings = [
    { value: 1, text: 'Bad'},
    { value: 2, text: 'Not too Bad'},
    { value: 3, text: 'Enough' },
    { value: 4, text: 'Good' },
    { value: 5, text: 'Excellent'}
];

function StarRating() {

  const [currentRating, setCurrentRating] = useState({});

  function onRatingClick(value)
  {
    const rating = ratings[value-1];
    setCurrentRating(rating);
  }
  return (
    <div className="stars-rating-container">
        <div className="stars-container">
            {ratings.map( rating => (
            <Star 
                key={rating.value} 
                isFilled={ currentRating.value >= rating.value} 
                onStartClick={() => onRatingClick(rating.value)} 
            />     
            ))}
        </div>
        <div className="rating-text-container">
            <h2 className="rating-text">{currentRating.text}</h2>
        </div>
    </div>
  )
}

export default StarRating