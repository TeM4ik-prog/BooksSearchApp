import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

function Modal({modalName}) {

    const dispatch = useDispatch()

    useEffect(() => {

    }, [])

    const isOpened = useSelector(state => state.modal[modalName]).isOpened
    
    return (
        <dialog open={isOpened}>

        </dialog>
    )
}

export default Modal