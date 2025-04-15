import './estilo.css';
import { useState } from 'react';

function Favoritos() {
    const [favoritos, setFavoritos] = useState([
        {
            id: 1,
            titulo: 'O Senhor dos Anéis',
            autor: 'J.R.R. Tolkien',
            preco: 49.90,
            imagem: 'https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg'
        },
        {
            id: 2,
            titulo: '1984',
            autor: 'George Orwell',
            preco: 39.90,
            imagem: 'https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg'
        }
    ]);

    const removerFavorito = (id) => {
        setFavoritos(favoritos.filter(livro => livro.id !== id));
    };

    return (
        <div className="favoritos">
            <h1>Meus Favoritos</h1>
            {favoritos.length === 0 ? (
                <p className="sem-favoritos">Você ainda não tem livros favoritos.</p>
            ) : (
                <div className="lista-favoritos">
                    {favoritos.map((livro) => (
                        <div key={livro.id} className="livro-favorito">
                            <img src={livro.imagem} alt={livro.titulo} />
                            <div className="info-livro">
                                <h3>{livro.titulo}</h3>
                                <p>{livro.autor}</p>
                                <p className="preco">R$ {livro.preco.toFixed(2)}</p>
                            </div>
                            <button 
                                className="remover-favorito"
                                onClick={() => removerFavorito(livro.id)}
                            >
                                Remover
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favoritos; 