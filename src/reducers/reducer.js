import { types } from "../types/types";

const initialState = {
    tareas: [],
}
export const tareasReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.crear:
            return {
                ...state, tareas: [...state.tareas, action.payload]
            }
                ;
        case types.editar:
            return {
                tareas: state.tareas.filter(tarea => tarea.id != action.payload)
            }
                ;
        default:
            return state
    }
}