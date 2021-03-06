import ExternalLink from '../../icons/external-link'
import humanizeUrl from 'humanize-url'

function SlideInformation({ title, href }) {
  return (
    <section>
      <h2>{title}</h2>
      <a target="_blank" href={href}>
        {href && humanizeUrl(href)}
        <ExternalLink />
      </a>
      <style jsx>{`
        section {
          padding: 0px 0 54px 0;
          margin: 0 auto;
          text-align: center;
        }

        h2 {
          font-size: 32px;
          font-weight: 400;
          margin-bottom: 0;
        }

        a {
          color: #0000ff;
          font-size: 14px;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        }

        a :global(svg) {
          margin-left: 5px;
        }
      `}</style>
    </section>
  )
}

export default SlideInformation
