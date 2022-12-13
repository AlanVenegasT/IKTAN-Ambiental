const stats = [
    { label: 'Founded', value: '2021' },
    { label: 'Employees', value: '5' },
    { label: 'Beta Users', value: '521' },
    { label: 'Raised', value: '$25M' },
  ]
  
  export default function Example() {
    return (
      <div className="relative bg-slate-50 py-16 sm:py-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-white lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              {/* Testimonial card*/}
              <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl -skew-y-6">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1606037150583-fb842a55bae7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  alt=""
                />

              </div>
            </div>
          </div>
  
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-center text-3xl font-bold tracking-tight text-[#009640] sm:text-4xl">
                Residuos
              </h2>
              <div className="mt-6 space-y-6 text-slate-600 text-xl">
                <ul class="list-disc ml-10">
                    <li className="mb-2">Registro de Generador de Residuos Peligrosos</li>
                    <li className="mb-2">Registro de Generador de Residuos de Manejo Especial</li>
                    <li className="mb-2">Planes de Manejo de Residuos</li>
                    <li className="mb-2">Modificación de autorizaciones</li>
                    <li className="mb-2">Informes</li>
                </ul>
              </div>
            </div>
  
            
          </div>
        </div>

        <div className="mt-10 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-20 lg:w-screen">

              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-1 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              {/* Testimonial card*/}
              <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl skew-y-6">
                <img
                  className="absolute inset-0 h-full w-full object-cover "
                  src="https://images.unsplash.com/photo-1580120656760-c652daad203c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                  alt=""
                />

              </div>
            </div>
          </div>
  
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-center text-3xl font-bold tracking-tight text-[#009640] sm:text-4xl">
              Emisiones
              </h2>
              <div className="mt-6 space-y-6 text-slate-600 text-xl">
                <ul class="list-disc ml-10">
                    <li className="mb-2">Programa para la Prevención y el Control Integral de 
                    Emisiones de Metano del Sector Hidrocarburos (PPCIEM).</li>
                    <li className="mb-2">Reporte Anual de Cumplimiento del PPCIEM.</li>
                </ul>
              </div>
            </div>
  
            
          </div>
        </div>
        
      </div>
    )
  }
  