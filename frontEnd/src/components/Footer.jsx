const navigation = {
    main: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Jobs', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Accessibility', href: '#' },
      { name: 'Partners', href: '#' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: (props) => (
          <img className="w-40" src="https://iktanstrategies.com/wp-content/uploads/2022/08/LIT-300x108.png" alt="" />
        ),
      },
      {
        name: 'Instagram',
        href: '#',
        icon: (props) => (
            <img className="w-40" src="https://iktanstrategies.com/wp-content/uploads/2021/08/LOGO-IKTAN-STRATEGIES-alta-calidad-344x107.png" alt="" />
          ),
      },
      {
        name: 'Twitter',
        href: '#',
        icon: (props) => (
            <img className="w-44" src="https://iktanstrategies.com/wp-content/uploads/2021/04/Logo-Iktan-Ambiental.png" alt="" />
          ),
      },
    ],
  }
  
  export default function Example() {
    return (
      <footer className="bg-white -mt-8">
        <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">

          <div className="mt-8 flex justify-center space-x-16 ">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-base text-gray-400">&copy; {new Date().getFullYear()} Your Company, Inc. Todos los derechos reservados.</p>
        </div>
      </footer>
    )
  }
  