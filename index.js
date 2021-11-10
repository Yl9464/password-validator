

// const upperCase = [length >= 1]
// const lowerCase = [length >= 1]
// const number = [length >= 1]
// const character = [length >= 1]

const validatePassword = (password) => {
  var upperCase = /[A-Z]/g
  var lowerCase = /[a-z]/g
  var characters = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  if (password > ((numbers, upperCase, lowerCase, characters) + 1)) {
    return false
  }
  else {
    return true
  }
}

module.exports = validatePassword
