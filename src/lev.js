import levenshtein from 'js-levenshtein';
let true_password = ""
for (let i = 0; i < 12; i++){
  const r = Math.random()
  if (r < .2) {
    true_password += 'a'
  } else if (r < .4) {
    true_password += 'b'
  } else if (r < .6) {
  true_password += 'c'
  } else if (r < .8) {
  true_password += 'd'
  } else {
  true_password += 'e'
  }
}
function checkLev() {
  const guess = document.getElementById('levguess').value
  const distance = levenshtein(true_password, guess)
  const body = document.createElement('p');
  let text_out = "";
  if (distance >= 12) {
    text_out = guess + "\tOMG! You hacker!! Your guess is so wrong!! You will never figure out the password! (Distance >= 12)"
  } else if (distance >= 4) {
    text_out = guess + "\tThat's so wrong... try again? (Distance >= 4)"
  } else if (distance < 4) {
    text_out = guess + "\tOh! You are so close. You must be the real person. Maybe you made a typo? (Distance < 4)"
  } else {
    text_out = "Uh, you have hacked our site or something. (Distance unknown)"
  }
  const textout = document.createTextNode(text_out);
  body.appendChild(textout);
  if (distance == 0) {
    const textout = document.createTextNode("Ah, you must be real, since you know the password. " +
    "The coin is hidden in the grass, near the arrow in the image. https://imgur.com/XyFe4bB");
    body.appendChild(textout);
  }
  document.body.insertBefore(body, document.getElementById('levform').nextSibling);
  return false
}
export {
  checkLev,
}
