function mesclaObjetos(obj1, obj2) {
  return {...obj1, ...obj2}
}

console.log(mesclaObjetos({ a: 1, b: 2 }, { c: 3, d: 4 }));