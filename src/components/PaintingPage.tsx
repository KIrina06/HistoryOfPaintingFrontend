import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/stylesForPaintingsPage.css";
import { GetPainting } from "../modules/GetPainting.ts";

interface Paintingint {
    id: number;
    picture: string;
    title: string;
    context: string;
    price: string;
    status: string;
}

const Painting = () => {
    const { id } = useParams(); // Получаем значение параметра :id из URL
    const PaintId = id ? parseInt(id, 10) : null; // Преобразование в число или null

    const [Paintobj, setPainting] = useState<Paintingint | null>(null);

    useEffect(() => {
        if (PaintId !== null) {
            GetPainting(PaintId)
                .then((result) => {
                    if (result.data !== null) {
                        setPainting(result.data[PaintId - 1]);
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, [PaintId]);

    if (!Paintobj) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container-1">
            <span>
                <img style={{ width: '100%', height: 'auto' }} src={Paintobj.picture} alt="" />
            </span>

            <h1 className="short_text">{Paintobj.title}</h1>

            <hr className="line" />

            <div className="container">
                <p className="info">
                {Paintobj.context}
                </p>
                <p className="info">
                Цена соразмерной копии: {Paintobj.price},00 руб.
                </p>
            </div>
        </div>
    );
};

export default Painting;