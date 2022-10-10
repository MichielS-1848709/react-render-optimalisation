import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import List from '../components/List';
import Overview from '../components/Overview';

type Item = {
  key: number;
  content: string;
}

const Home: NextPage = () => {

  const [items] = useState<Item[]>([
    {key: 1, content: "Bob"},
    {key: 2, content: "Alice"},
    {key: 3, content: "Sam"},
  ]);

  return (
    <div>
      <Overview />
      <List items={items} />
    </div>
  )
}

export default Home
export type {Item};
