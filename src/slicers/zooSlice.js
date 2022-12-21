//imports
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAnimals, addAnimal, delAnimal, updAnimal } from './zooAPI';

//initailstate for varalbles
const initialState = {
    myZoo: [],
    updStatus:false
};

//async functions called
export const getAnimalsAsync = createAsyncThunk(
    'zoo/fetchAnimals',
    async () => {
        const response = await fetchAnimals();
        return response.data;
    }
);
export const addAnimalAsync = createAsyncThunk(
    'zoo/addAnimal',
    async (newProd) => {
        const response = await addAnimal(newProd);
        return response.data;
    }
);
export const delAnimalAsync = createAsyncThunk(
    'zoo/delAnimal',
    async (id) => {
        const response = await delAnimal(id);
        return response.data;
    }
);
export const updAnimalAsync = createAsyncThunk(
    'zoo/updAnimal',
    async (payload) => {
        console.log(payload)
        const response = await updAnimal(payload);
        return response.data;
    }
);

//create the slicer + regular functions
export const zooSlice = createSlice
({
    name: 'zoo',
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder
            .addCase(getAnimalsAsync.fulfilled, (state, action) => {
                state.myZoo = action.payload
            }).addCase(addAnimalAsync.fulfilled, (state,action) => {
                state.myZoo.push( action.payload)
                state.updStatus = !state.updStatus
            }).addCase(delAnimalAsync.fulfilled, (state,action) => {
                state.myZoo=( action.payload)
                state.updStatus = !state.updStatus
            }).addCase(updAnimalAsync.fulfilled, (state,action) => {
                state.myZoo=( action.payload)
                state.updStatus = !state.updStatus
            })
    },
});

export const selectZoo = (state) => state.zoo.myZoo;
export const selectUpdStatus = (state) => state.zoo.updStatus;
export default zooSlice.reducer;


