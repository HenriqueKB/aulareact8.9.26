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
                    <PersonagemCard key={personagem.id}>
                        <img
                            src={personagem.image}
                            alt={personagem.name}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <h2 className="text-xl font-bold mt-4">{personagem.name}</h2>
                        <p className="text-gray-600">Status: {personagem.status}</p>
                        <p className="text-gray-600">Espécie: {personagem.species}</p>
                        <p className="text-gray-600">Gênero: {personagem.gender}</p>
                        <p className="text-gray-600">Origem: {personagem.origin.name}</p>
                    </PersonagemCard>
                )}
            </div>
            <div className="flex justify-center mt-4">
                <button 
                    onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
                    disabled={page === 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded mr-2 disabled:bg-gray-400"
                >
                    Previous
                </button>
                <span className="px-4 py-2">{page}</span>
                <button 
                    onClick={() => setPage((prevPage) => prevPage + 1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded ml-2"
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default PersonagensPage;