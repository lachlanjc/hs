import { Component, Fragment } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import { format, parse } from 'url'
import Head from '../../components/docs/head'
import Header from '../../components/docs/header'
import Sidebar from '../../components/docs/sidebar'
import { H1, H2, H3, H4 } from '../../components/docs/text/headings'
import { Blockquote } from '../../components/docs/text/quotes'
import { Highlight } from '../../components/docs/text/highlights'
import { InlineCode, Code } from '../../components/docs/text/code'
import { GenericLink } from '../../components/docs/text/link'
import Heading from '../../components/docs/heading'
import NProgress from 'nprogress'
import debounce from 'lodash.debounce'
import RouterEvents from '../../lib/router-events'
import { trackPageview } from '../../lib/analytics'
import dynamic from 'next/dynamic'

dynamic(() => import('intersection-observer'), { ssr: false })

const start = debounce(NProgress.start, 200)
RouterEvents.on('routeChangeStart', start)
RouterEvents.on('routeChangeComplete', url => {
  trackPageview(url)
  start.cancel()
  NProgress.done()
})
RouterEvents.on('routeChangeError', () => {
  start.cancel()
  NProgress.done()
})

function changeHash(hash) {
  const { pathname, query } = Router

  const parsedUrl = parse(location.href)
  parsedUrl.hash = hash

  Router.router.changeState(
    'replaceState',
    format({ pathname, query }),
    format(parsedUrl)
  )
}

export default class Documentation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSelection: null
    }
    this.contentNode = null
    this.observer = null

    this.updateSelected = this.updateSelected.bind(this)
    this.onHashChange = this.onHashChange.bind(this)
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.onHashChange)

    const nodes = [...this.contentNode.querySelectorAll('[id]')]
    const intersectingTargets = new Set()

    this.observer = new IntersectionObserver(entries => {
      for (const { isIntersecting, target } of entries) {
        if (isIntersecting) {
          intersectingTargets.add(target)
        } else {
          intersectingTargets.delete(target)
        }
      }

      if (!intersectingTargets.size) return

      const sorted = [...intersectingTargets].sort(
        (a, b) => nodes.indexOf(a) - nodes.indexOf(b)
      )

      const hash = '#' + (sorted[0].id || '')
      if (location.hash !== hash) {
        changeHash(hash)
        this.updateSelected(hash)
      }
    })

    for (const node of nodes) {
      this.observer.observe(node)
    }

    const { hash } = window.location
    this.setState({ currentSelection: hash })
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.onHashChange)

    this.observer.disconnect()
    this.observer = null
  }

  updateSelected = hash => {
    this.setState({
      currentSelection: hash
    })
  }

  onHashChange() {
    this.updateSelected(window.location.hash)
  }

  render() {
    return (
      <Fragment>
        <Head title="Read the Guide">
          <style
            dangerouslySetInnerHTML={{
              __html: `
              html {
                height: 100%;
                box-sizing: border-box;
                font-size: 62.5%;
              }

              *,
              *:before,
              *:after {
                box-sizing: inherit;
              }

              body {
                position: relative;
                min-height: 100%;
                margin: 0;
                padding-bottom: 6rem;
                font-family: "Neue Haas Unica Web", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Helvetica Neue", sans-serif;
                text-rendering: optimizeLegibility;
                line-height: 1.75;
                font-size: 1.75rem;
              }

              p,
              .serif {
                font-family: "Tiempos Text Web","Georgia","Times New Roman",serif;
              }

              a {
                -webkit-tap-highlight-color: rgba(0,0,0,0);
              }

              html, body {
                background-color: #FFF;
                color: #000;
              }

              ::selection {
                background-color: #000;
                color: #FFF;
              }

              .footnote {
                border-radius: 6px;
                padding: 1rem;
                background-color: #fafafa;
                color: #666666;
                margin: 1rem 0;
              }
              .footnote.footnote--short {
                display: flex;
                align-items: center;
              }
              .footnote.footnote--short h4 {
                margin-bottom: 0;
                margin-right: 0.25rem;
              }
              .footnote h4 {
                text-transform: uppercase;
                letter-spacing: .1em;
                font-size: 1.25rem;
                font-weight: 400;
                margin-top: 0;
                margin-bottom: 0.25rem;
              }
              .footnote p {
                margin: 0;
                font-family: inherit;
                font-size: 1.5rem;
              }
              .footnote p + p,
              .footnote p + h4 {
                margin-top: 0.75rem;
              }
              .footnote a {
                color: inherit;
                text-decoration: underline;
              }

              h2,
              h3 {
                font-weight: 400;
              }
            `
            }}
          />
        </Head>

        <Header />

        <div className="documentation">
          <Sidebar
            updateSelected={this.updateSelected}
            currentSelection={this.state.currentSelection}
          />

          <div className="documentation__content">
            <div className="documentation__header">
              <H1 active="something">{this.props.meta.title}</H1>
            </div>

            <div
              className="documentation__content"
              ref={ref => (this.contentNode = ref)}
            >
              {this.props.children}
            </div>
          </div>

          <style jsx>{`
            .documentation {
              display: flex;
              padding-top: 144px;
            }

            .documentation__sidebar {
              display: flex;
              flex-direction: column;
              padding-left: 56px;
            }

            .documentation__header h1 {
              margin-top: 0;
            }

            .documentation__content {
              width: calc(100vw - 312px);
              max-width: 600px;
              padding-right: 56px;
            }
          `}</style>
        </div>
      </Fragment>
    )
  }
}

export const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  blockquote: Blockquote,
  strong: Highlight,
  code: Code,
  inlineCode: InlineCode,
  a: GenericLink
}
