import { notFound } from "next/navigation"

export default function Reviewid({ params, }: {
    params: {
        productid: string,
        reviewid: string
    }
}) {
    if (parseInt(params.reviewid) > 1000) {
        notFound();
    }
    return (<h1> my product  {params.productid} review {params.reviewid}

    </h1>
    )
}