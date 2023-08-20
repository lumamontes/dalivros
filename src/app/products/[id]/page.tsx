import Image from "next/image";
import { Suspense } from "react";

async function getDetailsBook(volumeId: string) {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${volumeId}`)
    return res.json()
  }
   
  export default async function Page({
    params: { volumeId },
  }: {
    params: { volumeId: string }
  }) {

    const bookData = await getDetailsBook(volumeId)
    // console.log(JSON.stringify(data, null, 2))

    // if(isLoading){
    //     return <div>Carregando...</div>
    // }

    // if(error){
    //     return <div>Erro ao carregar</div>
    // }
    

    return (
        <div className="flex flex-col min-h-screen max-w-6xl mx-auto ">
        <section>
            <div className="flex flex-col items-center justify-center gap-y-5">
                <h1 className="text-4xl font-bold">Detalhes do livro</h1>
            </div>
            <Suspense fallback={<div>Carregando...</div>}>
                <div className="flex flex-col items-center justify-center gap-y-5">
                    {bookData.error && (
                    <div className="flex flex-col items-center justify-center gap-y-5">  
                        <Image src="/error.png" alt="No results found" width={200} height={200} />
                        <p>Erro ao carregar:</p>
                        <p className="text-red-300">{bookData.error.message}</p>
                    </div>
                )}
                </div>
            </Suspense>
            {/* <div className="flex flex-col items-center justify-center gap-y-5">
                <h1 className="text-4xl font-bold">{data?.volumeInfo.title}</h1>
                <h2 className="text-2xl font-bold">{data?.volumeInfo.subtitle}</h2>
                <h3 className="text-xl font-bold">{data?.volumeInfo.authors}</h3>
                <h4 className="text-lg font-bold">{data?.volumeInfo.publisher}</h4>
                <h5 className="text-lg font-bold">{data?.volumeInfo.publishedDate}</h5>
                <h6 className="text-lg font-bold">{data?.volumeInfo.pageCount}</h6>
                <p className="text-lg font-bold">{data?.volumeInfo.description}</p>
                <p className="text-lg font-bold">{data?.volumeInfo.categories}</p>
                <p className="text-lg font-bold">{data?.volumeInfo.language}</p>
                <p className="text-lg font-bold">{data?.volumeInfo.averageRating}</p>
                <p className="text-lg font-bold">{data?.volumeInfo.ratingsCount}</p>
                <p className="text-lg font-bold">{data?.volumeInfo.maturityRating}</p>
                <p className="text-lg font-bold">{data?.volumeInfo.contentVersion}</p>
                <p className="text-lg font-bold">{data?.volumeInfo.imageLinks?.thumbnail}</p>
                <p className="text-lg font-bold">{data?.volumeInfo.imageLinks?.small}</p>
                <p className="text-lg font-bold">{data?.volumeInfo.imageLinks?.medium}</p>
                <p className="text-lg font-bold">{data?.volumeInfo.imageLinks?.large}</p>
                <p className="text-lg font-bold">{data?.volumeInfo.imageLinks?.extraLarge}</p>
                <p className="text-lg font-bold">{data?.volumeInfo.imageLinks?.smallThumbnail}</p>
                <p className="text-lg font-bold">{data?.volumeInfo.imageLinks?.extraLarge}</p>
                <p className="text-lg font-bold">{data?.volumeInfo.imageLinks?.extraLarge}</p>
                <p className="text-lg font-bold">{data?.volumeInfo.imageLinks?.extraLarge}</p>
                <p className="text-lg font-bold">{data?.volumeInfo.imageLinks?.extraLarge}</p>
                <p className="text-lg font-bold">{data?.volumeInfo.imageLinks?.extraLarge}</p>
                <p className="text-lg font-bold">{data?.volumeInfo.imageLinks?.extraLarge}</p>
                <p className="text-lg font-bold">{data?.volumeInfo.imageLinks?.extraLarge}</p>
            </div> */}
             

        </section>
    </div>
    )
};

