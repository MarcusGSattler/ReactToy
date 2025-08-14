import React, { useState } from 'react';
import {
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import type { Book } from '../models/Book';
import styles from './BookTile.module.css'; 

interface BookTileProps {
  book: Book;
  imgSrc: string;
}

export default function BookTile({ book, imgSrc }: BookTileProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ImageListItem>
        <img
          src={imgSrc}
          alt={book.title}
          loading="lazy"
        />
        <ImageListItemBar
          title={book.title}
          subtitle={book.author}
          actionIcon={
            <IconButton
              sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
              aria-label={`info about ${book.title}`}
              onClick={handleOpen}
            >
              <InfoIcon />
            </IconButton>
          } classes={{
            title: styles.title,
            subtitle: styles.subtitle,
            titleWrap: styles.titleBar,
            root: styles.titleBar
          }}
        />
      </ImageListItem>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{book.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{book.description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
