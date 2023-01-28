import axios from "axios";

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("auth/login", userCredentials);
    // console.log(res.data)  
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

  } catch (err) {
    // console.log(errd)
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
