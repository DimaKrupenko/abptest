/* eslint-disable eqeqeq */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../../services/api'
import styles from './extendedDescriptions.module.css'



const ExtendedDescriptions = () => {
    const [description, setDescription] = useState([]);

    const { variableId } = useParams();

    useEffect(() => {
        const getDescription = async () => {
            try {
                const data = await API.getVehicleVeriablesList();
                setDescription(data);
            } catch (error) {
                console.log(error);
            }
        };
        getDescription();
    }, [variableId]);

    const filteredDescriptions = description.filter(({ ID }) => ID == variableId);


    return (
        <div>
            <ul className={styles.disc}>
                {filteredDescriptions.map(({ ID, Name, GroupName, Description }) => (
                    <li key={ID} className={styles.disc__list}>
                        <p className={styles.disc__text}>Name: {Name ? Name : 'no information'}</p>
                        <p className={styles.disc__text}>Group Name: {GroupName ? GroupName : 'no information'}</p>
                        <p className={styles.disc__text}>Description: {Description ? Description : 'no information'}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ExtendedDescriptions;