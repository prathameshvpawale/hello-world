export default function Reviewid({ params, }: {
    params: {
        productid: string,
        reviewid: string
    }
}) {
    return <h1> my product  {params.productid} review {params.reviewid}

    </h1>
}