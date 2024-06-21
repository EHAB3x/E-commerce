import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <Container className="notFound">
        <h1>404</h1>
        <p>Page Not Found</p>
        <Link to={"/"} replace={true}>Go Back To Home Page</Link>
    </Container>
  )
}

export default Error