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
            <div>
                <h2 className="mb-4 pt-4 pb-4">Just a testing component <i className="fas fa-wrench"></i></h2>
                {this.state.loading ? 
                    <div id="loading-div" style={{marginTop: `${window.innerHeight / 2 - 100}px`}}>
                        <img src={loading} className="img-fluid" alt="loading" />  
                    </div>
                    :
                    this.state.posts.map(post => (
                    <div key={post.id} className="card mb-4">
                        <div className="card-header">Quote</div>
                        <div className="card-body">
                        <blockquote className="blockquote">
                            <p>{post.body}</p>
                            <footer className="blockquote-footer">{post.email}</footer>
                        </blockquote>
                        </div>
                    </div>))}
            </div>
        )          
    }
}
