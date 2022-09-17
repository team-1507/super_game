import posts from './posts_mock';
import { ForumPostData, SendForumPostData } from './types';

export const getTopics = (start = 0, limit = 20): ForumPostData[] => {
    const topics = posts.filter((post) => post.replyto === null);
    return topics
        .sort((a, b) => parseInt(b.timestamp, 10) - parseInt(a.timestamp, 10))
        .slice(start, start + limit);
};

export const getPosts = (topicId: number): ForumPostData[] => {
    return posts
        .filter((post) => post.replyto === topicId)
        .sort((a, b) => parseInt(a.timestamp, 10) - parseInt(b.timestamp, 10));
};

export const sendPost = (data: SendForumPostData) => {
    const newId = posts[posts.length - 1].id + 1;
    posts.push(
        { ...data, id: newId, timestamp: Date.now().toString() },
    );
    return newId;
};

export default { getPosts, getTopics, sendPost };
