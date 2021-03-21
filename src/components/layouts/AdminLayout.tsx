import React from 'react'
import NavbarAdmin from '../shared/NavbarAdmin'

type Props = {
    children?: JSX.Element | JSX.Element[]
}

const AdminLayout = ({children}:Props) => {
    return (
        <>
            <NavbarAdmin />
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mx-auto sm:pt-20 lg:pt-8">
                {children}
            </div>
        </>
    )
}

export default AdminLayout
