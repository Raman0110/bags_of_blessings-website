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
      {/* <div className="w-[40%] relative">
        <Input type="text" placeholder="Search" className="pr-8" />
        <SearchIcon className="cursor-pointer hover:text-[#EC1A1C] absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      </div> */}
      <div className='font-semibold'>
        <button className='cursor-pointer'>Log in</button>
        <button className='ml-6 md:ml-20 cursor-pointer text-white bg-[var(--color-brand)] px-6 md:px-12 py-2 rounded-4xl'>Sign up</button>
      </div>
    </nav>
  )
}

export default Nav