const word = 'I love you';

function forgFrog(word) {
  const momSaid = 'abcdefghijklmnopqrstuvwxyz';

  const frog = momSaid.split('').reverse().join('');
  const frogSaid = frog.split('');

  const wordSplit = word.split('').map((e) => e.toLowerCase());

  let blueFrog = [];

  for (let i = 0; i < wordSplit.length; i++) {
    momSaid.indexOf(wordSplit[i]);
    blueFrog.push(frogSaid[momSaid.indexOf(wordSplit[i])]);
  }

  for (let i = 0; i < blueFrog.length; i++) {
    if (blueFrog[i] === undefined) {
      blueFrog.splice(i, 1, ' ');
    }
  }

  const copyWord = word.split('');

  for (let i = 0; i < copyWord.length; i++) {
    if (copyWord[i] === copyWord[i].toUpperCase()) {
      blueFrog[i] = blueFrog[i].toUpperCase();
    } else if (copyWord[i] === copyWord[i].toLowerCase()) {
      blueFrog[i] = blueFrog[i].toLowerCase();
    }
  }

  let blueFrogSaid = '';
  for (let i = 0; i < blueFrog.length; i++) {
    blueFrogSaid += blueFrog[i];
  }

  return blueFrogSaid;
}

console.log(forgFrog(word));
