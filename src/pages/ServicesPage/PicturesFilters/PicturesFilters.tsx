import "./PicturesFilters.sass"
import SearchBar from "../../../components/SearchBar/SearchBar";
import {usePictures} from "../../../hooks/pictures/usePictures";
import {useAuth} from "../../../hooks/users/useAuth";
import LinkButton from "../../../components/LinkButton/LinkButton";
import {variables} from "../../../utils/consts";
import CustomButton from "../../../components/CustomButton/CustomButton";

const PicturesFilters = ({refetch}) => {

    const {is_moderator} = useAuth()

    const {query, setQuery} = usePictures()

    const handleSubmit = (e) => {
        e.preventDefault()
        refetch()
    }

    return (
        <div className="audiences-filters">

            <h2>Поиск картин</h2>

            <div className="right-container" >

                {is_moderator &&
                    <LinkButton to="/pictures/add" bg={variables.primary}>
                        Добавить картину
                    </LinkButton>
                }

                <form className="search-form" onSubmit={handleSubmit}>

                    <SearchBar query={query} setQuery={setQuery} placeholder={"Найдите картину"} />

                    <CustomButton bg={variables.primary} >
                        Применить
                    </CustomButton>

                </form>

            </div>
        </div>
    )
}

export default PicturesFilters