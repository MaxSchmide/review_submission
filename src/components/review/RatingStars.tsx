interface RatingStarsProps {
  rating: number;
  onChange?: (rating: number) => void;
}

export const RatingStars = ({ rating, onChange }: RatingStarsProps) => {
  return (
    <div className="flex items-center gap-2">
      {[1, 2, 3, 4, 5].map((index) => (
        <img
          key={index}
          loading="lazy"
          src={
            index <= rating
              ? "https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/12e419faaa02e59b36d29fe3d11a06cf783fc559875fc9bbf68271d4b4dc4ac1"
              : "https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/a3a8fe0867dbee949e746d397b0fe46ec8068633eb521586540f913b14c9885a"
          }
          className="aspect-[1] object-contain w-[50px] self-stretch shrink-0 my-auto cursor-pointer"
          onClick={() => onChange?.(index)}
          alt={`Star ${index}`}
        />
      ))}
    </div>
  );
};
