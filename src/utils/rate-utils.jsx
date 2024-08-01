function calculateStarRatings(rating) {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

  return {
    filledStars,
    hasHalfStar,
    emptyStars,
  };
}

function RatingStars({ ratingString }) {
  const rating = parseFloat(ratingString);
  const { filledStars, hasHalfStar, emptyStars } = calculateStarRatings(rating);

  return (
    <div className="rate">
      {/* Render filled stars */}
      {[...Array(filledStars)].map((_, index) => (
        <i key={`filled-${index}`} className="fa-solid fa-star"></i>
      ))}

      {/* Render half star, if applicable */}
      {hasHalfStar && <i className="fa-solid fa-star-half-stroke"></i>}

      {/* Render empty stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <i key={`empty-${index}`} className="fa-regular fa-star"></i>
      ))}

      <label htmlFor="">{rating.toFixed(1)}</label>
    </div>
  );
}

export default RatingStars;
