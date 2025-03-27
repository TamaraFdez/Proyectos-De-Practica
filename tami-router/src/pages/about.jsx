import { Link } from '../Link.jsx'
export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src="https://images.unsplash.com/photo-1576348076752-6085814e5a51?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Foto de unsplash de prueba"
        />
      </div>
      <p> Página sobre Nosotros</p>
     <Link to='/'>Ir a Home</Link>
    </>
  );
}