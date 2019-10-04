const API_BASE_URL = "https://ghibliapi.herokuapp.com"

const filmsReviewsMap = {
  //filmId: reviewsArr,
  //2baf70d1-42bb-4437-b551-e5fed5a87abe: [{...},{...}]
}

document.addEventListener("DOMContentLoaded", () => {
  setupSelectorListener()
  setupFormListener()
  fetchAllFilms()
})

const fetchAllFilms = () => {
  fetch(`${API_BASE_URL}/films`)
    .then(res => res.json())
    .then(films => {
       console.log(films)
       createFilmsOptions(films)
    })
    .catch(err => console.log(err))
}

const createFilmsOptions = (films) => {
  const select = document.querySelector('#film-selector')

  const emptyOption = document.createElement('option');
  select.appendChild(emptyOption);

  films.forEach(film => {
    const option = document.createElement('option');
    option.value = film.id;
    option.innerText = film.title;
    select.appendChild(option);
  })
}

const setupSelectorListener = () => {
  const select = document.querySelector('#film-selector')
  select.addEventListener('change', handleFilmSelectorChange);
}

const handleFilmSelectorChange = (event) => {
  let filmId = event.target.value;
  if (filmId) {
    fetch(`${API_BASE_URL}/films/${filmId}`)
      .then(res => res.json())
      .then(filmData => {
        displayFilmDetails(filmData);
      })
      .catch(err => console.log(err))
  } else {
    clearFilmDetails();
  }
}

const displayFilmDetails = (film) => {
  const filmDetails = document.querySelector('.film-details');

  clearFilmDetails();

  const title = document.createElement('h3');
  title.innerText = film.title;

  const releaseYear = document.createElement('p');
  releaseYear.innerText = film.release_date;

  const description = document.createElement('p');
  description.innerText = film.description;

  filmDetails.append(title, releaseYear, description);
}

const setupFormListener = () => {
  const form = document.querySelector('form')
  form.addEventListener('submit', handleFormSubmit);
}

const handleFormSubmit = (event) => {
  event.preventDefault();

  const filmSelector = document.querySelector('#film-selector');
  const reviewInput = document.querySelector('#review-input') 

  const filmId = filmSelector.value
  const text = reviewInput.value 

  reviewInput.value = '' // Clear input box setting it back to empty string;

  const review = {
    text: text,
    filmId: filmId
  }

  if (filmId && text) {
    if (filmsReviewsMap[filmId]) {
      filmsReviewsMap[filmId].push(review);
    } else {
      filmsReviewsMap[filmId] = [review];
    }

    updateReviewList(review)
  }
}

const updateReviewList = (review) => {
  const filmSelector = document.querySelector('#film-selector');
  const filmTitle = filmSelector.selectedOptions[0].innerText;

  const reviewsList = document.querySelector('#reviews-list');
  const reviewLi = document.createElement('li');

  const title = document.createElement('b')
  title.innerText = filmTitle + ": ";

  const text = document.createElement('span')
  text.innerText = review.text; 

  reviewLi.appendChild(title)
  reviewLi.appendChild(text)

  reviewsList.appendChild(reviewLi);
}

const clearFilmDetails = () => {
  const filmDetails = document.querySelector('.film-details');

  while(filmDetails.firstChild) {
    filmDetails.removeChild(filmDetails.firstChild);
  }
}
