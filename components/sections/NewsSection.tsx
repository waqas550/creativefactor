'use client';

import React from 'react';
import Image from 'next/image';

interface NewsArticle {
  title: string;
  date: string;
  description: string;
  image: string;
}

const NewsSection = () => {
  const newsArticles: NewsArticle[] = [
    {
      title: 'Breaking News 1',
      date: 'August 10, 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida eget turpis et ultricies.',
      image: '/images/hero/cas1.jpg',
    },
    {
      title: 'Breaking News 2',
      date: 'September 15, 2023',
      description: 'Nulla consectetur mi vel metus consectetur, at venenatis odio tincidunt.',
      image: '/images/hero/cas2.jpg',
    },
    {
      title: 'Breaking News 3',
      date: 'October 20, 2023',
      description: 'Proin vestibulum libero in nisi euismod, eu posuere odio aliquet.',
      image: '/images/hero/cas3.jpg',
    },
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-center text-4xl font-bold mb-8 text-white">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsArticles.map((article, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-gray-300 to-gray-200 rounded-lg shadow-md p-4 transform transition-transform hover:scale-105 hover:shadow-xl"
          >
            <div className="relative w-full h-40 rounded-t-lg overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mt-4 text-gray-800">{article.title}</h3>
            <p className="text-gray-500 text-sm">{article.date}</p>
            <p className="text-gray-600 mt-2">{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
