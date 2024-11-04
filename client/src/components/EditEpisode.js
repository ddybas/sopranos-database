import React, { useState } from 'react'
import Modal from "./Modal"

const EditEpisode = () => {

    const [open, setOpen] = useState(false);

    return (
        <>


            <>
                <Modal open={open} onClose={() => setOpen(false)}>
                    <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={() => setOpen(true)}>
                        Edit
                    </button>                
                </Modal>
            </>


        </>
    )
}

export default EditEpisode