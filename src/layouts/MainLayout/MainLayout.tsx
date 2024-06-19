import { Container } from "react-bootstrap";
import styles from "./styles.module.css";

const {container, wrapper} = styles;

const MainLayout = () => {
  return (
    <Container className={container}>
        <div className={wrapper}></div>
    </Container>
  )
}

export default MainLayout