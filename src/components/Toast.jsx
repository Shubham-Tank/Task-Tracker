import React, { useEffect, useRef, useState } from 'react'

const Toast = ({ message }) => {

    const [visible, setVisible] = useState(false)

    const show = useRef(true)

    const style = {
        transition: 'opacity 1s',
        position: 'absolute',
        fontStyle: 'oblique',
        width: 'fit-content',
        left: '0',
        right: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
        top: '80vh',
        padding: '0.5rem 1rem',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.7)',
        borderRadius: '1.3rem / 50%'
    }

    useEffect(() => {

        if (show.current) {
            setTimeout(() => {
                setVisible(false)
            }, 1500)
            show.current = false
            setVisible(true)
        }
        return () => {
            if (!visible) {
                show.current = true
            }
        }

    })

    return (
        <p style={
            (visible) ? { ...style, opacity: '1' } : { ...style, opacity: '0' }
        }>{message}</p>
    )
}

export default Toast