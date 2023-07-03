import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { VideoList } from '../components/VideoList/VideoList';
import { VideoPlayer } from '../components/VideoPlayer/VideoPlayer';
import videos from '../videos.json';
import { useLogOutRedirect } from '../hooks/useLogOutRedirect';

export const Player = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = link => {
    toast.success('Видео выбрано!!!');
    setSelectedVideo(link);
  };

  useLogOutRedirect();
  return (
    <>
      <Toaster position="bottom-right" />
      <VideoList
        videos={videos}
        onSelect={selectVideo}
        selectedVideo={selectedVideo}
      />
      <VideoPlayer url={selectedVideo} />
    </>
  );
};
