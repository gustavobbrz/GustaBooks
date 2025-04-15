import './estilo.css';
import Banner from '../../componentes/Banner';
import Livros from '../../componentes/Livros';

function Home() {
    return (
        <div className="home">
            <Banner />
            <Livros />
        </div>
    );
}

export default Home; 