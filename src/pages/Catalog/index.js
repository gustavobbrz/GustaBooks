import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter, FaSort } from 'react-icons/fa';
import { livros } from '../../componentes/Pesquisa/dadosPesquisa';

const CatalogContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.white};
  padding: 20px;
`;

const CatalogHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto 40px;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: 700;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 10px 20px;
  margin-bottom: 20px;
  max-width: 600px;
  
  svg {
    color: ${({ theme }) => theme.colors.white};
    margin-right: 10px;
  }
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  width: 100%;
  padding: 10px;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 15px;
`;

const FilterButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  
  svg {
    font-size: 1rem;
  }
`;

const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const BookCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const BookImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const BookInfo = styled.div`
  padding: 20px;
`;

const BookTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: 600;
`;

const BookAuthor = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 15px;
`;

const BookPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
`;

const BuyButton = styled.button`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  padding: 8px 15px;
  border-radius: 20px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredBooks = livros.filter(book => 
    book.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <CatalogContainer>
      <CatalogHeader>
        <Title>Catálogo de Livros</Title>
        <SearchBar>
          <FaSearch />
          <SearchInput 
            type="text" 
            placeholder="Buscar livros..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBar>
        <FilterBar>
          <FilterButton>
            <FaFilter /> Filtrar
          </FilterButton>
          <FilterButton>
            <FaSort /> Ordenar
          </FilterButton>
        </FilterBar>
      </CatalogHeader>
      
      <BooksGrid>
        {filteredBooks.map((book, index) => (
          <BookCard
            key={book.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <BookImage src={book.src} alt={book.nome} />
            <BookInfo>
              <BookTitle>{book.nome}</BookTitle>
              <BookAuthor>Autor: {book.autor || 'Desconhecido'}</BookAuthor>
              <BookPrice>
                <Price>R$ {book.preco || '59,90'}</Price>
                <BuyButton>Comprar</BuyButton>
              </BookPrice>
            </BookInfo>
          </BookCard>
        ))}
      </BooksGrid>
    </CatalogContainer>
  );
};

export default Catalog; 