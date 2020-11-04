const s = 'z';
const n = 1;

function solution(s, n) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  let newPass = '';

  for (let i = 0; i < s.length; i++) {
    let tempPass = '';
    if (alpha.indexOf(s[i]) >= 0) {
      let idx = alpha.indexOf(s[i]);

      if (idx + n < 26) {
        tempPass = alpha[idx + n];
      } else {
        tempPass = alpha[idx + n - 26];
      }
      console.log(tempPass);
      newPass += tempPass;
    } else if (alpha.indexOf(s[i]) === -1) {
      if (s[i] === ' ') {
        tempPass = ' ';
        console.log(tempPass);
        newPass += tempPass;
      } else {
        let idx = alpha.indexOf(s[i].toLowerCase());
        let tempPass = '';
        if (idx + n < 26) {
          tempPass = alpha[idx + n];
        } else {
          tempPass = alpha[idx + n - 26];
        }
        newPass += tempPass.toUpperCase();
        console.log(tempPass.toUpperCase());
      }
    }
  }
  var answer = newPass;
  return answer;
}

console.log(solution(s, n));
