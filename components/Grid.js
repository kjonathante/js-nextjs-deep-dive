const Grid = (props) => (
  <>
    <div>
      {props.children}
    </div>
    <style jsx>{`
      div {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-gap: 1rem;
      }
    `}</style>
  </>
)

export default Grid