import { useEffect, useState } from 'react'
import PersonagemCard from './components/PersonagemCard.jsx'
import api from '..utils/api.js'


const PersonagensPage = () => {
    const [personagens, setPersonagens] = useState([]);
    const [loading, setLoading] = usesState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
        }

        try {
            const response = await api.get("/character");
            setPersonagens(response.data.results);
        } catch (error) {
            console.error("Error fetching data: ", error)

        } finally { 
            setLoading(false)
        };

        fetchData();
    }, []);



    };






export default PersonagensPage;