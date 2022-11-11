const BASE_URL = "http://localhost:3000";

const lista = document.getElementById("lista");
const postForm = document.getElementById("post-form");

async function getPosts() {
  const res = await fetch(`${BASE_URL}/posts`);
  const posts = await res.json();

  return posts;
}

async function createPost(data) {
  await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

async function deletePost(id) {
  await fetch(`${BASE_URL}/posts/${id}`, {
    method: "DELETE",
  });
}

function renderPosts(posts) {
  posts.forEach((post) => {
    const li = document.createElement("li");
    li.style.listStyle = "none";
    li.innerHTML = `
      <h2>${post.titulo}</h2>
      <p>${post.descricao}</p>
      <button class="" onclick="deletePost(${post.id})">Excluir</button>
    `;
    lista.appendChild(li);
  });
}

window.addEventListener("load", async () => {
  const posts = await getPosts();
  renderPosts(posts);
});

postForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const post = {
    titulo: e.target.titulo.value,
    descricao: e.target.descricao.value,
  };

  if (post.titulo && post.descricao) {
    await createPost(post);

    renderPosts([post]);
  }
});