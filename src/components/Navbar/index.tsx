import Link from 'next/link';
import Image from 'next/image';
import { SVGProps } from 'react'
import { TerminalIcon } from '@heroicons/react/outline'
import logo from '../../../public/workflow-mark-indigo-600.svg'

type INavItem = {
  label: string;
  href: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

const navItems: INavItem[] = [
  {
    label: 'Projects',
    icon: TerminalIcon,
    href: '/projects',
  }
]

export default function Navbar() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span className="sr-only">Workflow</span>
            <Image
              height={50}
              width={50}
              src={logo}
              alt=""
            />
          </a>
        </div>
        {navItems.map((navItem) => (
          <Link key={navItem.label} href="/projects">
            <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
              <navItem.icon className="flex-shrink-0 h-6 w-6 text-primary-500" aria-hidden="true" />
              <span className="ml-2 text-base font-medium text-gray-900">{navItem.label}</span>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}
