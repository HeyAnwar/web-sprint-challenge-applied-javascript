import axios from "axios";

const Header = (title, date, temp) => {

  const headDiv = document.createElement('div');
  headDiv.classList.add('header');

  const span1 = document.createElement('span');
  span1.classList.add('date');
  span1.textContent = date;

  const h1 = document.createElement('h1');
  h1.textContent = title;

  const span2 = document.createElement('span');
  span2.classList.add('temp');
  span2.textContent = temp;

  headDiv.appendChild(span1);
  headDiv.appendChild(h1);
  headDiv.appendChild(span2);

  return headDiv
}
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

const headerEntry = document.querySelector('.header-container')
const headerAppender = (selector) => {

  axios.get(selector)
  .then(res => {
    const head = Header('Anwar Times', 'April 9 2021', '70')
    headerEntry.appendChild(head)
  })
  .catch((err) => {
    console.log(err)
  })
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
