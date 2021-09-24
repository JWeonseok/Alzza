// Validation 체크를 위한 함수 정리
export const idValid = (input) => {
  const idValid = /^[0-9a-z]+$/
  return idValid.test(input)
}

export const onIdValidation = (input) => {
  let idError = ""
  if (!idValid(input)) {
    idError = "아이디는 영문, 숫자로만 구성"
  }
  return idError
}

export const passwordValid = (input) => {
  const passwordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  return passwordValid.test(input)
}

export const onPasswordValidation = (input) => {
  let passwordError = ""
  if (!passwordValid(input)) {
    passwordError = "비밀번호는 최소 8자리 이상이며, 영문, 숫자를 하나 이상 포함"
  }
  return passwordError
}

export const onConfirmPasswordValidation = (password, input) => {
  let confirmError = ""
  if (password !== input) {
    confirmError = "패스워드가 일치하지 않습니다!"
  }
  return confirmError
}

export const onNameValidation = (input) => {
  let nameError = ""
  if (input.length === 0) {
    nameError = "이름을 작성해주세요."
  }
  return nameError
}

export const onNicknameValidation = (input) => {
  let NicknameError = ""
  if (input.length === 0) {
    NicknameError = "닉네임을 작성해주세요."
  }
  return NicknameError
}