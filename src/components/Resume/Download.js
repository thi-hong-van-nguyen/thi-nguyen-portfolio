import React from 'react';
import resume from '../../photos/resume.pdf';

export default function Download() {
	return (
		<div className='download'>
			<div className='download_'>
				<button type='button' className='btn btn-primary'>
					<i className='far fa-file-pdf'></i>
					<a href={resume} download='Thi_hong_van_nguyen_Resume'>
						Download PDF
					</a>
				</button>
			</div>
		</div>
	);
}
