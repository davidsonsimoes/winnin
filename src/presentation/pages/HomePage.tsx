import React, { useContext, useEffect, useState } from 'react';
import { RedditContext } from '@context/RedditContext';
import { HomePageWrapper, ButtonStyle } from './style';
import Header from '@components/Header';
import Menu from '@components/Menu';
import Container from '@components/Container';
import List from '@components/List';
import ListItem from '@components/ListItem';
import SkeletonGrid from '@components/Skeleton';

const HomePage: React.FC = () => {
  const { posts, loading, error, loadMorePosts, changeFilter, activeFilter } = useContext(RedditContext);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    loadInitialPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadInitialPosts = () => {
    setPage(1);
    changeFilter('hot');
  };

  const handleMenuClick = (filter: string) => {
    setPage(1);
    changeFilter(filter);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    loadMorePosts(page)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <HomePageWrapper>
      <>
      <Header />
      <Menu onMenuClick={handleMenuClick} activeFilter={activeFilter} />
      <Container>
          {loading && posts.length === 0 ? <SkeletonGrid /> : <List>
            {posts.map((item, index) => <ListItem data={item} key={index} />)}
            {!loading && <ButtonStyle onClick={handleLoadMore}>+ Ver mais</ButtonStyle>}
        </List>}
      </Container>
      </>
    </HomePageWrapper>
  );
};

export default HomePage;
