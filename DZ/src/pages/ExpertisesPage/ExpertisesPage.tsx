import ExpertisesTable from "./ExpertisesTable/ExpertisesTable";
import {useAuth} from "../../hooks/users/useAuth";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom"

const ExpertisesPage = () => {    

    const {is_authenticated} = useAuth()

    const navigate = useNavigate()

    useEffect(() => {
        if (!is_authenticated) {
            navigate("/pictures")
        }
    }, [])

    return (
        <div>
            <ExpertisesTable />
        </div>
    )
}

export default ExpertisesPage;

