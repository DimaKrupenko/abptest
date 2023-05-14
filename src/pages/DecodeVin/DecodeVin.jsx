import { useLocation } from "react-router-dom";
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
            <ul>
                {render && render.map(list => (
                    <li key={list.VariableId} className={styles.decode__list}>
                        {list.Variable}: {list.Value ? list.Value : 'no information'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DecodeVin;






