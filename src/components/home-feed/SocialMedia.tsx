'use client';

import React, { useState } from 'react';
import PostsComponent from '../PostComponent';

interface Story {
  id: string;
  userName: string;
  userImage: string;
  isAddStory?: boolean;
}

interface Post {
  id: string;
  user: {
    name: string;
    avatar: string;
    location: string;
    time: string;
  };
  content: string;
  images: string[];
  likes: number;
  comments: number;
  shares: number;
}

const SocialMedia: React.FC = () => {
  const [stories] = useState<Story[]>([
    {
      id: 'add',
      userName: 'Add Story',
      userImage: '',
      isAddStory: true
    },
    {
      id: '1',
      userName: 'Kristin Watson',
      userImage: '/images/black-girl-city.jpg'
    },
    {
      id: '2',
      userName: 'Kristin Watson',
      userImage: '/images/black-girl-city.jpg'
    },
    {
      id: '3',
      userName: 'Kristin Watson',
      userImage: '/images/black-girl-city.jpg'
    },
    {
      id: '4',
      userName: 'Kristin Watson',
      userImage: '/images/black-girl-city.jpg'
    }
  ]);

 

  return (
    <div className="w-full mx-auto space-y-6 md:p-2 bg-[#FAFAFA]">
      <div className=" rounded-xl">
        <div className="space-x-3 flex flex-row overflow-x-auto md:p-0  px-2">
          {stories.map((story) => (
            <div key={story.id} className="flex-shrink-0 cursor-pointer">
              {story.isAddStory ? (
                <div className="md:w-[10rem] w-[5rem] xl:h-36 md:h-32 h-16 bg-gradient-to-br bg-[#6556FE] rounded-xl flex flex-col items-center justify-center text-white">
                  <div className="w-8 h-8 text-3xl bg-opacity-20 rounded-full flex items-center justify-center mb-2">
                   +
                  </div>
                  <span className="md:text-xs text-[10px] font-medium text-center px-1">Add Story</span>
                </div>
              ) : (
                <div className="relative">
                  <div className="w-full xl:h-36 md:h-32 h-16 bg-gray-300 relative rounded-xl overflow-hidden">
                   <img className='md:w-[10rem] w-[5rem] xl:h-36 md:h-32 h-16' src="/images/black-girl-city.jpg"/>
                  </div>
                 
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs font-medium text-center truncate">
                      {story.userName}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Welcome Post Creation */}
      <div className="bg-white overflow-hidden rounded-xl shadow-sm p-4">
        <div className="flex items-start flex-col space-x-3 mb-4">
         
            <h2 className="text-lg font-semibold text-gray-900">Welcome Back, Kristin Watson 👋</h2>
            <p className="text-sm text-gray-500">What's on your mind today?</p>
        </div>

        <div className="mb-4">
          <div className="flex items-center space-x-3 rounded-lg cursor-text">
           <img className='w-11 h-11' src="/images/avatar.svg"/>
           <input placeholder='Post an update, sell something, or share with your hood' className='w-full rounded-full p-2 bg-gray-50 focus:outline-none border border-[#E5E5E5]' type='text'/>
          </div>
        </div>

        <div className="flex items-center flex-wrap justify-between pr-1">
          <div className="flex justify-between md:space-x-1">
           <img src="/images/camera.svg"/>
           <img src="/images/upload-image.svg"/>
           <img src="/images/calender.svg"/>
           <img src="/images/map-circle.svg"/>
          </div>
          <button className="bg-[#6556FE] flex gap-2 cursor-pointer text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors">
            <img src="/images/postnow.svg"/>
            Post Now
          </button>
        </div>
      </div>

      {/* Posts Feed */}
   <PostsComponent/>
    </div>
  );
};

export default SocialMedia;