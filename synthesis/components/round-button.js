import Link from 'next/link'

export default ({ children, color, href, className }) => (
  <Link href={href}>
    <a className={`${className ? className + ' ' : ''}${color}`}>
      <span>{children}</span>
      <style jsx>{`
        a {
          display: flex;
          justify-content: center;
          align-content: center;
          align-items: center;
          width: 200px;
          height: 50px;
          border-radius: 50px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
          cursor: pointer;
          text-decoration: none;
        }
        span {
          font-size: 14px;
          line-height: 16px;
          height: 16px;
        }
        .white {
          background-color: #ffffff;
          color: #000000;
          transition: all 0.2s ease;
        }
        .black {
          background-color: #000000;
          color: #ffffff;
          transition: all 0.2s ease;
        }
        a.white:hover {
          background-color: #000000;
          color: #ffffff;
          transition: all 0.2s ease;
        }
        a.black:hover {
          background-color: #ffffff;
          color: #000000;
          transition: all 0.2s ease;
        }
      `}</style>
    </a>
  </Link>
)
