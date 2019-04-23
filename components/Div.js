const Div = (props) => (
  <>
    <div>
      {props.children}
    </div>
    <style jsx>{`
      div {
        background: #EDE7F6;
        padding: 1.5rem;
        border-radius: 1rem;
        content: ${props.name}
      }
    `}</style>
  </>
)

export default Div