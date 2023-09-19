import { products } from '../data/products'
import Product from './Product'

export default function ListProducts() {
  return (
    <div className="bg-[#EA4E06] mt-4 items-start rounded-xl p-4 flex justify-center flex-wrap gap-4 m-auto max-w-5xl w-full">
      {products.map((product, index) => (
        <Product sku={product} key={index} />
      ))}
    </div>
  )
}
