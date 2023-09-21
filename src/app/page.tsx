import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
      <div className='h-screen flex flex-col'>
        <div className='flex flex-1'>
          <aside className='w-72 bg-zinc-950 p-6'>
            <div className='flex items-center gap-2'>
                <div className='w-3 h-3 rounded-full bg-red-600'></div>
                <div className='w-3 h-3 rounded-full bg-yellow-400'></div>
                <div className='w-3 h-3 rounded-full bg-green-500'></div>
            </div>

            <nav className='space-y-5 mt-10'>
              <a href='' className='flex items-center gap-4 text-sm font-semibold text-zinc-200 hover:text-zinc-100 transition-colors'>
                <HomeIcon />
                Home
              </a>
              <a href='' className='flex items-center gap-4 text-sm font-semibold text-zinc-200 hover:text-zinc-100 transition-colors'>
                <Search />
                Search
              </a>
              <a href='' className='flex items-center gap-4 text-sm font-semibold text-zinc-200 hover:text-zinc-100 transition-colors'>
                <Library />
                Your Library
              </a>
            </nav>

            <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
              <a className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer'>Playlist</a>
              <a className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer'>Playlist</a>
              <a className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer'>Playlist</a>
              <a className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer'>Playlist</a>
              <a className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer'>Playlist</a>
              <a className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer'>Playlist</a>
              <a className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer'>Playlist</a>
              <a className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer'>Playlist</a>
              <a className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer'>Playlist</a>
            </nav>

          </aside>
          <main className='flex-1 p-6 overflow-y-auto max-h-[calc(100vh-150px)]'>
              <div className='flex items-center gap-4'>
                <button className='p-1 rounded-full bg-black/20'>
                  <ChevronLeft />
                </button>
                <button className='p-1 rounded-full bg-black/20'>
                  <ChevronRight />
                </button>
              </div>

              <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

              <div className='grid grid-cols-3 gap-4 mt-6'>
                <a className='bg-white/5 rounded overflow-hidden flex gap-4 items-center hover:bg-white/10 transition-colors group'>
                  <Image src="/album.webp" width={104} height={104} alt='Capa do album'/>
                  <strong>Pink Floyd</strong>
                  <button className='w-12 h-12 flex items-center justify-center pl-3 rounded-full p-2 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                    <Play />
                  </button>
                </a>
                <a className='bg-white/5 rounded overflow-hidden flex gap-4 items-center hover:bg-white/10 transition-colors group'>
                  <Image src="/album.webp" width={104} height={104} alt='Capa do album'/>
                  <strong>Pink Floyd</strong>
                  <button className='w-12 h-12 flex items-center justify-center pl-3 rounded-full p-2 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                    <Play />
                  </button>
                </a>
                <a className='bg-white/5 rounded overflow-hidden flex gap-4 items-center hover:bg-white/10 transition-colors group'>
                  <Image src="/album.webp" width={104} height={104} alt='Capa do album'/>
                  <strong>Pink Floyd</strong>
                  <button className='w-12 h-12 flex items-center justify-center pl-3 rounded-full p-2 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                    <Play />
                  </button>
                </a>
                <a className='bg-white/5 rounded overflow-hidden flex gap-4 items-center hover:bg-white/10 transition-colors group'>
                  <Image src="/album.webp" width={104} height={104} alt='Capa do album'/>
                  <strong>Pink Floyd</strong>
                  <button className='w-12 h-12 flex items-center justify-center pl-3 rounded-full p-2 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                    <Play />
                  </button>
                </a>
                <a className='bg-white/5 rounded overflow-hidden flex gap-4 items-center hover:bg-white/10 transition-colors group'>
                  <Image src="/album.webp" width={104} height={104} alt='Capa do album'/>
                  <strong>Pink Floyd</strong>
                  <button className='w-12 h-12 flex items-center justify-center pl-3 rounded-full p-2 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                    <Play />
                  </button>
                </a>
                <a className='bg-white/5 rounded overflow-hidden flex gap-4 items-center hover:bg-white/10 transition-colors group'>
                  <Image src="/album.webp" width={104} height={104} alt='Capa do album'/>
                  <strong>Pink Floyd</strong>
                  <button className='w-12 h-12 flex items-center justify-center pl-3 rounded-full p-2 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                    <Play />
                  </button>
                </a>
              </div>

              <h2 className='font-semibold text-2xl  mt-10'>Made for Lucas Gaelzer Machado</h2>

              <div className='grid grid-cols-6 mt-4 gap-4'>
                <a href="" className='bg-white/5 p-3 rounded-md hover:bg-white/10 transition-colors flex flex-col gap-2'>
                  <Image src="/album.webp" className='w-full' width={80} height={80} alt='Capa do album'/>
                  <strong className='font-semibold'>Daily Mix 1</strong>
                  <span className='text-sm text-zinc-500'>Roger Waters, Nick Mason, David Gilmour e Richard Wright.</span> 
                </a>
                <a href="" className='bg-white/5 p-2 rounded-md hover:bg-white/10 transition-colors flex flex-col gap-2'>
                  <Image src="/album.webp" className='w-full' width={80} height={80} alt='Capa do album'/>
                  <strong className='font-semibold'>Daily Mix 1</strong>
                  <span className='text-sm text-zinc-500'>Roger Waters, Nick Mason, David Gilmour e Richard Wright.</span> 
                </a>
                <a href="" className='bg-white/5 p-2 rounded-md hover:bg-white/10 transition-colors flex flex-col gap-2'>
                  <Image src="/album.webp" className='w-full' width={80} height={80} alt='Capa do album'/>
                  <strong className='font-semibold'>Daily Mix 1</strong>
                  <span className='text-sm text-zinc-500'>Roger Waters, Nick Mason, David Gilmour e Richard Wright.</span> 
                </a>
                <a href="" className='bg-white/5 p-2 rounded-md hover:bg-white/10 transition-colors flex flex-col gap-2'>
                  <Image src="/album.webp" className='w-full' width={80} height={80} alt='Capa do album'/>
                  <strong className='font-semibold'>Daily Mix 1</strong>
                  <span className='text-sm text-zinc-500'>Roger Waters, Nick Mason, David Gilmour e Richard Wright.</span> 
                </a>
                <a href="" className='bg-white/5 p-2 rounded-md hover:bg-white/10 transition-colors flex flex-col gap-2'>
                  <Image src="/album.webp" className='w-full' width={80} height={80} alt='Capa do album'/>
                  <strong className='font-semibold'>Daily Mix 1</strong>
                  <span className='text-sm text-zinc-500'>Roger Waters, Nick Mason, David Gilmour e Richard Wright.</span> 
                </a>
              </div>

          </main>
        </div>
        <footer className='bg-zinc-800 border-zinc-700 px-4 py-4 flex items-center justify-between'>
          <div className='flex items-center gap-2 '>
            <Image src="/album.webp" width={56} height={56} alt='Capa do album'/>
            <div className='flex flex-col gap-1'>
              <strong className='font-normal'>Breathe</strong>
              <span className='text-xs text-zinc-400'>Roger Waters, Nick Mason, David Gilmour e Richard Wright.</span>
            </div>
          </div>

          <div className='flex flex-col items-center'>
            <div>

            </div>
            <div>
              
            </div>
          </div>
          <div></div>
        </footer>
      </div>
  )
}
