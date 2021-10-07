// import { createStore } from 'redux'
import { requestAll, requestData } from '../axios'
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';



const initialState = {
  userid: '',
  name: '',
  nickname: '',
  email: '',
  tel: '',
  isUpdate: false,
}

const SIGNUP_USER = 'SIGNUP_USER'
const LOGIN_USER = 'LOGIN_USER'
const CHECK_ID = 'CHECK_ID'
const USER_INFO = 'USER_INFO'
const UPDATE_USER_INFO = 'UPDATE_USER_INFO'
const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
const DELETE_USER = 'DELETE_USER'
const USER_GAMESTAGE = 'USER_GAMESTAGE'
const UPDATE_GAMESTAGE = 'UPDATE_GAMESTAGE'
const USER_GAME_INFO = 'USER_GAME_INFO'

// 회원가입 기능 API
export const signupUser = (input) => {
  const response = requestData("post", '/user', input)
  return {
    type: SIGNUP_USER,
    payload: response,
  }
}


// 로그인 기능 API
export const loginUser = (input) => {
  const response = requestAll("post", '/login', input)
  return {
    type: LOGIN_USER,
    payload: response,
  }
}

export const checkUserId = (id, input) => {
  const response = requestData("get", `/user?userId=${id}`, input)
  return {
    type: CHECK_ID,
    payload: response,
  }
}


// 마이페이지 관련 API
export const getUserInfo = (id, input) => {
  const headers = {
    'access-token': input.accessToken,
    'refresh-token': input.refreshToken
  }
  const response = requestAll("get", `/api/user?userId=${id}`, input, headers)
  return {
    type: USER_INFO,
    payload: response,
  }
}

export const deleteUser = (id, input) => {
  const headers = {
    'access-token': input.accessToken,
    'refresh-token': input.refreshToken
  }
  const response = requestData("delete", `/api/user/${id}`, input, headers)
  return {
    type: DELETE_USER,
    payload: response,
  }
}

export const updateUserInfo = (input) => {
  const headers = {
    'access-token': input.accessToken,
    'refresh-token': input.refreshToken
  }
  const body = {
    userId: input.userId,
    userNickName: input.userNickName,
    userTel: input.userTel,
    userEmail: input.userEmail,
  }
  const response = requestData("put", `/api/user`, body, headers)
  return {
    type: UPDATE_USER_INFO,
    payload: response,
  }
}

export const updatePassword = (input) => {
  const headers = {
    'access-token': input.accessToken,
    'refresh-token': input.refreshToken
  }
  const body = {
    userId: input.userId,
    password: input.newPassword,
  }
  const response = requestData("put", `/api/user/password`, body, headers)
  return {
    type: UPDATE_PASSWORD,
    payload: response,
  }
}

export const getUserGameInfo = (id, input) => {
  const headers = {
    'access-token': input.accessToken,
    'refresh-token': input.refreshToken
  }
  const response = requestData("get", `/api/stage/stageList?userId=${id}`, input, headers)
  return {
    type: USER_GAME_INFO,
    payload: response,
  }
}

// 게임 연결 API
export const getUserStage = (id, gameId, input) => {
  const headers = {
    'access-token': input.accessToken,
    'refresh-token': input.refreshToken
  }
  const response = requestAll("get", `/api/stage?userId=${id}&gameCode=${gameId}`, input, headers)
  return {
    type: USER_GAMESTAGE,
    payload: response,
  }
}


export const updateUserStage = (input) => {
  const headers = {
    'access-token': input.accessToken,
    'refresh-token': input.refreshToken
  }
  const body = {
    stageId: input.stageId,
    userId: input.userId,
    gameCode: input.gameCode,
    curStage: input.curStage + 1,
  }
  const response = requestData("put", `/api/stage`, body, headers)
  return {
    type: UPDATE_GAMESTAGE,
    payload: response,
  }
}


// 좀 더 직관적으로 이해하기 위해 우선 createReducer를 사용하지 않는다.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return { ...state, success: action.payload }
    case LOGIN_USER:
      return {
        ...state,
        userid: action.payload.data.userId,
        name: action.payload.data.userName
      }
    case CHECK_ID:
      return { ...state, success: action.payload }
    case USER_INFO:
      return { ...state }
    case UPDATE_USER_INFO:
      return { ...state, success: action.payload }
    case UPDATE_PASSWORD:
      return { ...state, success: action.payload }
    case DELETE_USER:
      return { state: initialState, success: action.payload }
    case USER_GAME_INFO:
      return { ...state, success: action.payload }
    case "LOGOUT":
      return { state: initialState }
    case "UPDATE_MYPAGE":
      return {
        ...state,
        nickname: action.payload.userNickName,
        email: action.payload.userEmail,
        tel: action.payload.userTel,
        isUpdate: true
      }
    case USER_GAMESTAGE:
      return { ...state }
    case UPDATE_GAMESTAGE:
      return { ...state, success: action.payload }
    default:
      return state
  }
}

const persistConfig = {
  key: 'root',
  storage: storageSession,
}

const persistedReducer = persistReducer(persistConfig, reducer);


// const store = createStore(reducer)

// store.subscribe()

// export default reducer
export default persistedReducer