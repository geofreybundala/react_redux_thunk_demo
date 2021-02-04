import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

const PostList = (props) => {
    props.fetchPosts()
    return (
        <div>
            post List
        </div>
    )
}

export default connect(null,{fetchPosts})(PostList)
