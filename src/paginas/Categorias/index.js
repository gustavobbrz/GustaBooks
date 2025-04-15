import './estilo.css';
import { useState } from 'react';

function Categorias() {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');
    
    const categorias = [
        'Todos',
        'Ficção',
        'Não Ficção',
        'Biografia',
        'Infantil',
        'Juvenil',
        'Tecnologia',
        'Negócios',
        'Autoajuda'
    ];

    return (
        <div className="categorias">
            <h1>Categorias</h1>
            <div className="lista-categorias">
                {categorias.map((categoria) => (
                    <button 
                        key={categoria}
                        className={`categoria ${categoriaSelecionada === categoria ? 'selecionada' : ''}`}
                        onClick={() => setCategoriaSelecionada(categoria)}
                    >
                        {categoria}
                    </button>
                ))}
            </div>
            <div className="livros-categoria">
                <h2>Livros da categoria: {categoriaSelecionada}</h2>
                {/* Aqui será renderizada a lista de livros da categoria selecionada */}
            </div>
        </div>
    );
}

export default Categorias; 