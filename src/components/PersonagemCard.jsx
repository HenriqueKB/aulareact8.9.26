const PersonagemCard = ({ children, className = '', ...props }) => {
    return (
        <div
            {...props}
            className={`bg-white rounded-lg shadow-md p-4 ${className}`}
        >
            {children}
        </div>
    )
}

export default PersonagemCard