import { types } from "../types/types"

export const addTarea = (tarea) => {
    return{
        type: types.crear,
        payload: tarea
    }
}

export const endTarea = (id) => {
    return{
        type: types.editar,
        payload: id
    }
}