let guests = {
  firstName: [
    "Robert",
    "Quincy",
    "Jack",
    "Steve",
    "Clara",
    "Queen",
    "Carol",
    "Heather",
    "Jill",
    "Yogo",
  ],
  lastName: [
    "Smith",
    "Addams",
    "Spade",
    "Patterson",
    "Bow",
    "Heart",
    "Stacy",
    "Johnson",
    "Himora",
    "Shiki",
  ],
  species: [
    "Rabbit",
    "Caterpillar",
    "Angel",
    "Cat",
    "Bird",
    "Card",
    "Fairy",
    "Dragon",
    "Lizard",
    "Mouse",
  ],
  teaCup: "true",
  teaPlate: "true",
  smallDessert: [
    "Carrot Cake",
    "Leaf Cookie",
    "Fruit Cake",
    "Banana Bread",
    "Blueberry Pie",
    "Orange Cake",
    "Strawbery Cake",
    "Dragon Fruit Pie",
    "Almond Cookie",
    "Cheese Cake",
  ],
};

for (let g = 0; g < 10; g++) {
  let guestFNames = guests.firstName[g];
  let guestLNames = guests.lastName[g];
  let guestSpecies = guests.species[g];
  let guestDesert = guests.smallDessert[g];

  console.log("");
  console.log(g);
  console.log("");
  console.log("First Name:", guestFNames);
  console.log("Last Name:", guestLNames);
  console.log("Species:", guestSpecies);
  console.log("Tea Cup:", guests.teaCup);
  console.log("Tea Plate:", guests.teaPlate);
  console.log("Desert:", guestDesert);
}

// {
//   firstName: [
//     'Robert', 'Quincy',
//     'Jack',   'Steve',
//     'Clara',  'Queen',
//     'Carol',  'Heather'
//   ],
//   lastName: [
//     'Smith', 'Addams',
//     'Spade', 'Patterson',
//     'Bow',   'Heart',
//     'Stacy', 'Johnson'
//   ],
//   species: [
//     'Rabbit', 'Caterpillar',
//     'Angel',  'Cat',
//     'Bird',   'Card',
//     'Fairy',  'Dragon',
//     'Lizard', 'Mouse'
//   ],
//   teaCup: 'true',
//   teaPlate: 'false',
//   smallDessert: [
//     'Carrot Cake',
//     'Leaf Cookie',
//     'Fruit Cake',
//     'Banana Bread',
//     'Blueberry Pie',
//     'Orange Cake',
//     'Strawbery Cake',
//     'Dragon Fruit Pie',
//     'Almond Cookie',
//     'Cheese Cake'
//   ]
// }
