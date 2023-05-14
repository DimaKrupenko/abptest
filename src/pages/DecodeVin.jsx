import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";


const DecodeVin = () => {
    const [render, setRender] = useState('')

    const location = useLocation();
    const vinLists = location.state?.vinLists;

    useEffect(() => {
        setRender(vinLists)
    }, [vinLists])

    return (
        <div>
            <h1>LIST</h1>
            <ul>
                {render && render.map(list => (
                    <li key={list.VariableId}>
                        {list.Variable}: {list.Value ? list.Value : 'no information'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DecodeVin;






