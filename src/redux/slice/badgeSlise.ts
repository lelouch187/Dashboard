import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

const initialState: string[] = []

const badgesSlise = createSlice({
    name:'badge',
    initialState,
    reducers:{
        clearAll:()=>{
           return initialState
        },
        addBadge:(state, {payload}:PayloadAction<string>)=>{
            if(!state.find(badge=>badge===payload)){
                state.push(payload)
            }
        },
        removeBadge:(state,{payload}:PayloadAction<string>)=>{          
           return state.filter(badge=>badge!==payload)
        },
        
    }
})
export const selectBadge = (state:RootState)=>state.badge

export const {clearAll, addBadge, removeBadge} = badgesSlise.actions
export default badgesSlise.reducer