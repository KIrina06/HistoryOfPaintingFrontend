import {configureStore} from "@reduxjs/toolkit";

import pictureReducer from "./pictures/pictureSlice"
import draftExpertiseReducer from "./expertises/expertiseSlice"
import authReducer from "./users/authSlice"
import expertisesReducer from "./expertises/expertisesSlice"
import picturesReducer  from "./pictures/picturesSlice"

export default configureStore({
	reducer: {
		audience: pictureReducer,
		audiences: picturesReducer,
		booking: draftExpertiseReducer,
		bookings: expertisesReducer,
		user: authReducer
	}
});