import React, { HTMLProps } from 'react';
import { Form } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

import CloseButton from '../../components/icons/CloseButton';
import CreatePost from '../../components/icons/CreatePost';
import HeaderBackButton from '../../components/sections/HeaderBackButton';
// import styles from './Forum.module.scss';
import './Forum.scss';

type ForumPostProps = HTMLProps<HTMLElement> & {
    avatar: string,
    username: string,
    datetime: string,
    header?: string,
};

const Post = (props: ForumPostProps) => {
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
                    { children }
                </div>
            </div>
        </div>
    );
};

Post.defaultProps = {
    header: '',
};

const ReplyForm = () => (
    <div className="reply-form-wrapper">
        <Form
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
            className="reply-form"
        >
            <Form.Item label="Reply::">
                {/* почему-то съедает одно двоеточие, с двумя работает */}
                <TextArea rows={3} />
            </Form.Item>
        </Form>
    </div>
);

const Forum = () => (
    <main className="forum-page">
        <HeaderBackButton header="Forum">
            <CreatePost />
        </HeaderBackButton>
        <section className="forum-body">
            <article className="forum-topic">
                <button className="close-button">
                    <CloseButton />
                </button>
                <Post
                    avatar="https://i.pravatar.cc/90"
                    username="Yingmamus"
                    datetime="25.02.2021 14:55"
                    header="How does it feel to be a champion?"
                >
                    One morning, when Gregor Samsa woke from troubled dreams, he found hims
                    elf transformed in his bed into a horrible vermin. He lay on his armour
                    -like back, and if he lifted his head a little he could see his brown b
                    elly, slightly domed and divided by arches into stiff sections. The bed
                    ding was hardly able to cover it and seemed ready to slide off any mome
                    nt. His many legs, pitifully thin compared with the size of the rest o
                    f him, waved about helplessly as he looked. What`s happened to me? h
                    e thought. It wasn`t a dream. His room, a proper human room although a l
                    ittle too small, lay peacefully between its four familiar walls. A colle
                    ction of textile samples lay spread out on the table - Samsa was a trave
                    lling salesman - and above it there hung a picture that he had recentl
                    y cut out of an illustrated magazine and housed in a nice, gilded frame
                    . It showed a lady fitted out with a fur hat and fur boa who sat upright
                    , raising a heavy fur muff that covered the whole of her lower arm towar
                    ds the viewer. Gregor then turned to look out the window at the dull wea
                    ther.
                </Post>
                <Post
                    avatar="https://i.pravatar.cc/91"
                    username="Naihorist"
                    datetime="26.02.2021 18:04"
                >
                    One morning, when Gregor Samsa woke from troubled dreams, he found hims
                    elf transformed in his bed into a horrible vermin. He lay on his armour
                    -like back, and if he lifted his head a little he could see his brown b
                    elly, slightly domed and divided by arches into stiff sections. The bed
                    ding was hardly able to cover it and seemed ready to slide off any mome
                    nt. His many legs, pitifully thin compared with the size of the rest o
                    f him, waved about helplessly as he looked. What`s happened to me? h
                    e thought. It wasn`t a dream. His room, a proper human room although a l
                    ittle too small, lay peacefully between its four familiar walls. A colle
                    ction of textile samples lay spread out on the table - Samsa was a trave
                    lling salesman - and above it there hung a picture that he had recentl
                    y cut out of an illustrated magazine and housed in a nice, gilded frame
                    . It showed a lady fitted out with a fur hat and fur boa who sat upright
                    , raising a heavy fur muff that covered the whole of her lower arm towar
                    ds the viewer. Gregor then turned to look out the window at the dull wea
                    ther.
                </Post>
                <ReplyForm />
            </article>
            <article className="forum-topic">
                <button className="close-button">
                    <CloseButton />
                </button>
                <Post
                    avatar="https://i.pravatar.cc/90"
                    username="Yingmamus"
                    datetime="25.02.2021 14:55"
                    header="How does it feel to be a champion?"
                >
                    One morning, when Gregor Samsa woke from troubled dreams, he found hims
                    elf transformed in his bed into a horrible vermin. He lay on his armour
                    -like back, and if he lifted his head a little he could see his brown b
                    elly, slightly domed and divided by arches into stiff sections. The bed
                    ding was hardly able to cover it and seemed ready to slide off any mome
                    nt. His many legs, pitifully thin compared with the size of the rest o
                    f him, waved about helplessly as he looked. What`s happened to me? h
                    e thought. It wasn`t a dream. His room, a proper human room although a l
                    ittle too small, lay peacefully between its four familiar walls. A colle
                    ction of textile samples lay spread out on the table - Samsa was a trave
                    lling salesman - and above it there hung a picture that he had recentl
                    y cut out of an illustrated magazine and housed in a nice, gilded frame
                    . It showed a lady fitted out with a fur hat and fur boa who sat upright
                    , raising a heavy fur muff that covered the whole of her lower arm towar
                    ds the viewer. Gregor then turned to look out the window at the dull wea
                    ther.
                </Post>
                <Post
                    avatar="https://i.pravatar.cc/91"
                    username="Naihorist"
                    datetime="26.02.2021 18:04"
                >
                    One morning, when Gregor Samsa woke from troubled dreams, he found hims
                    elf transformed in his bed into a horrible vermin. He lay on his armour
                    -like back, and if he lifted his head a little he could see his brown b
                    elly, slightly domed and divided by arches into stiff sections. The bed
                    ding was hardly able to cover it and seemed ready to slide off any mome
                    nt. His many legs, pitifully thin compared with the size of the rest o
                    f him, waved about helplessly as he looked. What`s happened to me? h
                    e thought. It wasn`t a dream. His room, a proper human room although a l
                    ittle too small, lay peacefully between its four familiar walls. A colle
                    ction of textile samples lay spread out on the table - Samsa was a trave
                    lling salesman - and above it there hung a picture that he had recentl
                    y cut out of an illustrated magazine and housed in a nice, gilded frame
                    . It showed a lady fitted out with a fur hat and fur boa who sat upright
                    , raising a heavy fur muff that covered the whole of her lower arm towar
                    ds the viewer. Gregor then turned to look out the window at the dull wea
                    ther.
                </Post>
            </article>
        </section>
    </main>
);

export default Forum;
