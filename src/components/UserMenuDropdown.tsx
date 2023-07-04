import { Menu, Transition } from "@headlessui/react";
import {
  ArrowUturnRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { Fragment } from "react";
import { Text } from "./Text";

export interface UserMenuDropdownProps {
  session?: Session;
  className?: string;
}

function handleSignOut() {
  signOut();
}

export default function UserMenuDropdown({
  session,
  className,
}: UserMenuDropdownProps) {
  return (
    <div className=" text-right flex text-sm rounded-full  focus:ring-4 focus:ring-gray-600">
      <Menu
        as="div"
        className="relative inline-block text-left  focus:ring-4 focus:ring-gray-600"
      >
        <div>
          <Menu.Button className="inline-flex w-full justify-center items-center gap-2 rounded-md text-sm font-medium">
            {session && (
              <img
                className="w-8 h-8 rounded-full"
                src={session.user?.image!!}
                alt="user photo"
              />
            )}
            <Text>Meu perfil</Text>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-60 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-2 py-2">
              <Menu.Item>
                {session && (
                  <>
                    <Text asChild>
                      <p> {session.user?.name}</p>
                    </Text>
                    <Text asChild>
                      <p>{session.user?.email}</p>
                    </Text>
                  </>
                )}
              </Menu.Item>
            </div>
            
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-100' text-gray-600" : "text-black"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                    onClick={() => handleSignOut()}
                  >
                    <ArrowUturnRightIcon className="h-6 w-6" />
                    Sair
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}