import {useDispatch, useSelector} from 'react-redux';
import {
	updatePicture,
	updateName,
	updateDescription,
	updatePrice,
	updateImage
} from "../../store/pictures/pictureSlice";
import {api} from "../../utils/api";

export function usePicture() {
	const picture = useSelector(state => state.picture.picture);

	const dispatch = useDispatch()

	const setPicture = (value) => {
		dispatch(updatePicture(value))
	}

	const setName = (value) => {
		dispatch(updateName(value))
	}

	const setDescription = (value) => {
		dispatch(updateDescription(value))
	}

	const setPrice = (value) => {
		dispatch(updatePrice(value))
	}

	const setImage = (value) => {
		dispatch(updateImage(value))
	}

	const fetchPicture = async (id) => {

		const {data} = await api.get(`pictures/${id}/`);

		setPicture(data)

	};

	return {
		picture,
		setPicture,
		fetchPicture,
		setName,
		setDescription,
		setPrice,
		setImage
	};
}