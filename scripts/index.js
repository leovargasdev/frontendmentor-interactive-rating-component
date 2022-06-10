function selectRating(ratingId) {
  const ratings = document.querySelectorAll('.card__rating button')

  ratings.forEach((rating, index) => {
    const isFill = index < ratingId
    const isSelected = (index + 1) === ratingId

    rating.classList.remove('active-fill')
    rating.classList.remove('active-outline')

    if(isSelected) {
      rating.classList.add('active-fill')
    } else if(isFill) {
      rating.classList.add('active-outline')
    } 
  })
}