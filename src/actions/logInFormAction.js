import { setCurrentUser } from './currentUserAction'



export const updateLogInForm = (formData) => {
  return {
    type: 'UPDATE_LOGIN_FORM',
    formData
  }
}

export const resetLogInForm = () => {
  return {
    type: 'RESET_LOGIN_FORM',

  }
}
export const login = (credentials) => {
  console.log(credentials)
  return dispatch => {
    return fetch("ttps://fast-waters-11750.herokuapp.com/login", {
      credentials: "include",
      method: "POST",
        headers: {
          'Access-Control-Allow-Origin': 'https://unruffled-babbage-7875d2.netlify.com',
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
      .then(resp => resp.json())

      .then(resp => {

        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(setCurrentUser(resp))
          dispatch(resetLogInForm())
          // dispatch(getMyPets())


        }
      })
      .catch(console.log)
  }
}
