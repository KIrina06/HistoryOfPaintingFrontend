import {useDispatch, useSelector} from 'react-redux';
import {
	updatePictures,
	updateQuery
} from "../../store/pictures/picturesSlice";
import {api} from "../../utils/api";
import {useExpertise} from "../expertises/useExpertise";
import {useToken} from "../users/useToken";

export function usePictures() {
	const pictures = useSelector(state => state.pictures.pictures);
	const query = useSelector(state => state.pictures.query);

	const {access_token} = useToken()

	const {fetchExpertise} = useExpertise()

	const dispatch = useDispatch()

	const setPictures = (value) => {
		dispatch(updatePictures(value))
	}

	const setQuery = (value) => {
		dispatch(updateQuery(value))
	}

	const searchPictures = async () => {

		const {data} = await api.get(`audiences/search`, {
			params: {
				query: query
			},
			headers: {
				'authorization': access_token
			}
		})

		const draft_expertise_id = data["draft_expertise_id"]
		draft_expertise_id && fetchExpertise(draft_expertise_id)

		return data["info"]
	}

	return {
		pictures,
		setPictures,
		query,
		setQuery,
		searchPictures
	};
}