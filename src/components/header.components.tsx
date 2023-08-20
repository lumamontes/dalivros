'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import UserMenuDropdown from './UserMenuDropdown';
import { Text } from './Text';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  function handleSubmitForm(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    const currentSearchedValue = e.currentTarget.elements.namedItem('default-search').value
    router.push(pathname + '?' + createQueryString('search', currentSearchedValue))
  }
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!
 
  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )


  return (
    <header className="border-gray-800 border-b-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className='flex items-center gap-2'>
          <div className='bg-primary-100 rounded-full p-2'>
            <Image src="/booklogo.png" alt="Logo" width={50} height={50} />
          </div>
          <Link href='/'>
            <Text>Página inicial</Text>
          </Link>
        </div>
        <form className='flex-1 max-w-lg' onSubmit={(e) => handleSubmitForm(e)}>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor"strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pesquisar livros" required />
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </form>
        <div>
          <UserMenuDropdown session={session} />
        </div>
      </div>
    </header>
  );
}
