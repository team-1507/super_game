import { HTMLProps } from 'react';
import { ForumPostData } from 'src/api/forum/types';

export type ForumPostProps = HTMLProps<HTMLElement> & {
    avatar: string;
    username: string;
    datetime: string;
    header?: string;
};

export type ForumTopicProps = {
    expanded?: boolean;
    topicData: ForumPostData;
    posts: ForumPostData[];
};
