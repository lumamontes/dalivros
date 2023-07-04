'use client';
import { useSession } from "next-auth/react"
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import { Heading } from "@/components/Heading";

export default function Dashboard() {
  const { data: session } = useSession();

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
                    selected ? 'border-bottom-500 border-b-2 border-solid' : 'bg-white text-black'
                  }
                >
                  Mais recentes
                </button>
              )}
            </Tab>
            <Tab disabled>Tendências(em breve)</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>Content 1</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </section>
    </div>
  )
}


