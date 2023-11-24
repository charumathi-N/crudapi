import '../Components/navbar.css'
import { Link } from 'react-router-dom';

function CrudNavbar(){
    return(
      <>
       <nav className='nav'>
        <Link to="/" className='site-title'>Crud</Link>
        <ul>
          <li>
            <Link to='/Home'>Home</Link>
          </li>
          <li>
            <Link to='/CreateUser'>CreateUser</Link>
          </li>
          <li>
            <Link to='/About'>About</Link>
          </li>
        </ul>
       </nav>
      
       </>
    )
}

export default CrudNavbar;