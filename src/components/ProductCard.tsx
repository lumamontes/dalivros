import { BookVolume } from '@/@types/BookVolume';
import Image from 'next/image'
import Link from 'next/link'
import HeartIcon from "./HeartIcon";
import IconButton from "./IconButton";
import { useLikes } from '@/hooks/useLikes';
// import { useLikes } from '@/hooks/useLikes';

function ProductCard( {product} : {product: BookVolume} ) {
  const handle = product.volumeInfo.title;
  const title = product.volumeInfo.title.length > 50 ? product.volumeInfo.title.substring(0, 50) + '...' : product.volumeInfo.title;
  const description = product.searchInfo?.textSnippet || 'Descrição não disponível'
  const imageNode = product.volumeInfo.imageLinks?.thumbnail;
  function generateSlug(title: string, maxLength = 100) {
    const separator = '-'; // You can change this to any separator you prefer
    const slug = title
      .trim()
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters and punctuation marks
      .replace(/\s+/g, separator) // Replace spaces with the separator character
      .replace(new RegExp(`${separator}{2,}`, 'g'), separator) // Replace consecutive separators
      .slice(0, maxLength) // Trim the slug to the desired maximum length
      .replace(new RegExp(`${separator}$`), ''); // Remove any trailing separators
  
    return slug;
  }

  const { liked, handleLikeProduct } = useLikes({ productId: product.id, product: {
    id: product.id,
    title: product.volumeInfo.title,
    description: product.searchInfo?.textSnippet || 'Descrição não disponível',
    image: product.volumeInfo.imageLinks?.thumbnail,
  } });
  return (
    <Link
      href={''

        // {
        //     pathname:`/products/${generateSlug(handle)}`,
        //     query: {
        //         volumeId: product.id,
        //     }
        }
        // as={`/products/${generateSlug(handle)}`}
    >
      <div className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter">
        <div className="h-72 border-b-2 border-palette-lighter relative">
          <Image
            src={imageNode}
            alt={title}
            fill={true}
            style={{ objectFit: 'scale-down' }}
            className="transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
        <div className="h-48 relative">
          <div className="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
            {title}
          </div>
          <div className="text-lg text-gray-600 p-4 font-primary font-light">
          </div>
          <div
            className="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter 
            rounded-tl-sm triangle"
          >
          <IconButton
            icon={
              <HeartIcon
                className={`${liked ? "fill-red-500" : "fill-white"} ${
                  liked ? "stroke-red-500" : "stroke-gray-400"
                }`}
              />
            }
            onClick={handleLikeProduct}
          />

          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard