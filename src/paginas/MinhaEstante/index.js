import './estilo.css';
import { useState } from 'react';

function MinhaEstante() {
    const [livros, setLivros] = useState([
        {
            id: 1,
            titulo: 'O Senhor dos Anéis',
            autor: 'J.R.R. Tolkien',
            categoria: 'Ficção',
            status: 'Lido',
            imagem: 'https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg'
        },
        {
            id: 2,
            titulo: '1984',
            autor: 'George Orwell',
            categoria: 'Ficção',
            status: 'Lendo',
            imagem: 'https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg'
        },
        {
            id: 3,
            titulo: 'Clean Code',
            autor: 'Robert C. Martin',
            categoria: 'Tecnologia',
            status: 'Quero Ler',
            imagem: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg'
        }
    ]);

    const [filtroStatus, setFiltroStatus] = useState('Todos');
    const [filtroCategoria, setFiltroCategoria] = useState('Todos');

    const statusOptions = ['Todos', 'Lido', 'Lendo', 'Quero Ler'];
    const categorias = ['Todos', 'Ficção', 'Não Ficção', 'Biografia', 'Infantil', 'Juvenil', 'Tecnologia', 'Negócios', 'Autoajuda'];

    const livrosFiltrados = livros.filter(livro => {
        const statusMatch = filtroStatus === 'Todos' || livro.status === filtroStatus;
        const categoriaMatch = filtroCategoria === 'Todos' || livro.categoria === filtroCategoria;
        return statusMatch && categoriaMatch;
    });

    const alterarStatus = (id, novoStatus) => {
        setLivros(livros.map(livro => 
            livro.id === id ? { ...livro, status: novoStatus } : livro
        ));
    };

    return (
        <div className="minha-estante">
            <h1>Minha Estante</h1>
            
            <div className="filtros">
                <div className="filtro-grupo">
                    <label>Status:</label>
                    <select 
                        value={filtroStatus} 
                        onChange={(e) => setFiltroStatus(e.target.value)}
                    >
                        {statusOptions.map(status => (
                            <option key={status} value={status}>{status}</option>
                        ))}
                    </select>
                </div>
                
                <div className="filtro-grupo">
                    <label>Categoria:</label>
                    <select 
                        value={filtroCategoria} 
                        onChange={(e) => setFiltroCategoria(e.target.value)}
                    >
                        {categorias.map(categoria => (
                            <option key={categoria} value={categoria}>{categoria}</option>
                        ))}
                    </select>
                </div>
            </div>
            
            {livrosFiltrados.length === 0 ? (
                <p className="sem-livros">Nenhum livro encontrado com os filtros selecionados.</p>
            ) : (
                <div className="lista-livros">
                    {livrosFiltrados.map((livro) => (
                        <div key={livro.id} className="livro-estante">
                            <img src={livro.imagem} alt={livro.titulo} />
                            <div className="info-livro">
                                <h3>{livro.titulo}</h3>
                                <p>{livro.autor}</p>
                                <p className="categoria">{livro.categoria}</p>
                                <div className="status-grupo">
                                    <label>Status:</label>
                                    <select 
                                        value={livro.status}
                                        onChange={(e) => alterarStatus(livro.id, e.target.value)}
                                    >
                                        {statusOptions.filter(status => status !== 'Todos').map(status => (
                                            <option key={status} value={status}>{status}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MinhaEstante; 