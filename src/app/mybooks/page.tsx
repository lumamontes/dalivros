'use client';
import { Heading } from "@/components/Heading";
import HeartIcon from "@/components/HeartIcon";
import IconButton from "@/components/IconButton";
import ProductCard from "@/components/ProductCard";
import { LIKED_BOOKS } from "@/constants/storageKeys";
import { useLikes } from "@/hooks/useLikes";
import { readStorage } from "@/utils/storage";
import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";


export default function Mybooks() {
    const likedBooks = readStorage(LIKED_BOOKS);

    //TODO: Implementar a funcionalidade de deslike/like atualizando no localstorage

    const [liked, setLiked] = useState(true);
    return (
    <div className="flex flex-col min-h-screen max-w-6xl mx-auto ">
        <Heading size="lg" className="py-10 font-normal">
            Meus livros  favoritos
        </Heading>
        <div className="flex flex-col gap-4 py-6">
            {likedBooks.map((product, key) => (
                product?.title && (
                <div className="rounded max-w-3xl shadow-lg mx-auto border border-palette-lighter grid grid-cols-1 md:grid-cols-2 " key={key}>
                    <div className="h-72 border-b-2 border-palette-lighter relative col-">
                        <Image
                            src={product.image}
                            alt={product.title}
                            fill={true}
                            style={{ objectFit: 'scale-down' }}
                            className="transform duration-500 ease-in-out hover:scale-110"
                        />
                    </div>
                    <div className="h-48 relative w-full">
                        <div className="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
                            {product.title}
                        </div>
                        <div>
                            <div className="text-sm text-gray-600 p-4 font-primary font-light">
                                {product.description}
                            </div>
                            <div className="self-end">
                                <IconButton
                                    icon={
                                    <HeartIcon
                                        className={`${liked ? "fill-red-500" : "fill-white"} ${
                                        liked ? "stroke-red-500" : "stroke-gray-400"
                                        }`}
                                    />
                                    }
                                    onClick={() => setLiked(!liked)}
                                />
                            </div>

                        </div>
                        
                        
                       
                    </div>
                   
              </div>
            )
            ))}

        </div>
    </div>
)

}

