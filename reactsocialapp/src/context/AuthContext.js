import { createContext, useEffect, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";
const initialState = {
  // user: {
  //   _id: "63b8d3f3e4031b95719ef44c",
  //   username: "yashwant",
  //   email: "hellojiji@gmail.com",
  //   profilePicture: "person/2.jpg",
  //   coverPicture: "person/4.jpg",
  //   followers: [
  //     "63b8d709ce29bb1d44c30470",
  //     "63b8d7c4ab27bfb8cec1c2fc",
  //     "63b8d8c991c558bf03cc56ae",
  //     "63c3f0acf357bd116b4a94ec",
  //   ],
  //   followings: [
  //     "63b8d709ce29bb1d44c30470",
  //     "63b8d7c4ab27bfb8cec1c2fc",
  //     "63b8d8c991c558bf03cc56ae",
  //   ],
  // },
  // user:{
  //   _id: "63b8d709ce29bb1d44c30470",
  //   username: "harry",
  //   email: "harry1@gmail.com",
  //   profilePicture: "person/2.jpg",
  //   coverPicture: "person/2.jpg",
  //   followers: [
  //     "63b8d3f3e4031b95719ef44c",
  //     "63b8d8c991c558bf03cc56ae",
  //     "63c3f0acf357bd116b4a94ec"
  //   ],
  //   followings: [
  //     "63b8d3f3e4031b95719ef44c",
  //     "63b8d8c991c558bf03cc56ae",
  //     "63b8d7c4ab27bfb8cec1c2fc",
  //     "63b8d9572a4855072e4f1bc0"
  //   ],
  //      desc: "i am harry. Mssg from harry",
  //   city: "france",
  //   from: "india",
  //   relationship: 2
  // },
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  // console.log(initialState.isFetching);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
