import pkg from '@ffmpeg-installer/ffmpeg';
const { path } = pkg;
import Ffmpeg from 'fluent-ffmpeg';

Ffmpeg.setFfmpegPath(path);
export async function convertfile(path: string) {
    return new Promise((resolve, reject) => {
        Ffmpeg(path)
            .outputFormat('s16le')
            .audioFrequency(16000)
            .outputOptions('-acodec pcm_s16le')
            .audioChannels(1)
            .duration(10)
            .output('node_shazam_temp.pcm')
            .on('end', () => {
                try { 
                    resolve(undefined);
                } catch (error) {
                    reject(error);
                }
            })
            .on('error', reject)
            .run();
    });
}

export async function tomp3(path: string) {
    return new Promise((resolve, reject) => {
        Ffmpeg(path)
            .output('node_shazam_temp.mp3')
            .on('end', () => {
                try { 
                    resolve(undefined);
                } catch (error) {
                    reject(error);
                }
            })
            .on('error', reject)
            .run();
    });
} 