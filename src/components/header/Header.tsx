'use client'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  ArrowRightEndOnRectangleIcon,
  Bars3Icon,
  EnvelopeIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { PhoneIcon } from '@heroicons/react/20/solid'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollDirection, setScrollDirection] = useState('up')
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      if (currentScrollPos > prevScrollPos) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  return (
    <header className="bg-white dark:bg-gray-700  fixed top-0 left-0 w-full  shadow-lg">
      {/* Top section with contact info and buttons */}
      <div className={`transition-all duration-300 ${scrollDirection === 'down' ? 'absolute' : 'relative'} bg-gray-100 dark:bg-gray-300 py-2 top-[-100%]`}>
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className="flex items-center">
              <PhoneIcon className="h-5 w-5 text-gray-500 dark:text-gray-100 mr-1" />
              +257 68522833
            </span>
            <span className="flex items-center">
              <EnvelopeIcon className="h-5 w-5 text-gray-500 dark:text-gray-100 mr-1" />
              ames@gmail.com
            </span>
          </div>
          <div className="flex space-x-4">
            <Link to="/volunteer" className="flex items-center text-sm font-semibold text-gray-900 hover:text-indigo-600 dark:hover:text-gray-500">
              <ArrowRightEndOnRectangleIcon className="h-5 w-5 text-gray-500 mr-1" />
              Etre Volontaire
            </Link>
            <Link to="/donate" className="bg-yellow-500 text-sm text-blue-900 px-2 py-2 rounded-lg font-semibold hover:bg-yellow-400 ">
              Faire un don
            </Link>
          </div>
        </div>
      </div>

      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 ">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src="src/assets/amesWhite.ico" className="h-8 w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700  dark:text-gray-300"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 ">
          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white ">
            Accueil
          </Link>
          <Link to="/events" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
            Evenements
          </Link>
          <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
            À propos de nous
          </Link>
          <Link to="/mission" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
            Notre Mission
          </Link>
          <Link to="/blog" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
            Notre Blog
          </Link>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/login" className="flex items-center bg-indigo-600 dark:bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-indigo-500 dark:hover:bg-gray-900">
            <UserIcon className="h-5 w-5 text-white mr-1" />
            Connexion <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="wait"
                src="src/assets/amesWhite.ico"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  Accueil
                </Link>
                <Link
                  to="/events"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  Evenements
                </Link>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  À propos de nous
                </Link>
                <Link
                  to="/mission"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  Notre Mission
                </Link>
                <Link
                  to="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  Notre blog
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
