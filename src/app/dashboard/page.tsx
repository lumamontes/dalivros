'use client';
import { useSession } from "next-auth/react"
import { Tab } from '@headlessui/react'
import { Fragment, useEffect } from 'react'
import { Heading } from "@/components/Heading";
import useSWR from 'swr'
import ProductListings from "@/components/ProductListing";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function Dashboard() {
  const { data: session } = useSession();
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const searchParams = useSearchParams()
  const search = searchParams.get('search');
  const { data, error, isLoading } = useSWR("https://www.googleapis.com/books/v1/volumes?q=" + search, fetcher);

  return (
    <div className="flex flex-col min-h-screen max-w-6xl mx-auto ">
      <Heading size="lg" className="py-10 font-normal">
        Olá, {session?.user?.name}
      </Heading>

      <section>
        <Tab.Group>
          <Tab.List className="">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected ? 'border-bottom-500 border-b-2 border-solid border-secondary-100' : 'bg-white text-black'
                  }
                >
                  {
                    search ? `Resultados: ${search}  ` : 'Mais recentes'
                  }
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              {isLoading ? (
                <div className="flex flex-col items-center justify-center gap-y-5">
                  <Image src="/noresults.png" alt="Loading" width={200} height={200} />
                  <p>Carregando...</p>
                </div>
              ) : error ? (
                <div className="flex flex-col items-center justify-center gap-y-5">
                  <Image src="/error.png" alt="Error" width={200} height={200} />
                  <p>Erro ao carregar os livros</p>
                </div>
              ) : (
                <ProductListings products={data.items ?? []} />
              )}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </section>
    </div>
  )
}


