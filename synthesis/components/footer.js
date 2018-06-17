import Avatar from './avatar'

const Footer = () => (
  <footer>
    <div className="container">
      <Avatar />
      <nav>
        <a
          className="github"
          href="https://github.com/lachlanjc/edu/blob/master/synthesis"
        >
          Source code
        </a>
      </nav>
    </div>
    <style jsx>{`
      footer {
        background-color: #fafafa;
        border-top: 1px solid #eaeaea;
        border-bottom: 1px solid #eaeaea;
        color: #999999;
        font-size: 14px;
      }

      a {
        text-decoration: none;
        color: #999999;
        font-size: 1.4rem;
        transition: color 0.2s ease;
      }

      a:hover {
        color: black;
      }

      a,
      span {
        margin-left: 10px;
      }

      a:first-child {
        margin-left: 0;
      }

      .container {
        display: flex;
        justify-content: space-between;
        width: 1000px;
        margin: 0 auto;
        padding: 15px 0;
      }

      @media (max-width: 1036px) {
        .container {
          width: 100%;
          padding-left: 18px;
          padding-right: 18px;
        }
      }
    `}</style>
  </footer>
)

export default Footer
