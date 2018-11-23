import { convertToSnakeCase } from '../../../lib/utilities'

const H1 = ({ children, ...props }) => (
  <h1 id={convertToSnakeCase(children)} {...props}>
    {children}

    <style jsx>{`
      font-size: 3.5rem;
      font-weight: 400;
      margin-top: 0;
      margin-bottom: 0;
    `}</style>
  </h1>
)

const H2 = ({ children, ...props }) => (
  <h2 id={convertToSnakeCase(children)} {...props}>
    {children}

    <style jsx>{`
      font-size: 2.625rem;
      font-weight: 400;
      margin-bottom: 0;
    `}</style>
  </h2>
)

const H3 = ({ children, ...props }) => (
  <h3 id={convertToSnakeCase(children)} {...props}>
    {children}

    <style jsx>{`
      font-size: 2.1875rem;
      font-weight: 400;
    `}</style>
  </h3>
)

const H4 = ({ children, ...props }) => (
  <h4 id={convertToSnakeCase(children)} {...props}>
    {children}

    <style jsx>{`
      font-size: 1.6rem;
      font-weight: 600;
    `}</style>
  </h4>
)

export { H1, H2, H3, H4 }
