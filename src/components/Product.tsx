import Link from 'next/link'
import { Weather } from '../types/Product'

interface ProductPros {
  sku: string
}

export default async function Product({ sku }: ProductPros) {
  const product: Weather = await fetch(
    `https://www.login.com.br/web_api/products?reference=${sku}`,
  ).then((res) => res.json())

  return (
    <Link href={`https://login.com.br/${product.Products[0].Product.slug}`} target='_blank'>
      <div className="bg-white shadow-sm rounded-xl w-[300px] h-[350px] flex flex-col justify-center items-center text-center cursor-pointer p-3 items-start hover:scale-105 transition-all ease-in-out">
        <img
          src={product.Products[0].Product.ProductImage[0].https}
          width={250}
          height={250}
          alt={product.Products[0].Product.name}
        />
        {product.Products[0].Product.name}
      </div>
    </Link>
  )
}
