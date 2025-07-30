const set = new Set(['apple', 'banana', 'cherry']);

// 1. for...of
for (const item of set) {
  console.log(item);
}

// 2. set.forEach
set.forEach((value) => {
  console.log(value);
});

// 3. set.values() or set.keys() or set.entries()
for (const value of set.values()) {
  console.log('Value:', value);
}

// Note: keys() === values() in Set
for (const [key, value] of set.entries()) {
  console.log(`Entry: ${key} = ${value}`); // key and value are same in Set
}
