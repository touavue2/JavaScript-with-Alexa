let input = [4, -3, 5, -7, 10, 42, 26, -9, 143, -73];

for (let w = 0; w < input.length; w++) {
  for (let v = 0; v < input.length; v++) {
    if (input[v] > input[v + 1]) {
      let int1 = input[v];
      input[v] = input[v + 1];
      input[v + 1] = int1;
    }
  }
}
console.log(input);
