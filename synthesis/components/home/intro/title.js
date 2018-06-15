import RoundButton from '../../round-button'

const Title = () => (
  <section>
    <h1>Good morning.</h1>
    <p>
      In a world with more problems than ever, we need to take back the power.
    </p>
    <p>Here’s a starter guide for young people.</p>
    <RoundButton color="primary" href="/read">
      Start reading »
    </RoundButton>
    <style jsx>{`
      section {
        display: flex;
        align-items: center;
        flex-direction: column;
      }
      h1 {
        text-align: center;
        font-size: 64px;
        font-weight: 800;
        margin: 0;
        padding: 0;
      }
      p {
        text-align: center;
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

export default Title
