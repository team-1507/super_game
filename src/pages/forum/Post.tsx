import React from 'react';
import { ForumPostProps } from './types';

export const Post = (props: ForumPostProps) => {
    const {
        avatar, username, datetime, header, children,
    } = props;
    return (
        <div className="forum-post">
            <div className="avatar-wrapper">
                <img src={avatar} alt="avatar" />
            </div>
            <div className="post-wrapper">
                <div className="post-header">
                    <span>{username}</span>
                    <time>{datetime}</time>
                </div>
                <h5 className="topic-header">{header}</h5>
                <div className="post-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

Post.defaultProps = {
    header: '',
};

export default Post;
