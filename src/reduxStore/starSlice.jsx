import { createSlice } from "@reduxjs/toolkit";

const starSlice=createSlice({
    name:"star",
    initialState:{
        starredAnime:[],
    },
    reducers:{
        addStar:(state,action)=>{
            const anime=action.payload;
            if(!state.starredAnime.some((item)=>item.mal_id===anime.mal_id)){
                state.starredAnime.push(anime);
            }
        },
        removeStar:(state,action)=>{
            const animeid=action.payload;
            state.starredAnime=state.starredAnime.filter((item)=>item.mal_id!==animeid)
        },
    },
});

export const {addStar, removeStar} = starSlice.actions;
export default starSlice.reducer;