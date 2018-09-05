import { todosRef, UsuariosRef} from "../config/firebase.jsx";
import { FETCH_TODOS, FETCH_USUARIOS} from "./types.jsx";



export const addToDo = newToDo => async dispatch => {
  todosRef.push().set(newToDo);
};

export const completeToDo = completeToDoId => async dispatch => {
  todosRef.child(completeToDoId).remove();
};

export const fetchToDos = () => async dispatch => {
  todosRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};



export const addUsuario = newUsuario => async dispatch => {
  UsuariosRef.push().set(newUsuario);
};

export const removeUsuario = completeUsuarioId => async dispatch => {
  UsuariosRef.child(completeUsuarioId).remove();
};

export const fetchUsuario = () => async dispatch => {
  UsuariosRef.on("value", snapshot => {
    dispatch({
      type: FETCH_USUARIOS,
      payload: snapshot.val()
    });
  });
};


