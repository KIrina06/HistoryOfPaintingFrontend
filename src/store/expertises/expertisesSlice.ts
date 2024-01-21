import {createSlice} from "@reduxjs/toolkit"

const initialState= {
	status: -1,
	date_start: "2024-01-14",
	date_end: "2024-01-15",
	user: ""
};

const expertisesSlice = createSlice({
	name: 'expertises',
	initialState: initialState,
	reducers: {
		updateStatus(state, action) {
			state.status = action.payload
		},
		updateDateStart(state, action) {
			state.date_start = action.payload
		},
		updateDateEnd(state, action) {
			state.date_end = action.payload
		},
		updateUser(state, action) {
			state.user = action.payload
		}
	}
})

export const {updateStatus, updateDateStart, updateDateEnd, updateUser} = expertisesSlice.actions;

export default expertisesSlice.reducer;