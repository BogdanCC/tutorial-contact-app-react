import React, { Component } from 'react'
import loading from '../../orb.gif';

export default class Test extends Component {
    state = {
        loading: true,
        posts: []
    }
    componentDidMount() {
        console.log('componentDidMount()');
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => this.setState({loading: false, posts: data}));
    }
    
    render() {
        console.log('component render()');
        return (
            this.state.loading ? 
                <div style={{height: '300px', width: '300px', margin: '300px auto 0 auto'}}>
                    <img src={loading} className="img-fluid" alt="loading" />  
                </div>
                :
                this.state.posts.map(post => (
                <div key={post.id}>
                    <h1 className="display-2">{post.name}</h1>
                    <h1 className="display-5">{post.email}</h1>
                    <p className="lead">{post.body}</p>
                </div>))     
        )          
    }
}
