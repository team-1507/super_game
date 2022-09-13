export type ForumPostData = {
    id: number,
    title: string,
    user_id: number,
    username: string,
    avatar: string,
    timestamp: string,
    replyto: number | null,
    text: string,
};
