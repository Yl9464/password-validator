const string = ''
const specialChars = '!@#$%^&*()'

console.log('Example is: ', string)

const validatePassword = (password) => {
  if (password.length < 8) return false

  let passArray = password.split('')

  let hasNumber = false
  let hasSpecial = false
  let hasUpper = false
  let hasLower = false

  console.log('staring the loop')
  for (let i = 0; i < passArray.length; i++) {
    const char = passArray[i]

    if (checkNumber(char)) {
      hasNumber = true
      continue
    }

    if (checkSpecial(char)) {
      hasSpecial = true
      continue
    }

    if (checkUpperCase(char)) {
      hasUpper = true
      continue
    }

    if (checkLowerCase(char)) {
      hasLower = true
      continue
    }
  }

  return ((hasNumber) && (hasSpecial) && (hasUpper) && (hasLower))
}


const checkNumber = (letter) => {
  return !isNaN(letter)
}

const checkUpperCase = (letter) => {
  return letter === letter.toUpperCase()
}

const checkLowerCase = (letter) => {
  return letter === letter.toLowerCase()
}

const checkSpecial = (letter) => {
  for (let i = 0; i < specialChars.length; i++) {
    const specialChar = specialChars[i]

    if (specialChar === letter) return true
  }

  return false
}



console.log('Is Number:', checkNumber(string))
console.log('Is UpperCase:', checkUpperCase(string))
console.log('Is Lowercase:', checkLowerCase(string))
console.log('Is SpecialChar:', checkSpecial(string))


module.exports = validatePassword



