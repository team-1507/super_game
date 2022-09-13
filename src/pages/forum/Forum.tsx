import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import HeaderBackButton from '../../components/sections/HeaderBackButton';
import './Forum.scss';
import Pencil from '../../components/icons/Pencil';
import { Topic } from './Topic';
import { getPosts, getTopics } from '../../api/forum/forum';

const Forum = () => {
    const { topicId } = useParams();
    const activeTopicId = topicId === undefined ? undefined : parseInt(topicId, 10);
    const topics = getTopics();
    useEffect(() => {
        if (activeTopicId) {
            const activeTopicEl = document.getElementById(`forum-topic-${activeTopicId}`);
            if (activeTopicEl) {
                activeTopicEl.scrollIntoView(true);
            }
        }
    }, [activeTopicId]);
    return (
        <main className="forum-page">
            <HeaderBackButton header="Forum">
                <Pencil />
            </HeaderBackButton>
            <section className="forum-body">
                {topics.map((topic) => (
                    <Topic
                        topicData={topic}
                        posts={getPosts(topic.id)}
                        expanded={topic.id === activeTopicId}
                    />
                ))}
            </section>
        </main>
    );
};

export default Forum;
