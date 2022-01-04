import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getActiveKey } from '../../redux/actions'

function Portfolio(props) {
    console.log('portfolio renders')
    useEffect(() => {
        props.getActiveKey('portfolio')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>portfolio</div>
    )
}



export default connect(null, { getActiveKey })(Portfolio)
