import "./navbar.scss"

function Navbar() {
  return (
    <nav>
      <div className="left">
        <a href="/">
          <img src="/logo.png" alt="" />
          <span>LamaEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agent</a>
      </div>
      <div className="right">
      <a href="/">Sign In</a>
      <a href="/">Sign Up</a>
      </div>
    </nav>
  );
}

export default Navbar;
