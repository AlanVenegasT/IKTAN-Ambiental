/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
export default function Example() {
    return (
      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="https://iktanstrategies.com/wp-content/uploads/2022/12/Residuos-de-Manejo-Especial.png"
              alt=""
            />
          </div>
        </div>
        <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
              <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-[#009640] sm:text-4xl">Acerca de nosotros</h3>
              <p className="mt-8 text-lg text-gray-500">
              En IKTAN Ambiental estamos comprometidos con el cuidado y protección del ambiente, por ello ofrecemos a nuestros clientes 
              todas nuestras capacidades para facilitar el cumplimiento de la regulación ambiental en sus proyectos.
              </p>
              <div className="prose prose-indigo mt-5 text-gray-500 text-lg">
                <ul class="pl-5 list-disc">
                    <li className="pb-3">Contamos con un grupo multidisciplinario que integra a técnicos y especialistas en el sector hidrocarburos en materia ambiental.</li>
                    <li className="pb-3">Hemos desarrollado procesos sólidos y eficaces de resolución de gestiones normativas ambientales para brindar 
                        certeza a nuestros clientes en cada momento.</li>
                    <li className="pb-3">Ofrecemos gestión de trámites de manera presencial, para aquellas empresas alejadas de la CDMX.</li>
                </ul>
              </div>
              <p className="mt-5 text-lg text-gray-500">
              Estamos convencidos que el cumplimiento de las normas ambientales es un primer paso para mejorar la interacción entre la 
              industria y el ambiente, por ello ofrecemos asesoría en áreas como; Evaluación de Impacto ambiental, la presentación de la 
              Cédula de Operación Anual (COA),  la gestión de residuos y demás trámites de política ambiental.
              </p>
              <p className="mt-5 text-lg text-gray-500">
              Nuestros servicios están dirigidos a toda la cadena de valor del sector hidrocarburos;  
              Upstream ( Exploración, Perforación y Producción), Midstream (Transformación Industrial, Transporte y almacenamiento) 
               y Downstream (Distribución de hidrocarburos y Expendio al público).
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  