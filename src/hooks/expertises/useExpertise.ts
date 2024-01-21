import {useDispatch, useSelector} from 'react-redux';
import {
	updateExpertise
} from "../../store/expertises/expertiseSlice";
import {useToken} from "../users/useToken";
import {api} from "../../utils/api";
import axios from 'axios';

export function useExpertise() {

	const {access_token} = useToken()
// смотрит состояние букинга
	const expertise = useSelector(state => state.expertise.expertise)

	const is_draft = expertise?.status == 1
	// вызывает функции
	const dispatch = useDispatch()
	// изменение состояния внутри
	const setExpertise = (value) => {
		dispatch(updateExpertise(value))
	}

	const sendExpertise = async () => {

		const response = await api.put(`expertises/${expertise.id}/update_status_user/`, {}, {

			headers: {
				'authorization': access_token
			}
		})
		await axios.post('http://localhost:8080/check/', {'expertise_id':expertise.id}) 
		if (response.status == 200)
		{
			setExpertise(undefined)
		}
	}

	const deleteExpertise = async () => {

		const response = await api.delete(`expertises/${expertise.id}/delete/`, {
			headers: {
				'authorization': access_token
			}
		})

		if (response.status == 200)
		{
			setExpertise(undefined)
		}

	}

	const saveExpertise = async () => {

		await api.put(`expertises/${expertise.id}/update/`, {}, {
			headers: {
				'authorization': access_token
			}
		})

	}

	const fetchExpertise = async (expertise_id) => {

		const {data} = await api.get(`expertises/${expertise_id}/`, {
			headers: {
				'authorization': access_token
			},
		})

		setExpertise(data)
	}


	const addPictureToExpertise = async (picture) => {

		const response = await api.post(`pictures/${picture.id}/add_to_expertise/`, {}, {
			headers: {
				'authorization': access_token
			},
		});

		if (response.status == 200) {
			setExpertise(response.data)
		}
	}

	const deletePictureFromExpertise = async (picture) => {
		const response = await api.delete(`expertises/${expertise.id}/delete_picture/${picture.id}/`, {
			headers: {
				'authorization': access_token
			},
		});

		if (response.status == 200) {
			setExpertise(response.data)
		}
	}

	return {
		expertise,
		is_draft,
		setExpertise,
		saveExpertise,
		sendExpertise,
		deleteExpertise,
		fetchExpertise,
		addPictureToExpertise,
		deletePictureFromExpertise
	};
}