import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './decodevin.module.css'




const DecodeVin = () => {
    const [render, setRender] = useState('')

    // const [searchParams, setSearchParams] = useSearchParams();


    // console.log(searchParams)
    const location = useLocation();
    const vinLists = location.state?.vinLists;
    const search = location.state?.search;


    useEffect(() => {
        setRender(vinLists)
        // setSearchParams({ filter: search })

        // console.log(search)
    }, [vinLists])

    console.log(search)
    // setSearchParams({ filter: search })



    return (
        <div>
            <h1>VIN data</h1>
            <Link to={'/'}>Back</Link>
            <ul>
                {render && render.map(list => (
                    <li key={list.VariableId} className={styles.decode__list}>
                        <Link to={`${list.VariableId}`} state={{ from: location }} >
                            {list.Variable}: {list.Value ? list.Value : 'no information'}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DecodeVin;






