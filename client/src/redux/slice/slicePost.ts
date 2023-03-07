

import {createSlice} from '@reduxjs/toolkit'

const initialState={ 
      listPost: [],
      loading: false,
}

export const slicePost = createSlice({
       name: "Post",
       initialState,
       reducers: {
         setgetAllPost: (state , actions) => {
                state.listPost = actions.payload.list;      
         },
         resetState: (state) => {
            state = initialState;
         }
       }
})

export const { setgetAllPost  , resetState} = slicePost.actions;

export default slicePost.reducer;