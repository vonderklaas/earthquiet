import React, { Component } from 'react';
import style from './Comments.module.scss';

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.commentBox = React.createRef();
  }

  componentDidMount() {
    let scriptEl = document.createElement('script');
    scriptEl.setAttribute('src', 'https://utteranc.es/client.js');
    scriptEl.setAttribute('crossorigin', 'anonymous');
    scriptEl.setAttribute('async', true);
    scriptEl.setAttribute('repo', 'garbalau-github/earthquiet-comments');
    scriptEl.setAttribute('issue-term', 'title');
    scriptEl.setAttribute('theme', 'github-light');
    this.commentBox.current.appendChild(scriptEl);
  }

  render() {
    return (
      <div className={style.comments} id='comments' style={{ width: '100%' }}>
        <div ref={this.commentBox}></div>
      </div>
    );
  }
}
