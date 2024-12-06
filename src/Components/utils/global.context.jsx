import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { reducer } from "../../reducers/reducer";

const localStorageFavs = JSON.parse(localStorage.getItem("favs")) || [];

export const initialState = { theme: true, data: [], favs: localStorageFavs };

const DoctorStates = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    axios(url).then((res) => {
      dispatch({ type: "GET_DOCTORS", payload: res.data });
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  return (
    <DoctorStates.Provider value={{ state, dispatch }}>
      {children}
    </DoctorStates.Provider>
  );
};

export default ContextProvider;

export const useDoctorStates = () => useContext(DoctorStates);
