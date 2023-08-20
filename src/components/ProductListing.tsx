import ProductCard from '@/components/ProductCard';
import Image from 'next/image';

function ProductListings( {products} : any) {
  return (
    <>
    <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      {
        products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))
      }
    </div>
     {products.length === 0 && (
      <div className="flex flex-col items-center justify-center gap-y-5">
        <Image src="/noresults.png" alt="No results found" width={200} height={200} />
        <p>Nenhum livro encontrado</p>
      </div>
    )  
    }
    </>
  )
}

export default ProductListings