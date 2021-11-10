var upperCase = /[A-Z]/g
var lowerCase = /[a-z]/g
var characters = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// var password = []
// var accept = [upperCase, lowerCase, characters, numbers]
// var valid = [/[A-Z]/g, /[a-z]/g, /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]]


const validatePassword = (password) => {
  if (password.length !== 8) {
    return false
  }
  if (password !== ((upperCase <= 1) && (lowerCase <= 1))) {
    return false
  }
  if (password !== ((characters <= 1) && (numbers <= 1))) {
    return false
  }
  else {
    return true
  }
}


module.exports = validatePassword
