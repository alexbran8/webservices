import React, { useState, useEffect } from 'react'

import Link from 'next/link'


const UnderConstruction = () => {

    const [animation, setAnimation] = useState('open')
    const [display, setDisplay] = useState(true)
    

    const hide = async (ms) => {

        setAnimation('close')

        await new Promise(r => setTimeout(r, ms))

        // setDisplay(false)

    }

    useEffect(  () => {

        setTimeout(()  => {
           hide(5000)

        }, 6500)
        
    }, [])

    return (
        <div>
            {display ?
                <div className={`dev-env ${animation}`}>Lucrăm la dezvoltarea acestei pagini.
                    <p>Între timp ne puteți contacta sau urmări pe pagina noastră de <a href="https://www.facebook.com/webservices.ro" target="blank">facebook</a>.
                    </p>
                </div>
                : null}
        </div>
    )
}
export default UnderConstruction;