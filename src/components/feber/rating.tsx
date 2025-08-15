// components/Rating.js
import Star from './star';

interface RatingProps {
  rating: number;
}

function Rating({ rating }: RatingProps) {
  const totalStars = 5; // Total number of stars to display

  return (
    <div>
      {Array.from({ length: totalStars }, (_, index) => {
        const isFilled = index < Math.floor(rating);
        const isHalfFilled = !isFilled && index < rating;
        return <Star key={index} filled={isFilled} halfFilled={isHalfFilled} />;
      })}
    </div>
  );
}

export default Rating;
