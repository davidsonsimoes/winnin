import React, { useContext, useEffect } from 'react';
import { RedditContext } from '@context/RedditContext';
import { HomePageWrapper } from './style';
import Header from '@components/Header';
import Menu from '@components/Menu';
import Container from '@components/Container';
import List from '@components/List';
import ListItem from '@components/ListItem';

const HomePage: React.FC = () => {
  const { posts, loading, error, loadMorePosts, changeFilter, activeFilter } = useContext(RedditContext);

  useEffect(() => {
    // Carrega os posts iniciais ao montar a página
    loadInitialPosts();
  }, []);
  
  const loadInitialPosts = () => {
    changeFilter('hot'); // Define o filtro inicial como 'hot'
  };

  const handleMenuClick = (filter: string) => {
    changeFilter(filter); // Atualiza o filtro com base no botão clicado
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <HomePageWrapper>
      <>
      <Header />
      <Menu onMenuClick={handleMenuClick} activeFilter={activeFilter} />
      <Container>
        <List>
            {posts.map(item => <ListItem data={item} key={item.id} />)}
        </List>
      </Container>
      </>
    </HomePageWrapper>
  );
};

export default HomePage;
