import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBook, FaGraduationCap, FaChild, FaBookReader } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Container = styled.div`
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.white};
    padding: 20px;
`;

const ContentContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
`;

const Header = styled.div`
    text-align: center;
    margin-bottom: 3rem;
`;

const Title = styled(motion.h1)`
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 1rem;
    font-weight: 700;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 2rem;
    }
`;

const Subtitle = styled(motion.p)`
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 40px;
`;

const CategoriesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
`;

const CategoryCard = styled(motion(Link))`
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    text-align: center;
    text-decoration: none;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(-5px);
    }
`;

const IconWrapper = styled.div`
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 1rem;
`;

const CategoryTitle = styled.h2`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 0.5rem;
    font-weight: 600;
`;

const CategoryDescription = styled.p`
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 1rem;
    line-height: 1.5;
`;

const BookCount = styled.span`
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0.1);
    padding: 5px 15px;
    border-radius: 20px;
`;

const categories = [
    {
        id: 1,
        title: 'Ficção',
        description: 'Livros de ficção, romances e literatura',
        icon: <FaBook />,
        count: 150,
        path: '/catalog?category=ficcao'
    },
    {
        id: 2,
        title: 'Não Ficção',
        description: 'Livros informativos e educativos',
        icon: <FaBookReader />,
        count: 120,
        path: '/catalog?category=nao-ficcao'
    },
    {
        id: 3,
        title: 'Infantil',
        description: 'Livros para crianças e jovens',
        icon: <FaChild />,
        count: 80,
        path: '/catalog?category=infantil'
    },
    {
        id: 4,
        title: 'Acadêmico',
        description: 'Livros técnicos e acadêmicos',
        icon: <FaGraduationCap />,
        count: 200,
        path: '/catalog?category=academico'
    }
];

function Categories() {
    return (
        <Container>
            <ContentContainer>
                <Header>
                    <Title
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Categorias
                    </Title>
                    <Subtitle
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Explore nossa coleção por categorias
                    </Subtitle>
                </Header>
                <CategoriesGrid>
                    {categories.map((category, index) => (
                        <CategoryCard
                            key={category.id}
                            to={category.path}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                            <IconWrapper>{category.icon}</IconWrapper>
                            <CategoryTitle>{category.title}</CategoryTitle>
                            <CategoryDescription>{category.description}</CategoryDescription>
                            <BookCount>{category.count} livros</BookCount>
                        </CategoryCard>
                    ))}
                </CategoriesGrid>
            </ContentContainer>
        </Container>
    );
}

export default Categories; 