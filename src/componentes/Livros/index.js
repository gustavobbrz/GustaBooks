import './estilo.css';
import { useState } from 'react';

function Livros() {
    const [livros, setLivros] = useState([
        {
            id: 1,
            titulo: 'O Senhor dos Anéis',
            autor: 'J.R.R. Tolkien',
            preco: 49.90,
            imagem: 'https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg',
            favorito: false
        },
        {
            id: 2,
            titulo: '1984',
            autor: 'George Orwell',
            preco: 39.90,
            imagem: 'https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg',
            favorito: true
        },
        {
            id: 3,
            titulo: 'Clean Code',
            autor: 'Robert C. Martin',
            preco: 59.90,
            imagem: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
            favorito: false
        },
        {
            id: 4,
            titulo: 'O Hobbit',
            autor: 'J.R.R. Tolkien',
            preco: 34.90,
            imagem: 'https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg',
            favorito: false
        },
        {
            id: 5,
            titulo: 'A Revolução dos Bichos',
            autor: 'George Orwell',
            preco: 29.90,
            imagem: 'https://m.media-amazon.com/images/I/71sjrW5VnQL._AC_UF1000,1000_QL80_.jpg',
            favorito: false
        },
        {
            id: 6,
            titulo: 'O Pequeno Príncipe',
            autor: 'Antoine de Saint-Exupéry',
            preco: 19.90,
            imagem: 'https://m.media-amazon.com/images/I/71OZY035QKL._AC_UF1000,1000_QL80_.jpg',
            favorito: true
        }
    ]);

    const toggleFavorito = (id) => {
        setLivros(livros.map(livro => 
            livro.id === id ? { ...livro, favorito: !livro.favorito } : livro
        ));
    };

    return (
        <div className="livros-container">
            <h2>Livros em Destaque</h2>
            <div className="livros-grid">
                {livros.map(livro => (
                    <div key={livro.id} className="livro-card">
                        <div className="livro-imagem">
                            <img src={livro.imagem} alt={livro.titulo} />
                            <button 
                                className={`favorito-btn ${livro.favorito ? 'favorito' : ''}`}
                                onClick={() => toggleFavorito(livro.id)}
                            >
                                {livro.favorito ? '❤️' : '🤍'}
                            </button>
                        </div>
                        <div className="livro-info">
                            <h3>{livro.titulo}</h3>
                            <p>{livro.autor}</p>
                            <p className="preco">R$ {livro.preco.toFixed(2)}</p>
                            <button className="comprar-btn">Adicionar ao Carrinho</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Livros; 