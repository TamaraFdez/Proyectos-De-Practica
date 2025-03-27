
import { Link } from '../Link.jsx'

export default function HomePage() {
    return (
      <>
        <h1>Home</h1>
        <p> Página Home</p>
        <Link to='/about'>Ir a Sobre Nosotros</Link>
      </>
    );
  }