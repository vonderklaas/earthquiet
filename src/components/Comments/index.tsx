import { useEffect, useRef } from 'react';

export type CommentsProps = {
  commentsUrl: string;
};

const Comments = (props: CommentsProps) => {
  const commentBox = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(`comments-${props.commentsUrl}`);
    const scriptEl = document.createElement('script');
    scriptEl.setAttribute('src', 'https://utteranc.es/client.js');
    scriptEl.setAttribute('crossorigin', 'anonymous');
    scriptEl.setAttribute('async', 'true');
    scriptEl.setAttribute(
      'repo',
      `garbalau-github/comments-${props.commentsUrl}`
    );
    scriptEl.setAttribute('issue-term', 'title');
    scriptEl.setAttribute('theme', 'github-light');
    commentBox?.current?.appendChild(scriptEl);
  }, [props.commentsUrl]);

  return (
    <div id='comments' style={{ width: '100%' }}>
      <div ref={commentBox}></div>
    </div>
  );
};

export default Comments;
