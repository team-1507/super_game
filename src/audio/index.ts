function audio (src: string) {
    const audioTrack = new Audio();
    audioTrack.src = src;
    audioTrack.autoplay = true;
}

export default audio;
