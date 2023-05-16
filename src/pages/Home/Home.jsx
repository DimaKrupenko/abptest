import { API } from '../../services/api';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from './home.module.css';
import Notiflix from 'notiflix';
import { retrieveRecentSearches, saveRecentSearches, retrieveResultSearches, saveResultSearches } from './localStoradge'

const Home = () => {
    const [search, setSearch] = useState('');
    const [vinLists, setVinLists] = useState('');

    const navigate = useNavigate();



    const onChange = (evt) => {
        setSearch(evt.target.value);
    };

    const searchVin = async () => {
        try {
            API.resetQuery();
            API.setQuery(search);
            const vin = await API.searchVin();
            setVinLists(vin);
            saveRecentSearches(search);
            saveResultSearches(vin)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (vinLists.length > 0) {
            navigateToVariablesPage();
        }
    },);

    const navigateToVariablesPage = () => {
        navigate("variables", { state: { vinLists: vinLists } });
    };

    const isInputValid = () => {
        if (search.length > 17) {
            return false;
        }
        const forbiddenChars = ["!", "@", "#", "$", "%"];
        if (forbiddenChars.some((char) => search.includes(char))) {
            return false;
        }
        return true;
    };

    const handleSearch = () => {
        if (isInputValid()) {
            searchVin();
        } else {
            Notiflix.Notify.failure('Invalid number or prohibited characters');
        }
    };

    const recentSearches = retrieveRecentSearches();
    const recentResult = retrieveResultSearches()
    return (
        <div>
            <input type="text" onChange={onChange} className={styles.input} />
            {search.length > 0 ? (
                <button onClick={handleSearch}>Search</button>
            ) : (
                <button disabled>Search</button>
            )}

            <h2 className={styles.title__home}>Recent searches</h2>
            {recentSearches.length > 0 && (
                <ul className={styles.recentSearches}>
                    {recentSearches.map((item, index) => (

                        <li key={index}>
                            {index + 1} - {item}
                        </li>

                    ))}
                </ul>
            )}
            <h2 className={styles.title__home}>Description of recent search results</h2>
            {recentResult.map((nestedArray, index) => (
                <div key={index} className={styles.conteiner__resultSearches}>
                    <ul className={styles.resultSearches}>
                        {nestedArray.map(({ Variable, Value }, innerIndex) => (
                            <li key={innerIndex}>
                                {Value !== null
                                    && <div>
                                        {index + 1}:
                                        <p>Variable: {Variable}</p>
                                        <p>Value: {Value}</p>
                                    </div>
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

        </div>
    );
};

export default Home;
