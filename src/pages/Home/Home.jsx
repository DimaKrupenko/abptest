import { API } from '../../services/api';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from './home.module.css';
import Notiflix from 'notiflix';

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

    const retrieveRecentSearches = () => {
        const storedSearches = localStorage.getItem('recentSearches');
        return storedSearches ? JSON.parse(storedSearches) : [];
    };

    const saveRecentSearches = (searches) => {
        const recentSearches = retrieveRecentSearches();
        const updatedSearches = [search, ...recentSearches.slice(0, 4)];
        localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    };

    const retrieveResultSearches = () => {
        const storedResult = localStorage.getItem('recentResult');
        return storedResult ? JSON.parse(storedResult) : [];
    };
    const saveResultSearches = (vin) => {
        const recentResult = retrieveResultSearches();
        const updatedResult = [vin, ...recentResult.slice(0, 4)];
        localStorage.setItem('recentResult', JSON.stringify(updatedResult));
    };


    // const saveRecentSearches = (search, vin) => {
    //     const recentSearches = retrieveRecentSearches();
    //     const updatedSearches = [search, ...recentSearches.slice(0, 4)];
    //     const combinedResults = [...vin, ...updatedSearches];
    //     console.log(updatedSearches)
    //     console.log(combinedResults)

    //     localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    // };

    const recentSearches = retrieveRecentSearches();
    const recentResult = retrieveResultSearches()
    console.log(recentResult)
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
                <ul key={index} className={styles.resultSearches}>
                    {nestedArray.map((item, innerIndex) => (
                        <li key={innerIndex}>
                            {item.Value !== null
                                && <div>
                                    {index + 1} -
                                    <p>Value: {item.Value}</p>
                                    <p>Variable: {item.Variable}</p>
                                </div>
                            }
                        </li>
                    ))}
                </ul>
            ))}

        </div>
    );
};

export default Home;
