/**!SECTION
 * While Loops
 *
 *
 */

let int1 = 8;
while (int1 < 20) {
  console.log(int1);
  int1++;
}

let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}

for (initializer; condition; iteraion) {}

for (let j = 0; j <= 5; j++) {
  console.log(j);
}

let musicGenre = [
  "Rap",
  "HipHop",
  "Drill",
  "Classical",
  "Country",
  "Techno Country",
  "Midwest Emo",
  "Metal",
  "Corridos",
  "Salsa",
];

// for (let k = 0; k < musicGenre.length; k++) {
//   let genre = musicGenre[0 - 3];
//   console.log(genre);
// }
// //
// for (let k = 0; k < musicGenre.length; k++) {
//   let genre = musicGenre[0 - 3];
//   console.log(genre);
// }
// // Print out first 4

for (let l = 0; l < 4; l++) {
  let genre = musicGenre[l];
  console.log(genre);
}
// Print out country, techno count, midwest emo
for (let z = 4; z < 7; z++) {
  let genre = musicGenre[z];
  console.log(genre);
}
