import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="none"
        src="https://www.soundjay.com/misc/sounds/epic-cinematic-trailer-01.mp3"
      />
      <button
        onClick={toggleMusic}
        className="fixed left-4 bottom-4 z-50 h-14 w-14 rounded-full bg-secondary border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg group"
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? (
          <Volume2 className="h-6 w-6 animate-pulse" />
        ) : (
          <VolumeX className="h-6 w-6" />
        )}
        <span className="absolute left-full ml-3 px-3 py-1 bg-card rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          {isPlaying ? "Pause Music" : "Play Music"}
        </span>
      </button>
    </>
  );
};

export default MusicPlayer;
