import {useDispatch, useSelector} from 'react-redux';
import {
	updateStatus,
	updateDateStart,
	updateDateEnd,
	updateUser
} from "../../store/expertises/expertisesSlice";
import {api} from "../../utils/api";
import {useToken} from "../users/useToken";

export function useExpertises() {
	const status = useSelector(state => state.expertises.status)
	const date_start = useSelector(state => state.expertises.date_start)
	const date_end = useSelector(state => state.expertises.date_end)
	const user = useSelector(state => state.expertises.user)

	const dispatch = useDispatch()

	const {access_token} = useToken()

	const setStatus = (value) => {
		dispatch(updateStatus(value))
	}

	const setDateStart = (value) => {
		dispatch(updateDateStart(value))
	}

	const setDateEnd = (value) => {
		dispatch(updateDateEnd(value))
	}

	const setUser = (value) => {
		dispatch(updateUser(value))
	}

	const searchExpertises = async () => {

		const {data} = await api.get(`expertises/`, {
			params: {
				status: status,
				date_start: new Date(date_start),
				date_end: new Date(date_end)
			},
			headers: {
				'authorization': access_token
			}
		})

		return data.filter(expertise => expertise.owner.name.includes(user))

	}

	return {
		status,
		date_start,
		date_end,
		setStatus,
		searchExpertises,
		setDateStart,
		setDateEnd,
		setUser
	};
}