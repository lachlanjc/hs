import RoundButton from '../round-button'

const Intro = () => (
  <section>
    <h1>Good morning.</h1>
    <p>
      In a world with more problems than ever, we need to take back the power.
    </p>
    <p>Here’s a starter guide for young people.</p>
    <RoundButton color="primary" href="/docs">
      Start reading »
    </RoundButton>
    <style jsx>{`
      section {
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
      }
      h1 {
        font-size: 64px;
        font-weight: 400;
        margin: 0;
        padding: 0;
      }
      p {
        color: #666666;
        font-size: 20px;
        font-weight: 400;
        margin-top: 16px;
        margin-bottom: 0;
      }
      p:last-of-type {
        margin-bottom: 48px;
      }
      strong {
        color: #000000;
      }
      @media (max-width: 768px) {
        h1 {
          font-size: 48px;
        }
      }
    `}</style>
  </section>
)

export default Intro
