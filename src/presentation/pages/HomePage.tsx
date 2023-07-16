import React, { useContext } from 'react';
import { RedditContext } from '@context/RedditContext';
import { HomePageWrapper } from './style';
import Header from '@components/Header';
import Menu from '@components/Menu';
import Container from '@components/Container';
import List from '@components/List';

const HomePage: React.FC = () => {
  const { posts, loading, error } = useContext(RedditContext);

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
      <Menu onMenuClick={() => console.log('teste')} activeFilter='hot' />
      {console.log({posts})}
      <Container>
        <List>
            <div className="App">
                <p>
                    home
                </p>
            </div>
        </List>
      </Container>
      </>
    </HomePageWrapper>
  );
};

export default HomePage;
