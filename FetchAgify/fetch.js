const getAgeByNameAndCountry = async (name, country) => {
  const URL = `https://api.agify.io/?country_id=${country}&name=${name}`;
  const response = await fetch(URL);
  const { age } = await response.json();
  console.log(age);
}

getAgeByNameAndCountry('Antonio', 'BR');