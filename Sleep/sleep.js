// create sleep 3 seconds function
function sleep(valor) {
  return new Promise((res) => { 
    setTimeout(() => res(valor), 3000);
 });
}

const valores = [1, "um", 2, "dois", 4, "quatro", 5, "cinco"];

sleep(3).then((valor) => console.log(valor));

sleep("Três").then((valor) => console.log(valor));

Promise.all(
  valores.map((valor) => {
    sleep(valor).then((valor) => console.log(valor));
  })
);