
import React from 'react';

const AvatarCarousel: React.FC = () => {
  return (
    <div className="flex justify-center items-center space-x-8 overflow-x-auto py-8">
      <div className="flex space-x-6">
        {/* Avatar placeholders - puedes reemplazar con tus avatares reales */}
        <div className="flex-shrink-0">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center">
            <span className="text-2xl">🧭</span>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
            <span className="text-2xl">🎬</span>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-blue-600 flex items-center justify-center">
            <span className="text-2xl">🎙️</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarCarousel;
