const Avatar = () => (
  <a target="_blank" rel="noopener" href="https://lachlanjc.com/">
    <img src="https://github.com/lachlanjc.png" width={32} />
    <style jsx>{`
      img {
        border-radius: 128px;
        transition: 0.25s ease-out box-shadow;
      }
      img:hover {
        box-shadow: 0 0 0 1px #fff, 0 0 0 3px #eee;
      }
    `}</style>
  </a>
)

export default Avatar
