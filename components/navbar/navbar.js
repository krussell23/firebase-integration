import Link from 'next/link' 
 
import {navbar} from './styles.module.scss'
 
 function NavBar(props) {
    return (
        <nav className={navbar}>
            <ul>
                <li>
               <Link href="/">
                 <a>Home</a>
               </Link>
                </li>
                <li>
                <Link href="/login">
                 <a>Login</a>
               </Link>
                </li>
                <li>
                <Link href="/signup">
                 <a>Sign Up</a>
               </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar