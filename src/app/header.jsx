import Link from "next/link"

export default function Header(){
    return (
      <div>
          <header>
              <div className="flex flex-row justify-between items-center px-5 py-4">
              <Link href="/" className="group text-2xl transition 1.3s text-white w-60">
                <strong className="group-hover:p-1 group-hover:text-purple transition-all duration-200">&lt;</strong>
                Philipe
                <strong className="group-hover:p-1 group-hover:text-purple transition-all duration-200">/&gt;</strong></Link>

                <div className="flex flex-row gap-5">
                  <Link href="/about" className="transition 1.3s text-white hover:text-purple">about-me</Link>
                  <Link href="/projects" className="transition 1.3s text-white hover:text-purple">projects</Link>
                </div>
              </div> 
          </header>  
      </div>
    )
  }