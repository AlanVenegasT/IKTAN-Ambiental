const offers = [
    { name: 'Download the app', description: 'Get an exclusive $5 off code', href: '#' },
    { name: "Return when you're ready", description: '60 days of free returns', href: '#' },
    { name: 'Sign up for our newsletter', description: '15% off your first order', href: '#' },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="flex flex-col border-b border-gray-200 lg:border-0">
  
          <div className="relative">
            <div aria-hidden="true" className="absolute hidden h-full w-1/2 bg-gray-100 lg:block" />
            <div className="relative bg-gray-100 lg:bg-transparent">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
                <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
                  <div className="lg:pr-16">
                    <h1 className="text-4xl font-bold tracking-tight text-[#009640] sm:text-5xl xl:text-6xl">
                        CÉDULA DE OPERACIÓN ANUAL
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                        ¡Tienes hasta el 30 de junio!
                    </p>
                    <div className="mt-6 ">
                      <a
                        href="#"
                        className="transition ease-in-out duration-300 inline-block rounded-md border border-transparent bg-green-400 py-3 px-8 font-medium text-white hover:bg-green-500"
                      >
                        Contactanos
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full w-full sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2">
              <img
                src="https://iktanstrategies.com/wp-content/uploads/2021/04/Vector-COA-1-768x888.png"
                alt=""
                className="h-full w-full  "
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  