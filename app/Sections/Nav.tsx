import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className='bg-white px-4 sm:px-12 pt-6 pb-4 flex justify-between items-center sticky top-0 z-50'>
      <Link href={"/"}>
        <div className='flex items-center gap-x-3'>
          <Image src="/logo.jpeg" alt='logo' width={60} height={80} />
          {/* <h2 className='text-[#242529] font-bold text-2xl hidden md:block'>Bags of Blessings</h2> */}
        </div>
      </Link>

      <div className="">
        <SearchIcon className="cursor-pointer hover:text-[#EC1A1C] h-4 w-4 text-muted-foreground" />
      </div>

    </nav>
  )
}

export default Nav