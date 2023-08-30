
type ModalProps = {
    id: string
    dataTestInside?: string
    dataTestOutside?: string
    size: string
    children: JSX.Element | JSX.Element[]
}

function Modal({ id, dataTestInside, dataTestOutside, size, children}: ModalProps) {
    return (
        <div>
            <input type="checkbox" id={id} className="modal-toggle" />
            <label className="w-full h-full modal" data-test={dataTestOutside} htmlFor={id} >
                <label data-test={dataTestInside} htmlFor="">
                    <div className={`rounded-md bg-base-100 ${size} overflow-y-auto overflow-x-hidden`}>
                        <div className='flex flex-col justify-center mt-5'>
                            {children}
                        </div>
                    </div>
                </label>
            </label>
        </div>
    )
}

export default Modal