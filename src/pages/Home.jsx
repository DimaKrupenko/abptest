import { API } from '../services/api'
import { useState, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";

const Home = () => {
    const [search, setSearch] = useState('')
    const [vinLists, setVinLists] = useState('')
    // const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();

    const onChange = (evt) => {
        setSearch(evt.target.value)
    }

    const searchVin = async () => {
        try {
            API.resetQuery()
            API.setQuery(search)
            const vin = await API.searchVin()
            setVinLists(vin)

        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (vinLists.length > 0) {
            navigateToVariablesPage();
        }
    }, [vinLists]);

    const navigateToVariablesPage = () => {
        navigate("variables", { state: { vinLists: vinLists } });
    }

    const isDataAvailable = search.length > 0;

    return (
        <div  >
            <input type="text" onChange={onChange} />
            {isDataAvailable ? <button onClick={searchVin}>Seacrh</button>
                : <button disabled>Search</button>}
        </div >)
}

export default Home