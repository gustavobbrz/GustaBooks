import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './componentes/Header';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Categories from './pages/Categories';

const AppContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-image: ${({ theme }) => theme.colors.background};
    display: flex;
    flex-direction: column;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<Home />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
