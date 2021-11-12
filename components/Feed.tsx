import { Card } from 'antd';
import { useFeed } from './util/hooks';

export const Feed = () => {
  const { feed } = useFeed();
  return feed ? (
    <>
      {feed.map(({ id, text, createdAt }, i) => (
        <Card key={i}>
          <h4>{text}</h4>
          <span>{createdAt}</span>
          <p>{id}</p>
        </Card>
      ))}
    </>
  ) : null;
};