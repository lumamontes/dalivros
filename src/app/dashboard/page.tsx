'use client';
import { useSession } from "next-auth/react"
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import { Heading } from "@/components/Heading";
import useSWR from 'swr'
import ProductListings from "@/components/ProductListing";

export default function Dashboard() {
  const { data: session } = useSession();
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const { data, error, isLoading } = useSWR("https://www.googleapis.com/books/v1/volumes?q='Data'", fetcher);

  return (
    <div className="flex flex-col min-h-screen mx-12">
      <Heading size="lg" className="py-10 font-normal">
        Olá, {session?.user?.name}
      </Heading>

      <section>
        <Tab.Group>
          <Tab.List className="flex gap-4">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected ? 'border-bottom-500 border-b-2 border-solid border-secondary-100' : 'bg-white text-black'
                  }
                >
                  Mais recentes
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              {isLoading && <div>Loading...</div>}
              {error && <div>Error</div>}
              {data && <ProductListings products={data.items} />}


            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </section>
    </div>
  )
}


