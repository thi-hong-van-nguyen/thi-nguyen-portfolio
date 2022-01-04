import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getActiveKey } from '../../redux/actions'

function Resume(props) {
    useEffect(() => {
        props.getActiveKey('resume')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div>resume</div>
    )
}

export default connect(null, { getActiveKey })(Resume)

