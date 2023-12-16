import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    project: localStorage.getItem('project')||{},
}
const ProjectSlice = createSlice({
    name:"project",
    initialState,
    reducers:{
        setCurrentProject:(state,action)=>{
            state.project=action.payload
        },
        resetCurrentProject:(state)=>{
            state.project=null;
        }
    }
})

export const {setCurrentProject,resetCurrentProject} = ProjectSlice.actions
const projectReducer=ProjectSlice.reducer
export default projectReducer