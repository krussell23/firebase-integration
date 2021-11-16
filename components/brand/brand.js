 import stlyes from './styles.module.scss'
 import Logo from './../logo'
 function Brand({tagline, title}) {
    return (
        <header className={stlyes.brand}>
            <Logo/>
            <h1>{title}</h1>
            <p>{tagline}</p>
        </header>
    )
}

export default Brand