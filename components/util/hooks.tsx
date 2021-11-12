import useSWR from 'swr';
import { fetcher } from './fetcher';

// This basically abstracts away the complexity of 
// POST and GET requests when using SWR, 
// so the requests within the components themselves 
// won't clutter up our react code.

export function useFeed() {
  const { data: feed } = useSWR('/api/feed', fetcher);
  return { feed };
}
