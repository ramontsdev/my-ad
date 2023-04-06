import { Container } from "./styles";

const Dashboard = () => {
  function toggleMenu() {

  }

  return (
    <Container>
      <button className="burger" onClick={toggleMenu}>
        menu
      </button>
      <nav className="navbar">
        <div className="logo">
          <img src="logo.svg" alt="" />
          <span>My Ad</span>
        </div>

        <div className="search">
          <span>search</span>
          <input type="text" placeholder="Search e-mail" />
        </div>

        <nav>
          <button>help</button>
          <img src="joe.png" alt="" />
        </nav>
      </nav>
    </Container>
  )
}

export default Dashboard;
