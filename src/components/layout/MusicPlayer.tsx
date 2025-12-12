import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('canplaythrough', () => setIsLoaded(true));
      audioRef.current.addEventListener('error', () => setError(true));
    }
  }, []);

  const toggleMusic = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (err) {
        console.error('Error playing audio:', err);
        setError(true);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://www.bensound.com/bensound-music/bensound-energy.mp3"
      />
      <button
        onClick={toggleMusic}
        className="fixed left-4 bottom-4 z-50 h-14 w-14 rounded-full bg-secondary border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg group"
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        {error ? (
          <Music className="h-6 w-6 opacity-50" />
        ) : isPlaying ? (
          <Volume2 className="h-6 w-6 animate-pulse" />
        ) : (
          <VolumeX className="h-6 w-6" />
        )}
        <span className="absolute left-full ml-3 px-3 py-1 bg-card rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          {error ? "Audio unavailable" : isPlaying ? "Pause Music" : "Play Music"}
        </span>
      </button>
    </>
  );
};

export default MusicPlayer;
