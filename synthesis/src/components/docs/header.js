import { GenericLink } from './text/link'

export default function Header() {
  return (
    <header>
      <GenericLink href="/">
        <a>Good Morning</a>
      </GenericLink>

      <style jsx>{`
        header {
          position: fixed;
          z-index: 1000;
          top: 0;
          display: flex;
          align-items: center;
          height: 144px;
          padding: 0 56px;
        }

        a {
          color: #222;
        }
      `}</style>
    </header>
  )
}
