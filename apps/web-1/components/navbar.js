import Link from 'next/link'

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="team">
          <a>Team</a>
        </Link>
      </li>
    </ul>
  )
}