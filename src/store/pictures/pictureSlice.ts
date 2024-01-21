import {createSlice} from "@reduxjs/toolkit"

const initialState = {
	picture: undefined,
};

const pictureSlice = createSlice({
	name: 'picture',
	initialState: initialState,
	reducers: {
		updatePicture(state, action) {
			state.picture = action.payload
		},
		updateName(state, action) {
			state.picture.name = action.payload
		},
		updateDescription(state, action) {
			state.picture.description = action.payload
		},
		updatePrice(state, action) {
			state.picture.price = action.payload
		},
		updateImage(state, action) {
			state.picture.image = action.payload
		}
	}
})

export const {
	updatePicture,
	updateName,
	updateDescription,
	updatePrice,
	updateImage
} = pictureSlice.actions;

export default pictureSlice.reducer;