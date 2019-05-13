function pairs(names) {
  let list = shuffle(names);
  if (list.length % 2) list.push("?");

  for (let i = 0; i < list.length; i += 2) {
    console.log(`${list[i]} - ${list[i + 1]}`);
  }
}

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }

  return array;
}

pairs([
  "name1",
  "name2",
  "name3",
  "name4",
  "..."
]);
