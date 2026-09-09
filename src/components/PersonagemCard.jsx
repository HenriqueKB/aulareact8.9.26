const PersonagemCard = ({ personagem }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <img 
            src={personagem.image}
            alt={personagem.name}
            className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-bold mt-4">{personagem.name}</h2>
            <p className="text-gray-600">Status: {personagem.status}</p>
            <p className="text-gray-600">Espécie: {personagem.species}</p>
        </div>
    );

};

export default PersonagemCard;