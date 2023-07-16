import React from "react";
import { ListItemWrapper, ContentImage, ContentDetails } from "./style";
import PlaceholderImage from '@assets/placeholder.png';

export interface RedditPost {
  id: string;
  title: string;
  author: string;
  date: string;
  domain: string;
  postImage: string;
}

export interface ListDate {
  data: RedditPost;
}

const ListItem: React.FC<ListDate> = ({ data }) => {
  const { id, title, author, date, domain, postImage } = data;

  const checkImageRender = (image: string) => image.replace('&amp;', '&');
  return (
    <ListItemWrapper key={id}>
      <ContentImage>
        {postImage ? <img src={checkImageRender(postImage)} alt={title} /> : <img src={PlaceholderImage} alt={title} />}
      </ContentImage>
      <ContentDetails>
        {title && <h1>{title}</h1>}
        <p>enviado há {date} por <strong>{author}</strong></p>
        <span>{domain}</span>
      </ContentDetails>
    </ListItemWrapper>
  );
};

export default ListItem;
