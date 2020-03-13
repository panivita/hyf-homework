const names = ['Peter', 'Ahmad', 'Yana', 'Kristina', 'Rasmus', 'Samuel', 'Katrine', 'Tala'];
const nameToRemove = 'Ahmad';

function remove(names, nameToRemove) {
  const i = names.indexOf(nameToRemove);
  names.splice(i, 1);
  return names;
}

const resultRemove = remove(names, nameToRemove); 
console.log(resultRemove);