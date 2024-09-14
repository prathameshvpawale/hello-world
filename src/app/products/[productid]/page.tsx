export default function ProductDetails({ params, }: {
    params: { productid: string }
}) 

{
    return <h1> first blog  {params.productid}

    </h1>
}