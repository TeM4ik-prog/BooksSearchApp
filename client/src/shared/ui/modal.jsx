import { init } from "#shared/model/modalSlice.js"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import "./modal.scss"
function Modal({modalName, children}) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(init({name: modalName}))
    }, [])

    const isOpened = useSelector(state => state.modal.modals[modalName])?.isOpened
    
    return (
        <dialog open={isOpened} className="modal">
            { children }
        </dialog>
    )
}

export default Modal