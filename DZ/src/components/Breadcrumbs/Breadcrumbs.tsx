import "./Breadcrumbs.sass"
import { Link, useLocation } from "react-router-dom";
import {FaChevronRight} from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import {FaHome} from "react-icons/fa";
import { RiRectangleLine } from "react-icons/ri";
import {usePicture} from "../../hooks/pictures/usePicture";
import {useExpertise} from "../../hooks/expertises/useExpertise";
import expertiseSlice from "../../store/expertises/expertiseSlice";

const Breadcrumbs = () => {

    const location = useLocation()

    const {picture, setPicture} = usePicture()

    const { expertise, is_draft } = useExpertise()

    let currentLink = ''

    const resetSelectedPicture = () => setPicture(undefined)

    const topics = {
        "pictures": "Картины",
        "expertises": "Экспертиза",
        "home": "Главная",
        "login": "Вход",
        "register": "Регистрация",
        "profile": "Личный кабинет"
    }

    const exclude_topics = ["edit"]

    const crumbs = location.pathname.split('/').filter(crumb => crumb !== '').map(crumb => {

        currentLink += `/${crumb}`

        if (exclude_topics.find(x => x == crumb)) {
            return
        }

        if (Object.keys(topics).find(x => x == crumb)) {
            return (
                <div className={"crumb"} key={crumb}>

                    <Link to={currentLink} onClick={resetSelectedPicture}>
                        { topics[crumb] }
                    </Link>

                    <IoIosArrowRoundForward className={"chevron-icon"}/>

                </div>
            )
        }

        if (currentLink.match(new RegExp('add')))
        {
            return (
                <div className={"crumb"} key={crumb}>

                    <Link to={currentLink}>
                        Новая картина
                    </Link>

                    <IoIosArrowRoundForward className={"chevron-icon"}/>

                </div>
            )
        }


        if (currentLink.match(new RegExp('expertises/(\d*)')))
        {
            return (
                <div className={"crumb"} key={crumb}>

                    <Link to={currentLink}>
                        {is_draft ? "Новая экспертиза" : "Экспертиза №: " + expertise?.id}
                    </Link>

                    <IoIosArrowRoundForward className={"chevron-icon"}/>

                </div>
            )
        }

        if (currentLink.match(new RegExp('pictures/(\d*)')))
        {
            return (
                <div className={"crumb"} key={crumb}>

                    <Link to={currentLink}>
                        {picture?.name}
                    </Link>

                    <IoIosArrowRoundForward className={"chevron-icon"}/>

                </div>
            )
        }
    });

    return (
        <div className="breadcrumbs-wrapper">
            <div className="breadcrumbs">

                <div className="crumb">

                    <Link to={"/pictures"}>
                        
                    <Link to={currentLink}>
                        <b>Главная</b> 
                    </Link>
                    </Link>

                    <IoIosArrowRoundForward className="chevron-icon" />

                </div>

                {crumbs}

            </div>
        </div>
    )
}

export default Breadcrumbs;