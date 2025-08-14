import {useEffect, useState} from 'react';
import type {Book} from '../models/Book';
import { fetchBooks } from '../api/fakerApi';


export function useBooks(quantity= 8){
    const [data, setData] = useState<Book[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetchBooks(quantity)
            .then((books) => setData(books))
            .catch((err) => setError(String(err)))
            .finally(()=> setLoading(false));
    }, [quantity]);
    
    return {data, loading, error};
}

