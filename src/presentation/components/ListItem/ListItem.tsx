import React from "react";
import { ListItemWrapper, ContentImage, ContentDetails } from "./style";
import PlaceholderImage from '@assets/placeholder.png';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

export interface RedditPost {
  id: string;
  title: string;
  author: string;
  date: number;
  domain: string;
  postImage: string;
}

export interface ListDate {
  data: RedditPost;
}

const ListItem: React.FC<ListDate> = ({ data }) => {
  const { title, author, date, domain, postImage } = data;

  const timeAgo = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const formattedTime = formatDistanceToNow(date, { addSuffix: true, locale: ptBR });
    return formattedTime;
  };

  const checkImageRender = (image: string) => image.replace('&amp;', '&');
  return (
    <ListItemWrapper>
      <ContentImage>
        {postImage ? <img src={checkImageRender(postImage)} alt={title} /> : <img src={PlaceholderImage} alt={title} />}
      </ContentImage>
      <ContentDetails>
        {title && <h1>{title}</h1>}
        <p>enviado há {timeAgo(date)} por <strong>{author}</strong></p>
        <span>{domain}</span>
      </ContentDetails>
    </ListItemWrapper>
  );
};

export default ListItem;
