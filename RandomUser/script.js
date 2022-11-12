import fetchRandomUsers from "./fetch.js";

const userList = document.querySelector("#user-list");
const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(e.target.quantity.value);
  const users = await fetchRandomUsers(e.target.quantity.value);
  userList.innerHTML = users
    .map(
      ({
        email,
        location: { street, city, state, country },
        name,
        picture,
      }) => `
    <li class="user">
      <img src="${picture.large}" alt="${name.first}">
      <ul class=info>
        <li>${name.title} ${name.first} ${name.last}</li>
        <li>${email}</li>
        <li>${street.name.trim()}, n° ${
        street.number
      }, ${city}, ${state} - ${country}</li>
      </ul>
    </li>
  `
    )
    .join("");
});
