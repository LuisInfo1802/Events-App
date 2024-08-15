import {Link,Outlet} from 'react-router-dom'


 function Layout()
{
    return(
        <div>

       
        <nav>
            <ul>
                <li>
                    <Link to='/Home'>Home</Link>
                </li>
                <li>
                    <Link to='/Casa'>Casa</Link>
                </li>
            </ul>
        </nav>
        <Outlet></Outlet>
        </div>
    )

}
export default Layout