import React from 'react';
import { Container, CircularProgress, Typography } from '@mui/material';
import { useBooks } from '../hooks/useBooks';
import BookList from '../components/BookList';

export default function Home() {
  const { data: books, loading, error } = useBooks(12);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container sx={{ mt: 8 }}>
      {books && <BookList books={books} />}
    </Container>
  );
}