import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBook, FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.white};
  padding: 20px;
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-weight: 700;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 40px;
  max-width: 600px;
  line-height: 1.6;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
`;

const CTAButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  padding: 15px 30px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bem-vindo ao GustaBooks
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Sua biblioteca digital completa. Encontre milhares de livros, 
          explore novos autores e expanda seu conhecimento.
        </Subtitle>
        <CTAButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          as={Link}
          to="/catalog"
        >
          Explorar Livros
        </CTAButton>
      </HeroSection>
      
      <FeaturesGrid>
        <FeatureCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <IconWrapper>
            <FaBook />
          </IconWrapper>
          <FeatureTitle>Biblioteca Extensa</FeatureTitle>
          <FeatureDescription>
            Acesso a milhares de títulos em diversos gêneros e categorias.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <IconWrapper>
            <FaSearch />
          </IconWrapper>
          <FeatureTitle>Busca Inteligente</FeatureTitle>
          <FeatureDescription>
            Encontre exatamente o que procura com nossa busca avançada.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <IconWrapper>
            <FaUser />
          </IconWrapper>
          <FeatureTitle>Perfil Personalizado</FeatureTitle>
          <FeatureDescription>
            Crie seu perfil e receba recomendações baseadas em seus interesses.
          </FeatureDescription>
        </FeatureCard>
        
        <FeatureCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <IconWrapper>
            <FaShoppingCart />
          </IconWrapper>
          <FeatureTitle>Compras Fáceis</FeatureTitle>
          <FeatureDescription>
            Processo de compra simplificado e seguro para sua comodidade.
          </FeatureDescription>
        </FeatureCard>
      </FeaturesGrid>
    </HomeContainer>
  );
};

export default Home; 