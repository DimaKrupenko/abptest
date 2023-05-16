import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './decodevin.module.css'


const DecodeVin = () => {
    const [render, setRender] = useState('')


    const location = useLocation();
    const vinLists = location.state?.vinLists;

    useEffect(() => {
        setRender(vinLists)

    }, [vinLists])

    return (
        <div>
            <h1>VIN data</h1>
            <Link to={'/'}>Back</Link>
            <ul>
                {render && render.map(({ VariableId, Variable, Value }) => (
                    <li key={VariableId} className={styles.decode__list}>
                        <Link to={`${VariableId}`} state={{ from: location }} >
                            {Variable}: {Value ? Value : 'no information'}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DecodeVin;






