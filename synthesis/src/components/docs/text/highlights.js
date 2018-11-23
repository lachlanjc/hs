export const Highlight = ({ children, ...props }) => (
  <mark {...props}>
    {children}

    <style jsx>{`
      mark {
        padding: 0 0.5em;
        border-radius: 1em 0 1em 0;
        background: linear-gradient(
          -100deg,
          rgba(250, 247, 133, 0.3),
          rgba(250, 247, 133, 0.7) 95%,
          rgba(250, 247, 133, 0.1)
        );
      }
    `}</style>
  </mark>
)
