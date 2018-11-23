export const Blockquote = ({ children, ...props }) => (
  <blockquote {...props}>
    {children}

    <style jsx>{`
      blockquote {
        padding: 12px 0;
        border-left: 4px solid #000;
        margin-left: 0;
        padding-left: 24px;
      }

      blockquote :global(p) {
        margin: 0;
      }
    `}</style>
  </blockquote>
)
