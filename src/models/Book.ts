export interface Book{

        id: string;
        title: string;
        author: string;
        genre: string;
        description: string;
        isbn: string;
        imageUrl: string;
        published: string;
        publisher: string;
}

export interface ApiEnvelope<T> {
    status: string;
    code: number;
    locale: string
    seed?: string;
    total?: number;
    data: T[];
  }