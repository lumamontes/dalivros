import Image from 'next/image'
import { LoginButton } from '@/components/buttons.components';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-primary-100">
  <div className="flex flex-col items-center max-w-xl text-center mt-auto mb-8">
    <Image src="/logo.png" alt="Logo" width={300} height={300} className="mx-auto" />
    <p className="text-2xl text-primary-900 p-8">
        Explore seus livros favoritos!
     </p>
    <LoginButton />
  </div>
  <footer className="mt-auto text-sm p-6">
    Com ❤️ por Luma
  </footer>
</main>
  )
}
