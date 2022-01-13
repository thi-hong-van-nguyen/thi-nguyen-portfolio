import React from 'react'
import resume from '../../photos/resume.pdf'

export default function Download() {
    return (
        <div className='download'>
            {/* <button type="button" className="btn btn-primary"><a href>Download </a></button> */}
            <div className='download_'>
                <button type="button" className="btn btn-primary">
                    {/* <i className="fas fa-file-pdf"></i> */}
                    <i className="far fa-file-pdf"></i>
                    <a href={resume} download='Thi_hong_van_nguyen_Resume'>Download PDF</a>
                </button>
            </div>
        </div>
    )
}