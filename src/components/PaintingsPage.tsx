import {useState, useEffect} from 'react'
import {
    PaintingsResult,
    GetFilteredPaintings
} from '../modules/GetPaintings.js';
import SearchPaintings from './Search.tsx';
import PaintingCard from './PaintingCard.tsx';


function Paintings() {
    
    const [Painting, setPainting] = useState<PaintingsResult>({
        id: null,
        paintings:[],
    });

    const fetchData = async (tltleData: any) => {
        const data = await GetFilteredPaintings(tltleData);
        setPainting(data);
    };

    useEffect(() => {
        fetchData(tltleData);
    },[]);

    const setPaintingData = (data: any) => {
        console.log('After filtration: ', data)
        setPainting(data);
    }

    const [tltleData, setTltleData] = useState('');


    return (
        <>
            <SearchPaintings
                setPaintingData={setPaintingData}
                setTitleData={setTltleData}
            />
            <div className="container">
                {Painting.paintings.map((object) => (
                    <PaintingCard paintingData={object}/>
                ))}
            </div>
        </>
    );
};

export default Paintings;