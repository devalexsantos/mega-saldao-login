import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full flex flex-col justify-center items-center">
      <Image
        width={803}
        height={548}
        src="/assets/logo-mega-saldao-login.png"
        alt="Logo do Mega Saldão Login"
      />
      <div className="bg-[#FD0014]/40 p-4 w-full flex justify-center">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-white text-3xl font-black italic text-center">
            APROVEITE, É POR
          </h3>
          <h2 className="text-white text-5xl font-black italic text-center">
            TEMPO <span className="text-[#FAFF00]">ILIMITADO</span>
          </h2>
        </div>
      </div>
    </header>
  )
}
