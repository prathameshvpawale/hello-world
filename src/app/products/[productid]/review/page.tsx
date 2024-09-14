export default function Review({ params, }: {
    params: { productid: string }
}) {
    return <h1> my review  {params.productid}

    </h1>
}