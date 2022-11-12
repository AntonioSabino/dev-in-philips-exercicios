
const fetchRandomUsers = async (users) => {
  const BASE_URL = `https://randomuser.me/api/?results=${users}&nat=br`;
  const response = await fetch(BASE_URL);
  const { results } = await response.json();
  return results;
}

export default fetchRandomUsers;