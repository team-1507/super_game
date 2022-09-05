import { AudioParams } from './types';

function audio({ src, loop = false, volume = 1 }: AudioParams) {
    const audioTrack = new Audio();
    audioTrack.src = src;
    audioTrack.autoplay = true;
    audioTrack.loop = loop;
    audioTrack.volume = volume;
    return audioTrack as HTMLMediaElement;
}

export default audio;
