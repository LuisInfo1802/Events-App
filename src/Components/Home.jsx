import {Link} from 'react-router-dom'
function Home() {
  return (
    <div>
      <h1>Hola home</h1>
      <Link to="/casita">casa</Link>
    </div>
  );
}

export default Home;
