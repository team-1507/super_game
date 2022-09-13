import posts from './posts_mock';
import { ForumPostData } from './types';

export const getTopics = (start = 0, limit = 20): ForumPostData[] => {
    const topics = posts.filter((post) => post.replyto === null);
    return topics
        .sort((a, b) => parseInt(b.timestamp, 10) - parseInt(a.timestamp, 10))
        .slice(start, start + limit);
};

export const getPosts = (topicId: number): ForumPostData[] => {
    return posts
        .filter((post) => post.replyto === topicId)
        .sort((a, b) => parseInt(b.timestamp, 10) - parseInt(a.timestamp, 10));
};

export default { getPosts, getTopics };
