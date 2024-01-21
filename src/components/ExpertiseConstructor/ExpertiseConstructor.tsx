import "./ExpertiseConstructor.sass"
import {useExpertise} from "../../hooks/expertises/useExpertise";
import {Link} from "react-router-dom";

const ExpertiseConstructor = () => {

    const {expertise} = useExpertise()
    if (expertise == undefined || expertise.pictures.length == 0) {
        return (
            <div className="constructor-container disabled">
                <span className="title">Корзина пустая</span>
            </div>
        )
    }

    return (
        <Link to={`/expertises/${expertise.id}`} className="constructor-container">
            <span className="title"><p> Корзина &nbsp; </p> </span>
            {expertise.pictures.length > 0 && <span className="badge"></span>}
        </Link>
    )
}

export default ExpertiseConstructor