import React from 'react'

const FirstBlock:React.FC = ({children}) => {
    return (
        <div className='firstblock'>
            <div className="firstblock__img">
                <div className="firstblock__cover">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default FirstBlock
