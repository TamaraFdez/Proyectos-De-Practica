import { Link } from '../Link.jsx'

const i18n= {
  es:{
    title: 'Sobre Nosotros',
    description: 'Hola Soy Tamara y esto es un proyecto de prueba',
    button: 'Ir a Home'
  },
  en:{
    title: 'About Us',
    description: 'Hello I am Tamara and this is a test project',
    button: 'Go to Home'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}
export default function AboutPage({ routeParams }) {
const i18n = useI18n(routeParams.lang ?? 'es')
  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img
          src="https://images.unsplash.com/photo-1576348076752-6085814e5a51?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Foto de unsplash de prueba"
        />
      </div>
      <p> {i18n.description}</p>
     <Link to='/'>Ir a Home</Link>
    </>
  );
}