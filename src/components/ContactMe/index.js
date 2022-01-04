import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getActiveKey } from '../../redux/actions'

function ContactMe(props) {
    useEffect(() => {
        props.getActiveKey('contact-me')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>contact me</div>
    )
}


export default connect(null, { getActiveKey })(ContactMe)
