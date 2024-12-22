import { Star } from "lucide-react";

const Rating = ({ rating }: { rating: number }) => {
  const roundedRating = Math.round(rating);
  return (
    <div className="flex font-thin">
      {[...Array(5)].map((_, i) => (
        <Star key={i} strokeWidth={0} className={`
          h-10 w-10
          ${i < roundedRating ? 'fill-yellow-400' : 'fill-yellow-400/30'}
          `} />
      ))}
    </div>
  );
};

export default Rating;
