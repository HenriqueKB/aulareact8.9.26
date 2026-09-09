import { useEffect, useState } from 'react'
import PersonagemCard from '../components/PersonagemCard.jsx'
import api from '../utils/api.js'


const PersonagensPage = () => {
    const [personagens, setPersonagens] = useState([])
    const [page, setPage] = useState(1);

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const response = await api.get(`/character?page=${page}`)
                setPersonagens(response.data.results)
            } catch (error) {
                console.error('Error fetching data:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [page])

    return(
        <div>
            <h1>Personagens Page</h1>
            {loading && <p>Loading...</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {!loading && personagens.map((personagem) => 
                    <PersonagemCard key={personagem.id} personagem={personagem} />
                )}
            </div>
        </div>
    )
}

export default PersonagensPage;