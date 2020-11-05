function diamond(number) {
  let stars = '';

  for (let i = 1; i <= 11; i += 2) {
    stars = ' '.repeat((11 - i) / 2) + '*'.repeat(i);
    console.log(stars);
    if (i === 11) {
      for (let j = 9; j >= 0; j -= 2) {
        stars = ' '.repeat((11 - j) / 2) + '*'.repeat(j);
        console.log(stars);
      }
    }
  }
}

// diamond();

function diamond2(number) {
  let stars = '';
  if (number < 0) {
    alert('양수 이자식아!');
  } else if (number % 2 === 0) {
    alert('홀수 이자식아!');
  } else {
    for (let i = 1; i <= number; i += 2) {
      stars = ' '.repeat((number - i) / 2) + '*'.repeat(i);
      console.log(stars);
      if (i === number) {
        for (let j = number - 2; j >= 0; j -= 2) {
          stars = ' '.repeat((number - j) / 2) + '*'.repeat(j);
          console.log(stars);
        }
      }
    }
  }
}
diamond2();
