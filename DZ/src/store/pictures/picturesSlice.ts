import {createSlice} from "@reduxjs/toolkit"

const initialState = {
	pictures: [],
	query: ""
};

const picturesSlice = createSlice({
	name: 'pictures',
	initialState: initialState,
	reducers: {
		updatePictures(state, action) {
			state.pictures = action.payload
		},
		updateQuery(state, action) {
			state.query = action.payload
		}
	}
})

export const {
	updatePictures,
	updateQuery
} = picturesSlice.actions;

export default picturesSlice.reducer;