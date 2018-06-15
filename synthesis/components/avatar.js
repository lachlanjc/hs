import Link from 'next/link'

export default () => (
  <Link href="https://lachlanjc.me/">
    <a target="_blank" rel="noopener" className="zeit-logo">
      <img
        src="https://cdn.glitch.com/77e3dd13-0dc0-4420-a609-d0c20ad146be%2F2018-profile-256.jpg?1528309551479"
        width={32}
      />
      <style jsx>{`
        img {
          border-radius: 128px;
          transition: 0.25s ease-out box-shadow;
        }
        img:hover {
          box-shadow: 0 0 0 1px #fff, 0 0 0 3px #eee;
        }
      `}</style>
    </a>
  </Link>
)
