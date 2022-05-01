import React, { Component } from 'react';

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.commentBox = React.createRef();
  }

  componentDidMount() {
    console.log(`comments-${this.props.commentsUrl}`);
    let scriptEl = document.createElement('script');
    scriptEl.setAttribute('src', 'https://utteranc.es/client.js');
    scriptEl.setAttribute('crossorigin', 'anonymous');
    scriptEl.setAttribute('async', true);
    scriptEl.setAttribute(
      'repo',
      `garbalau-github/comments-${this.props.commentsUrl}`
    );
    scriptEl.setAttribute('issue-term', 'title');
    scriptEl.setAttribute('theme', 'github-light');
    this.commentBox.current.appendChild(scriptEl);
  }

  render() {
    return (
      <div id='comments' style={{ width: '100%' }}>
        <div ref={this.commentBox}></div>
      </div>
    );
  }
}
