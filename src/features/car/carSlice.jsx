import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: ["Model S", "Model Y", "Model 3", "Model X"],
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {
        // addCar: (state, action) => {
        //     state.cars.push(action.payload)
        // },
        // removeCar: (state, action) => {
        //     state.cars.splice(action.payload, 1)
        // },
        
    },
})

export const selectCars = (state) => state.car.cars

export default carSlice.reducer