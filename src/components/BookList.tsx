import React from 'react';
import { ImageList } from '@mui/material';
import BookTile from './BookTile';
import type { Book } from '../models/Book';

interface BookListProps {
  books: Book[];
}

export default function BookList({ books }: BookListProps) {
  const localImages = [
    '/resources/book1.png',
    '/resources/book2.png',
    '/resources/book3.png',
    '/resources/book4.png',
    '/resources/book5.png',
  ];

  return (
    <ImageList sx={{ width: '100%', height: 'auto' }} cols={3} gap={16}>
      {books.map((book, index) => (
        <BookTile
          key={index}
          book={book}
          imgSrc={localImages[index % localImages.length]}
        />
      ))}
    </ImageList>
  );
}
