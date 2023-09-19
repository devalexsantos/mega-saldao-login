import Header from '@/components/Header'
import ListProducts from '@/components/ListProducts'

export default function Home() {
  return (
    <div className="bg-[#F65409] m-auto flex flex-col justify-center">
      <Header />
      <ListProducts />
    </div>
  )
}
