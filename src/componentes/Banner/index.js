import './estilo.css';

function Banner() {
    return (
        <div className="banner">
            <div className="banner-conteudo">
                <h1>Bem-vindo à GustaBooks</h1>
                <p>Encontre os melhores livros para sua leitura</p>
                <button className="botao-banner">Explorar Livros</button>
            </div>
        </div>
    );
}

export default Banner; 