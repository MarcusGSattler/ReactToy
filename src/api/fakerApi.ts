import axios from 'axios';
import { ApiEnvelope, Book } from '../models/Book.ts'

export async function fetchBooks(quantity = 8): Promise<Book[]>{
    const baseUrl="https://fakerapi.it/api/v2/";
    const bookEndPoint= "books?_quantity=";
    const {data} = await axios.get(`${baseUrl}${bookEndPoint}${quantity}`);
    return data.data;
}