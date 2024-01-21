import {createSlice} from "@reduxjs/toolkit"

const initialState = {
	expertise: undefined
};

const expertiseSlice = createSlice({
	name: 'expertise',
	initialState: initialState,
	reducers: {
		updateExpertise(state, action) {
			state.expertise = action.payload
		}
	}
})

export const {updateExpertise} = expertiseSlice.actions;

export default expertiseSlice.reducer;