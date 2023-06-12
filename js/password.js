const characterSets = [
  'abcdefghijklmnñopqrstuvwxyz', // lowercase alphabet
  'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ', // uppercase alphabet
  '0123456789', // numbers
  '!@#$%^&*()-_+=[]{}|/~.,;:°', // special characters
]

function generatePassword() {
  let cantCharacters = Number(document.getElementById('cant-characters').value)
  let newPassword = document.getElementById('password-result')
  let password = ''

  newPassword.value = ''

  for (let i = 0; i < cantCharacters; i++) {
    switch (randomCharacter()) {
      case 0:
        password += getRandomCharacterFromSet(characterSets[0])
        break;
      case 1:
        password += getRandomCharacterFromSet(characterSets[1])
        break;
      case 2:
        password += getRandomCharacterFromSet(characterSets[2])
        break;
      case 3:
        password += getRandomCharacterFromSet(characterSets[3])
        break;
    }
  }
  
  newPassword.value = password
}

let copyButton = document.getElementById('copy-button')
copyButton.addEventListener('click', () => {
  newPassword = document.getElementById('password-result').value
  navigator.clipboard.writeText(newPassword)
})

function getRandomCharacterFromSet(str) {
  let max = str.length
  let min = 1
  const index = Math.floor(Math.random() * (max - min + 1))
  return str[index]
}

function randomCharacter() {
  let max = 3
  let min = 0
  return Math.floor(Math.random() * (max - min + 1) + min)
}


/* 
const lowercaseAlphabet = 'abcdefghijklmnñopqrstuvwxyz';
const uppercaseAlphabet = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const specialCharacters = '@#$%^&*()-_+=[]{}|/~.,;:°';

function generatePassword() {
  let cantCharacters = Number(document.getElementById("cant-characters").value)
  let newPassword = document.getElementById("password-result")
  let password = ""

  newPassword.value = ""
  
  for (let i = 0; i < cantCharacters; i++) {
    switch (randomCharacter()) {
      case 1:
        password += getRandomLowercaseLetter()
        break;
      case 2:
        password += getRandomUppercaseLetter()
        break;
      case 3:
        password += getRandomNumber()
        break;
      case 4:
        password += getRandomSpecialCharacter()
        break;
    }
    
    newPassword.value = password
  }
}

function getRandomLowercaseLetter() {
  return getRandomCharacterFromString(lowercaseAlphabet);
}

function getRandomUppercaseLetter() {
  return getRandomCharacterFromString(uppercaseAlphabet);
}

function getRandomNumber() {
  return String(Math.floor(Math.random() * 10 + 0)); 
}

function getRandomSpecialCharacter() {
  return String(getRandomCharacterFromString(specialCharacters));
}

function getRandomCharacterFromString(str) {
  let max = str.length
  let min = 1
  const index = Math.floor(Math.random() * (max - min + 1) +1);
  return str[index];
}

function randomCharacter(){
    let max = 4
    let min = 1
    return Math.floor(Math.random() * (max - min + 1) +1)
}
 */
