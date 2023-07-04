import Image from 'next/image'
import { LoginButton } from '@/components/buttons.components';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center     bg-primary-100">
      <Image src="/logo.png" alt="Logo" width={300} height={300} />
      <div className='flex flex-col items-center max-w-md '>
        <p className="text-2xl text-center text-primary-900 mb-4 ">
          Compartilhe, troque e doe livros de forma simples e prática.
        </p>
        <LoginButton />
      </div>
      <footer className='absolute bottom-4 text-sm'>
        Com ❤️ por Luma
      </footer>
    </main>
  )
}
