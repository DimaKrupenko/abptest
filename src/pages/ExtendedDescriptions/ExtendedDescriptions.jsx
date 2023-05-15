import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../../services/api'
import styles from './extendedDescriptions.module.css'



const ExtendedDescriptions = () => {
    // const [variableId, setVariableId] = useState('');
    const [description, setDescription] = useState([]);
    // const location = useLocation()

    const { variableId } = useParams();

    useEffect(() => {
        const getDescription = async () => {
            try {
                // setVariableId(Id);
                const data = await API.getVehicleVeriablesList();
                setDescription(data);
            } catch (error) {
                console.log(error);
            }
        };
        getDescription();
    }, [variableId]);

    // const descId = description.map(desc => desc.ID);
    const filteredDescriptions = description.filter(disc => disc.ID == variableId);

    // console.log(location.state?.from.state.vinLists
    // )

    return (
        <div>
            {/* <Link to={location.state?.from ?? '/'}>Go back</Link> */}
            <ul className={styles.disc}>
                {filteredDescriptions.map(disc => (
                    <li key={disc.ID} className={styles.disc__list}>
                        <p className={styles.disc__text}>Name: {disc.Name ? disc.Name : 'no information'}</p>
                        <p className={styles.disc__text}>Group Name: {disc.GroupName ? disc.GroupName : 'no information'}</p>
                        <p className={styles.disc__text}>Description: {disc.Description ? disc.Description : 'no information'}</p>
                    </li>
                ))}


            </ul>
        </div>
    )
}

export default ExtendedDescriptions;