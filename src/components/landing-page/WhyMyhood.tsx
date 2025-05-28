import React from 'react';

const MyHoodAfrica: React.FC = () => {
  return (
    <div className=" bg-white px-4 md:py-24 pt-8 pb-28 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:gap-0 md:gap-16 gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            {/* Purple icon placeholder */}
           <img src="/images/featured.svg"/>
            
            {/* Main heading */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Why MyHoodAfrica
            </h1>
            
            {/* Description */}
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg">
              Africa-first and made for real communities, we believe in connecting 
              African people block by block, not just online — but right where you live.
            </p>
            
            {/* Features list */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-3">
              <img src="/images/check-icon.svg"/>
                <span className="text-gray-700 text-lg">100% free to use</span>
              </div>
              
              <div className="flex items-center space-x-3">
              <img src="/images/check-icon.svg"/>
                <span className="text-gray-700 text-lg">Focused on safety & privacy</span>
              </div>
              
              <div className="flex items-center space-x-3">
              <img src="/images/check-icon.svg"/>
                <span className="text-gray-700 text-lg">Built for mobile users</span>
              </div>
            </div>
          </div>
          <img className='mx-auto' src="/images/Contents.svg"/>
        </div>
      </div>
    </div>
  );
};

export default MyHoodAfrica;