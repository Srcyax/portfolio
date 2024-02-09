
export default function Header(){
    return (
      <div>
          <header>
              <div className="flex flex-row justify-between items-center px-5 py-4">
                  <h1 className="text-3xl transition 1.3s text-white hover:text-purple">&lt;Guedes/&gt;</h1>
                <div className="flex flex-row gap-5">
                  <a href="" className="transition 1.3s text-white hover:text-purple">about-me</a>
                  <a href="" className="transition 1.3s text-white hover:text-purple">projects</a>
                </div>
              </div> 
          </header>  
      </div>
    )
  }