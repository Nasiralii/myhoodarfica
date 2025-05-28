import React from 'react';

interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const HowItWorks: React.FC = () => {
  const workflowSteps: WorkflowStep[] = [
    {
      id: 1,
      title: "Sign Up",
      description: "Sign up from any African country",
      icon: "/images/signup-icon.svg"
    },
    {
      id: 2,
      title: "Connect",
      description: "Connect easily with your neighborhood",
       icon: "/images/connect-icon.svg"
    },
    {
      id: 3,
      title: "Post",
      description: "Post or browse items for sale & free",
      icon: "/images/post-icon.svg"
    },
    {
      id: 4,
      title: "Join",
      description: "Join local chats, groups & events",
      icon: "/images/join-icon.svg"
    }
  ];

  return (
    <div className="w-full container px-4 mx-auto sm:px-6 xl:px-20 py-8 lg:py-16">
      {/* Header Section */}
      <div className="flex flex-row justify-between items-start sm:items-center mb-12 gap-4">
        <div className="flex flex-col">
          <div className="inline-flex items-center px-3 py-1 border border-[#2E0DF9CC] rounded-full bg-[#2E0DF90A] text-[#6556FE] font-bold cursor-pointer mb-4 w-fit">
            Workflow
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-[60px] font-extrabold text-gray-900">
            How It's Work
          </h3>
        </div>
        <button className="bg-[#6556FE] text-white px-6 py-3 font-extrabold rounded-lg cursor-pointer transition-colors duration-200 whitespace-nowrap">
          Join Your Hood
        </button>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {workflowSteps.map((step, index) => (
          <div
            key={step.id}
            className="flex flex-col border border-[#EAECF0] items-start space-y-4 px-6 py-4 rounded-2xl bg-white transition-colors duration-200"
          >
            {/* Icon and Number */}
            <div className="flex items-center justify-between space-x-4 w-full">
                <img 
                  src={step.icon} 
                  alt={`${step.title} icon`}
                  className="w-[48px] h-[48px]"
                />
              <div className="text-[48px] font-bold text-gray-300">
                {step.id}
              </div>
            </div>

            {/* Content */}
            <div className="space-y-2 mt-8">
              <h3 className="text-xl font-extrabold text-black">
                {step.title}
              </h3>
              <p className="text-[#1C1741A3] pr-16 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Process Flow Indicators for larger screens */}
    
    </div>
  );
};

export default HowItWorks;