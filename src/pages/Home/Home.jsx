import { API } from '../../services/api'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from './home.module.css'
import Notiflix from 'notiflix';


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
    },);

    const navigateToVariablesPage = () => {
        navigate("variables", { state: { vinLists: vinLists } });
    }

    const isInputValid = () => {
        if (search.length > 17) {
            return false
        }
        const forbiddenChars = ["!", "@", "#", "$", "%"];
        if (forbiddenChars.some(char => search.includes(char))) {
            return false;
        }

        return true;
    }

    const handleSearch = () => {
        if (isInputValid()) {
            searchVin();
        } else {
            Notiflix.Notify.failure('Invalid number or prohibited characters')
        }
    }

    const isDataAvailable = search.length > 0;

    return (
        <div>
            <input type="text" onChange={onChange} className={styles.input} />
            {isDataAvailable ? <button onClick={handleSearch}>Seacrh</button>
                : <button disabled>Search</button>}
        </div >)
}

export default Home