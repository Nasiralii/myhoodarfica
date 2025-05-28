import React, { useState } from 'react';

interface User {
  name: string;
  avatar: string;
  location: string;
  time: string;
}

interface Post {
  id: string;
  user: User;
  content: string;
  images?: string[];
  likes: number;
  comments: number;
  shares: number;
  tag?: string;
  tagColor?: string;
}

const PostsComponent: React.FC = () => {
  const [posts] = useState<Post[]>([
    {
      id: '1',
      user: {
        name: 'Kristin Watson',
        avatar: '/api/placeholder/40/40',
        location: 'Lagos',
        time: '2 hours ago'
      },
      content: '🔥 FOR SALE: Used Gas Cooker - ₦20,000\nClean, used for 6 months, Works perfectly, Pickup only.',
      images: [
        '/api/placeholder/300/250',
        '/api/placeholder/300/250'
      ],
      likes: 18,
      comments: 6,
      shares: 2
    },
    {
      id: '2',
      user: {
        name: 'Amin Jaretji',
        avatar: '/api/placeholder/40/40',
        location: 'Ikoyi',
        time: '3 hours ago'
      },
      content: 'Beware of break-ins on 3rd Avenue. Lock your doors and report any suspicious activity.',
      images: [
        '/api/placeholder/400/280'
      ],
      likes: 23,
      comments: 8,
      shares: 5,
      tag: '🚨 SECURITY ALERT',
      tagColor: 'bg-red-500'
    },
    {
      id: '3',
      user: {
        name: 'Karene Alex',
        avatar: '/api/placeholder/40/40',
        location: 'Ajeno',
        time: '1 day ago'
      },
      content: 'Join us to clean our shared alley behind Block C.\n\n📍 Ajeno, Block C\n🕘 Saturday, 10:00 AM',
      likes: 25,
      comments: 6,
      shares: 3,
      tag: '🌟 COMMUNITY CLEANUP - Sat 10AM',
      tagColor: 'bg-green-500'
    }
  ]);

  const ProfilePicture: React.FC<{ name: string; size?: 'sm' | 'md' }> = ({ name, size = 'md' }) => {
    const sizeClasses = {
      sm: 'w-8 h-8 text-sm',
      md: 'w-10 h-10 text-sm'
    };

    const getInitials = (name: string) => {
      return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    const getBackgroundColor = (name: string) => {
      const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500', 'bg-yellow-500', 'bg-red-500'];
      const index = name.length % colors.length;
      return colors[index];
    };

    return (
      <div className={`${sizeClasses[size]} ${getBackgroundColor(name)} rounded-full flex items-center justify-center text-white font-medium`}>
        {getInitials(name)}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          {/* Post Header */}
          <div className="md:p-4 p-2 pb-0">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <ProfilePicture name={post.user.name} />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm gap-1 flex flex-row items-center">{post.user.name}<span className='text-[#E5E5E5]'>•</span>   <span className='text-[#737373] text-xs'>{post.user.time}</span></h3>
                  <div className="flex items-center flex-row space-x-1 text-xs text-gray-500">
                    <span className='flex flex-row items-center gap-2'><img src="/images/map.svg"/> {post.user.location}</span>
                  </div>
                </div>
              </div>
              <button className="p-1 hover:bg-gray-100 rounded-full">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>

            {/* Tag */}
            {post.tag && (
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 `}>
                {post.tag}
              </div>
            )}

            {/* Post Content */}
            <div className="mb-3">
              <p className="text-gray-900 text-sm leading-relaxed whitespace-pre-line">
                {post.content}
              </p>
            </div>
          </div>

          {/* Post Images */}
          {post.images && post.images.length > 0 && (
            <div className="md:px-4 px-2 pb-3">
              {post.images.length === 1 ? (
                <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                 <img className='w-full h-full' src="/images/black-girl-city.jpg"/>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  {post.images.map((image, index) => (
                    <div key={index} className=" rounded-lg overflow-hidden">
                     <img className='w-full h-fit' src="/images/black-girl-city.jpg"/>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Post Actions */}
          <div className="px-4 py-3 border-t border-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <button className="flex border border-[#E5E5E5] rounded-full p-2 items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="text-sm font-medium">{post.likes} Likes</span>
                </button>

                <button className="flex border border-[#E5E5E5] rounded-full p-2 items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="text-sm font-medium">{post.comments} Comments</span>
                </button>
              </div>

              <button className="flex border border-[#E5E5E5] rounded-full p-2 px-4 items-center space-x-2 ">
               <img src="/images/share.svg"/>
                <span className="text-sm font-medium">Share</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;