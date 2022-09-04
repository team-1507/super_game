const baseUrl = 'https://ya-praktikum.tech/api/v2/resources';

export const getAvatar = (src: string | undefined): string => {
    return (src ? `${baseUrl}/${src}` : 'https://i.pravatar.cc/300');
};

export default { getAvatar };
