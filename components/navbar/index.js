import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link href="/"><div>Home</div></Link>
      <style jsx>{`

        .navbar {
          padding: 1.5rem;
          background-color: silver;
        }
      
      `}</style>
    </div>
  )
}

export default NavBar;