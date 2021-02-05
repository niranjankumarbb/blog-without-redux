import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class PostsList extends React.Component{
    constructor(){
        super()
        this.state={
            posts : []
        }
    }

    componentDidMount(){
         axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            const posts = response.data
            this.setState({posts})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render(){
        return (
        <div>
            <h1> Total Posts :  {this.state.posts.length}</h1>
            <ul>
                {
                    this.state.posts.map((post, i)=>{
                     return <li key={post.id}><Link to={`/posts/${i+1}`}>
                        {post.title}</Link></li>
                    })
                }
            </ul>
        </div>
        )
    }
}

export default PostsList