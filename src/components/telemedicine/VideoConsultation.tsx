import React, { useState } from 'react';
import { Video, VideoOff, Mic, MicOff, Phone, MessageSquare, Users, Settings, Monitor, Maximize, Minimize } from 'lucide-react';

interface VideoConsultationProps {
  appointmentId: string;
  doctorName: string;
  patientName: string;
  startTime: string;
  duration: number; // in minutes
  onEnd: () => void;
}

const VideoConsultation: React.FC<VideoConsultationProps> = ({
  appointmentId,
  doctorName,
  patientName,
  startTime,
  duration,
  onEnd
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0); // in seconds

  // Mock timer effect
  React.useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime(prev => {
        if (prev >= duration * 60) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [duration]);

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleMute = () => setIsMuted(!isMuted);
  const toggleVideo = () => setIsVideoOn(!isVideoOn);
  const toggleFullScreen = () => setIsFullScreen(!isFullScreen);
  const toggleChat = () => setIsChatOpen(!isChatOpen);
  const toggleScreenShare = () => setIsScreenSharing(!isScreenSharing);

  // Calculate remaining time
  const remainingSeconds = (duration * 60) - elapsedTime;
  const remainingTime = formatTime(remainingSeconds > 0 ? remainingSeconds : 0);
  
  const formattedElapsedTime = formatTime(elapsedTime);

  return (
    <div className={`bg-gray-900 text-white ${isFullScreen ? 'fixed inset-0 z-50' : 'relative rounded-xl overflow-hidden h-[600px]'}`}>
      {/* Video area */}
      <div className="relative h-full flex flex-col">
        {/* Main video feed */}
        <div className="flex-1 bg-black relative overflow-hidden">
          {/* This would be replaced with actual video component */}
          <div className="absolute inset-0 flex items-center justify-center">
            {!isVideoOn ? (
              <div className="text-center p-8 bg-gray-800 rounded-lg">
                <VideoOff className="h-16 w-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400">Camera is turned off</p>
              </div>
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                {/* This is where the actual video would go */}
                <div className="text-center">
                  <Video className="h-16 w-16 text-teal-500 mx-auto mb-4" />
                  <p className="text-lg font-medium">Video would display here</p>
                  <p className="text-gray-400 text-sm">This is a placeholder for the video stream</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Self view */}
          <div className="absolute bottom-4 right-4 w-48 h-36 bg-gray-800 rounded-lg overflow-hidden border-2 border-gray-700 shadow-lg">
            <div className="w-full h-full flex items-center justify-center">
              {!isVideoOn ? (
                <div className="text-center">
                  <VideoOff className="h-6 w-6 text-gray-500 mx-auto mb-1" />
                  <p className="text-xs text-gray-400">Camera off</p>
                </div>
              ) : (
                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                  <p className="text-xs">Self view</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Timer and status */}
          <div className="absolute top-4 left-4 bg-gray-900 bg-opacity-75 rounded-lg px-3 py-1.5 flex items-center">
            <div className={`h-2 w-2 rounded-full mr-2 ${
              remainingSeconds <= 60 ? 'bg-red-500 animate-pulse' : 'bg-green-500'
            }`}></div>
            <span className="text-sm font-medium">{formattedElapsedTime}</span>
            <span className="mx-1 text-gray-400">/</span>
            <span className="text-sm text-gray-400">{formatTime(duration * 60)}</span>
          </div>
          
          {/* Participant info */}
          <div className="absolute top-4 right-4 bg-gray-900 bg-opacity-75 rounded-lg px-3 py-1.5">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2 text-gray-400" />
              <span className="text-sm">{doctorName} & {patientName}</span>
            </div>
          </div>
        </div>
        
        {/* Control bar */}
        <div className="bg-gray-800 p-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4 items-center">
              <button
                onClick={toggleMute}
                className={`p-3 rounded-full ${isMuted ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-700 hover:bg-gray-600'}`}
              >
                {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
              </button>
              
              <button
                onClick={toggleVideo}
                className={`p-3 rounded-full ${!isVideoOn ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-700 hover:bg-gray-600'}`}
              >
                {isVideoOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
              </button>
              
              <button
                onClick={toggleScreenShare}
                className={`p-3 rounded-full ${isScreenSharing ? 'bg-primary-600 hover:bg-primary-700' : 'bg-gray-700 hover:bg-gray-600'}`}
              >
                <Monitor className="h-5 w-5" />
              </button>
              
              <button
                onClick={toggleChat}
                className={`p-3 rounded-full ${isChatOpen ? 'bg-primary-600 hover:bg-primary-700' : 'bg-gray-700 hover:bg-gray-600'}`}
              >
                <MessageSquare className="h-5 w-5" />
              </button>
            </div>
            
            <div className="flex space-x-4 items-center">
              <button
                onClick={toggleFullScreen}
                className="p-3 rounded-full bg-gray-700 hover:bg-gray-600"
              >
                {isFullScreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
              </button>
              
              <button
                onClick={onEnd}
                className="p-3 rounded-full bg-red-600 hover:bg-red-700"
              >
                <Phone className="h-5 w-5 transform rotate-135" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Chat sidebar - only shown when chat is open */}
      {isChatOpen && (
        <div className="absolute top-0 right-0 bottom-0 w-80 bg-gray-800 border-l border-gray-700 flex flex-col">
          <div className="p-3 border-b border-gray-700">
            <h3 className="text-lg font-medium">Chat</h3>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center">
                  <span className="text-sm font-medium">Dr</span>
                </div>
                <div className="ml-3 bg-gray-700 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">Hello! How are you feeling today?</p>
                  <span className="text-xs text-gray-400 mt-1 block">10:02 AM</span>
                </div>
              </div>
              
              <div className="flex items-start justify-end">
                <div className="bg-primary-600 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">I'm feeling better than yesterday, but still have some congestion.</p>
                  <span className="text-xs text-primary-200 mt-1 block">10:03 AM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-3 border-t border-gray-700">
            <div className="relative">
              <input
                type="text"
                className="w-full bg-gray-700 border-0 rounded-lg p-3 pl-3 pr-10 text-white placeholder-gray-400"
                placeholder="Type a message..."
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary-400 hover:text-primary-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoConsultation;