interface Book {
  id: number;
  title: string;
  description: string;
  authorId: number;
  thumbnail: string;
  publisher: string;
  isbn: string;
  favorite: boolean;
  tags: string[] | string;
}

interface Author {
  id: number;
  name: string;
}