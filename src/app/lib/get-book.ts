import { BookVolume } from "@/@types/BookVolume";

export const getBooks = async ( volumeId: string ): Promise<BookVolume> => {

    const data = await fetch(`https://www.googleapis.com/books/v1/volumes/{volumeId}`);
    const book = await data.json();
    return book;
}