import { useEffect, useState } from "react";

import { readStorage, writeStorage } from "../utils/storage";
import { LIKES, LIKED_BOOKS } from "../constants/storageKeys";

export const useLikes = ({ productId, product }) => {
  const [liked, setLiked] = useState(false);

  const isLiked = (productId: string) => {
    const likes = readStorage(LIKES);
    return likes && likes.includes(productId);
  };

  const like = async (productId: string) => {
    if (!isLiked(productId)) {
      const likes = readStorage(LIKES) || [];
      const likedBooks = readStorage(LIKED_BOOKS) || [];
      writeStorage(LIKES, [...likes, productId]);
      writeStorage(LIKED_BOOKS, [...likedBooks, product]);
    }

    return fetch("/api/likes", {
      method: "POST",
      body: JSON.stringify({
        productId,
      }),
    });
  };

  const unlike = async (productId: string) => {
    if (isLiked(productId)) {
      const likes = readStorage(LIKES) || [];
      const likedBooks = readStorage(LIKED_BOOKS) || [];
      writeStorage(LIKES, [...likes.filter((id) => id !== productId)]);
      writeStorage(LIKED_BOOKS, [...likedBooks.filter((book) => book.id !== product.id)]);
    }

    return fetch("/api/likes", {
      method: "DELETE",
      body: JSON.stringify({
        productId,
      }),
    });
  };

  const handleLikeProduct = () => {
    setLiked(!liked);
    if (!liked) like(productId);
    else unlike(productId);
  };

  useEffect(() => {
    if (isLiked(productId)) setLiked(true);
  }, []);

  return { liked, handleLikeProduct };
};