'use client';

import dynamic from 'next/dynamic';
import { useCallback, useEffect, useState } from 'react';

const Bloggrid = dynamic(
  () => import('@/components/Cards/DevblogCards/bloggrid'),
);

import { getallpost } from '@/lib/endpoints';

import { DevToArticle } from '@/types/ProyectTypes';

function DevtoList() {
  const [articles, setArticles] = useState<DevToArticle[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(getallpost);
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <section className='flex flex-col items-center justify-center'>
      <p className='pt-32 text-center pb-8 text-5xl text-white font-bold'>
        <span className='text-green'> Dev.to</span> Blogs
      </p>
      <Bloggrid
        articles={articles}
        showAllArticles={false}
        hidebutton={false}
      />
    </section>
  );
}

export default DevtoList;

export function Blogdata() {
  const [articles, setArticles] = useState<DevToArticle[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('/api/getLatestpost');
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return articles;
}
