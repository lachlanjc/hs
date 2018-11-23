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
          width: 256px;
          height: 48px;
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
          color: rgb(189, 16, 224);
          transition: all 0.2s ease;
        }
        .primary {
          background-color: rgb(189, 16, 224);
          color: #ffffff;
          transition: all 0.2s ease;
        }
        a.white:hover {
          background-color: #000000;
          color: #ffffff;
          transition: all 0.2s ease;
        }
        a.primary:hover {
          background-color: #ffffff;
          color: rgb(189, 16, 224);
          transition: all 0.2s ease;
        }
      `}</style>
    </a>
  </Link>
)
