const map = new Map([
  ['name', 'Lekshmi'],
  ['age', 25],
  ['city', 'Trivandrum']
]);

// 1. for...of (entries)
for (const [key, value] of map) {
  console.log(`${key} = ${value}`);
}

// 2. map.forEach
map.forEach((value, key) => {
  console.log(`${key} => ${value}`);
});

// 3. map.keys()
for (const key of map.keys()) {
  console.log('Key:', key);
}

// 4. map.values()
for (const value of map.values()) {
  console.log('Value:', value);
}

// 5. map.entries()
for (const [key, value] of map.entries()) {
  console.log(`Entry: ${key} = ${value}`);
}
