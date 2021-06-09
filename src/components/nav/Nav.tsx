import React from 'react'

const Nav:React.FC<{collapse:boolean}> = ({children, collapse}) => {
    
    return (
        <nav className={`header__nav ${collapse?'hide':''}`}>
            {children}
        </nav>
    )
}

export default Nav
