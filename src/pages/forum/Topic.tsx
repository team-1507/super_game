import React from 'react';
import { Link } from 'react-router-dom';
import { timestampToHuman } from 'src/utils';
import CloseButton from '../../components/icons/CloseButton';
import ReplyCounterArrow from '../../components/icons/ReplyCounterArrow';
import { Post } from './Post';
import { ReplyForm } from './ReplyForm';
import { ForumTopicProps } from './types';

export const Topic = (props: ForumTopicProps) => {
    const {
        expanded,
        topicData: {
            id, title, username, avatar, timestamp, text,
        },
        posts,
    } = props;
    const humanDate = timestampToHuman(timestamp);
    const lastPostDT = timestampToHuman(posts[posts.length - 1].timestamp);

    return (
        <article className={`forum-topic ${expanded ? 'expanded' : ''}`} id={`forum-topic-${id}`}>
            <Link to="/forum" className="close-button">
                <CloseButton />
            </Link>
            <aside className="forum-topic-reply-counter" title="Replies to this post">
                <ReplyCounterArrow />
                <span className="reply-counter-number">{posts.length}</span>
                <time>
                    (
                    {`${lastPostDT.day}.${lastPostDT.month}.${lastPostDT.year}`}
                    )
                </time>
            </aside>
            <Post
                avatar={avatar}
                username={username}
                datetime={`${humanDate.day}.${humanDate.month}.${humanDate.year} ${humanDate.hours}:${humanDate.minutes}`}
                header={title}
            >
                {text}
            </Post>
            {posts.map((post) => {
                const dt = timestampToHuman(post.timestamp);
                return (
                    <Post
                        avatar={post.avatar}
                        username={post.username}
                        datetime={`${dt.day}.${dt.month}.${dt.year} ${dt.hours}:${dt.minutes}`}
                    >
                        {post.text}
                    </Post>
                );
            })}
            <ReplyForm />
            <Link to={`/forum/${id}`} className="forum-topic-link" />
        </article>
    );
};

export default Topic;
