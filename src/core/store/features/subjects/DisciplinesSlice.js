import {createSlice} from "@reduxjs/toolkit";

const initialState = {disciplines:['html', 'javascript', 'python']};
// const disciplinesSlise = {
//     disciplines: ['html', 'javascript', 'python'], // [item1, item2, item3]
//     // countDisciplines: 0,
//
// };


export const DisciplinesSlice = createSlice(
    {
        name: "disciplines",
        initialState,
        reducers: {
            addDisciplines: (state, action) =>{
                state.disciplines.push(action.payload)
            },
            delDisciplines: (state, action) =>{
                state.disciplines = state.disciplines.filter(el => el !== action.payload)
            },
        }
    }
)
export const {addDisciplines, delDisciplines } = DisciplinesSlice.actions

export default DisciplinesSlice.reducer