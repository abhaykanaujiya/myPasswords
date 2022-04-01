import {GET_AUTH_DETAILS} from "../constans/Types"
export const handleAuth = (usersDetails) => {
  console.log(usersDetails,"userDetails");
  return (dispatch) => {
    dispatch({type:GET_AUTH_DETAILS,payload:usersDetails})
  }
}