// import { createStore } from 'redux'
import { requestAll, requestData } from '../axios'

const initialState = {}
const SIGNUP_USER = 'SIGNUP_USER'
const LOGIN_USER = 'LOGIN_USER'
const CHECK_ID = 'CHECK_ID'
const USER_INFO = 'USER_INFO'

export const signupUser = (input) => {
  const response = requestData("post", '/user', input)
  console.log('호출!!!', response)
  return {
    type: SIGNUP_USER,
    payload: response,
  }
}

export const loginUser = (input) => {
  const response = requestAll("post", '/login', input)
  console.log('호출!!!', response)
  return {
    type: LOGIN_USER,
    payload: response,
  }
}

export const checkUserId = (id, input) => {
  const response = requestData("get", `/user?userId=${id}`, input)
  console.log('호출!!!', response)
  return {
    type: CHECK_ID,
    payload: response,
  }
}

export const getUserInfo = (id, input) => {
  const headers = {
    'access-token': input.accessToken,
    'refresh-token': input.refreshToken
  }
  console.log('headers', input)
  const response = requestAll("get", `/api/user?userId=${id}`, input, headers)
  return {
    type: USER_INFO,
    payload: response,
  }
}

// 좀 더 직관적으로 이해하기 위해 우선 createReducer를 사용하지 않는다.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return { ...state, success: action.payload }
    case LOGIN_USER:
      return { ...state}
    case CHECK_ID:
      return { ...state, success: action.payload }
    case USER_INFO:
      return { ...state}
    default:
      return state
  }
}



// const store = createStore(reducer)

// store.subscribe()

export default reducer