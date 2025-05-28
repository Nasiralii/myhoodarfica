import React from 'react';

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const CoreFeatures: React.FC = () => {
  const features: FeatureItem[] = [
    {
      id: 1,
      title: "For Sale & Free",
      description: "Buy, sell, or give away items locally",
      imageSrc: "/images/forsale-icon.svg",
      imageAlt: "For Sale & Free feature illustration"
    },
    {
      id: 2,
      title: "Chat with Neighbours",
      description: "Private messaging for trusted communication",
      imageSrc: "/images/chat-with-icon.svg",
      imageAlt: "Chat with Neighbours feature illustration"
    },
    {
      id: 3,
      title: "Community Groups",
      description: "Start or join interest-based or city-based groups",
      imageSrc: "/images/community-icon.svg",
      imageAlt: "Community Groups feature illustration"
    },
    {
      id: 4,
      title: "Local Events",
      description: "Attend or organize events near you",
      imageSrc: "/images/loca-event-icon.svg",
      imageAlt: "Local Events feature illustration"
    },
    {
      id: 5,
      title: "Invite Neighbours",
      description: "Help grow your hood! Invite via location, email or phone",
      imageSrc: "/images/invite-icon.svg",
      imageAlt: "Invite Neighbours feature illustration"
    }
  ];

  return (
    <div className="w-full container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
      <div className="inline-flex items-center px-3 py-1 border border-[#2E0DF9CC] rounded-full bg-[#2E0DF90A] text-[#6556FE] font-bold cursor-pointer mb-4 w-fit">
            Features
          </div>
        <h1 className="text-3xl sm:text-4xl lg:text-[60px] font-extrabold text-[#1C1741]">
          Our Core Features
        </h1>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* First Row - 3 items */}
        {features.slice(0, 3).map((feature) => (
          <div
            key={feature.id}
            className="bg-[#FAFAFB] rounded-2xl p-6 pb-0 transition-shadow duration-300"
          >
            <div className="">
              <div className="space-y-3">
                <h3 className="text-2xl font-extrabold  text-[#1C1741]">
                  {feature.title}
                </h3>
                <p className="text-[#1C1741A3] text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="w-full overflow-hidden">
                <img
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  className="mx-auto h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Second Row - 2 items centered on larger screens */}
        <div className="md:col-span-2 lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mx-auto">
            {features.slice(3, 5).map((feature) => (
              <div
                key={feature.id}
                className="bg-[#FAFAFB] rounded-2xl p-6 pb-0 transition-shadow duration-300 "
              >
                <div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-extrabold text-[#1C1741]">
                      {feature.title}
                    </h3>
                    <p className="text-[#1C1741A3] text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="flex w-full justify-end rounded-xl overflow-hidden">
                    <img
                      src={feature.imageSrc}
                      alt={feature.imageAlt}
                      className="flex mr-0 h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;