let rating = 0;

/* On user select rating, set selected rating as active */
function onSetRating(elem, value) {
  rating = value;

  const ratings = document.querySelectorAll('.ratings li');

  ratings.forEach((rating) => {
    rating.classList.remove('active');
  });

  elem.classList.add('active');
}

/* On user submit rating, hide select rating card and show success card*/
function onSubmitRating() {
  if (rating > 0) {
    document.getElementById('rating').innerText = rating;
    document.getElementById('rate_us').classList.add('hide');
    document.getElementById('rate_success').classList.remove('hide');
  } else {
    alert('Please select a rating first!');
  }
}
