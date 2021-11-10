

// const upperCase = [length >= 1]
// const lowerCase = [length >= 1]
// const number = [length >= 1]
// const character = [length >= 1]

const validatePassword = (password) => {
  var upperCase = /[A-Z]/g
  var lowerCase = /[a-z]/g
  var characters = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/

  if (password < upperCase) {
    return true
  }
  if (password < lowerCase) {
    return true
  }
  if (password.length <= 8) {
    return false
  }
  if (password < characters) {
    return true
  }
  else {
    return false
  }
}

module.exports = validatePassword
