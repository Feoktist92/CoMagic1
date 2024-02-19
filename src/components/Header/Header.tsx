import { Link } from 'react-router-dom'
import cls from './Header.module.css'
export const Header = () => {
    return (
        <header className={cls.Header}>
            <nav className={cls.nav}>
                <Link to="/">Button</Link>
                <Link to="/time">Time</Link>
                <Link to="/form">Form</Link>
            </nav>
        </header>
    )
}

