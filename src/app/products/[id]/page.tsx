import { getBooks } from "@/app/lib/get-book"

export default async function ProductDetails({
    props
}: any) {
    console.log(props);  
    // const product = await getBooks(volumeId);
    // console.log(JSON.stringify(product, undefined, " "));
    return (
        <div>
            <h1>ProductDetails</h1>
        </div>
    )
};

