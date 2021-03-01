"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

const adv = document.querySelectorAll(".promo__adv"),
  genre = document.querySelector(".promo__genre"),
  backGround = document.querySelector(".promo__bg"),
  moviesArr = document.querySelector(".promo__interactive-list"),
  movieInput = document.querySelector(".adding__input"),
  form = document.querySelector(".add"),
  chkBox = document.querySelector("input[type=checkbox]");

function removeAdv(adv) {
  adv.forEach((element) => element.remove());
}

genre.textContent = "ДРАМА";

backGround.style.backgroundImage = "url(../img/bg.jpg)";

function sortMovies(dataBase) {
  dataBase.sort();
}

function removeMovies(removeList) {
  removeList.innerHTML = "";
}

function createList(dataBase, moviesList) {
  removeMovies(moviesArr);
  dataBase.forEach((movie, i) => {
    moviesList.innerHTML += `<li class = 'promo__interactive-item'>${
      i + 1
    } ${movie}
	<div class = 'delete'></div>
	</li>`;
  });
  document.querySelectorAll(".delete").forEach((del, i) => {
    del.addEventListener("click", () => {
      del.parentElement.remove();
      movieDB.movies.splice(i, 1);
      createList(dataBase, moviesList);
    });
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let inputText = movieInput.value;

  if (inputText) {
    removeMovies(moviesArr);
    chkBox.checked ? console.log("Добавляем любимый фильм") : "";

    inputText.length > 21
      ? movieDB.movies.push(`${inputText.substring(0, 21)}...`)
      : movieDB.movies.push(inputText);

    sortMovies(movieDB.movies);

    createList(movieDB.movies, moviesArr);
  }
  movieInput.value = "";
});
removeAdv(adv);
sortMovies(movieDB.movies);
removeMovies(moviesArr);
createList(movieDB.movies, moviesArr);
// let sortedMovies = [...movieDB.movies];
// let moviesChildren = [...moviesArr.children];
// function sortMovies() {
//   moviesChildren.forEach(
//     (element, i) => (element.innerText = `${i + 1}. ${sortedMovies[i]}`)
//   );
//   console.log(moviesChildren);
// }
// sortMovies();

// btn.onclick = function addMovies(params) {
//   //   movieDB.movies = movieInput.value;
//   event.preventDefault();

//   sortedMovies.push(movieInput.value);

//   sortMovies();

//   console.log(sortedMovies);
// };

// function buildMovieList(params) {
//   let li = document.createElement("li");
//   li.classList.add('promo__interactive-item"');
//   moviesArr.appendChild(li);
//   console.log(moviesChildren);
// }
// buildMovieList();
