import React from 'react';
import { Check, Circle } from 'lucide-react';
import { cn } from '../../../../utils/cn';

const TrackingTimeline = ({ states, currentIndex }) => {
    return (
        <div className="space-y-0 relative px-2">
            {states.map((state, index) => {
                const isCompleted = index < currentIndex;
                const isCurrent = index === currentIndex;
                const isLast = index === states.length - 1;

                return (
                    <div key={index} className="flex gap-4 group">
                        {/* Dot & Line Column */}
                        <div className="flex flex-col items-center">
                            <div className={cn(
                                "w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 z-10",
                                isCompleted ? "bg-green-600 text-white" :
                                    isCurrent ? "bg-[#1e3932] text-white ring-4 ring-green-100 animate-pulse" :
                                        "bg-gray-100 text-gray-300 border-2 border-dashed border-gray-200"
                            )}>
                                {isCompleted ? <Check size={12} strokeWidth={3} /> : <div className="w-1.5 h-1.5 rounded-full bg-current" />}
                            </div>

                            {!isLast && (
                                <div className={cn(
                                    "w-0.5 h-10 transition-all duration-500 -my-1",
                                    isCompleted ? "bg-green-600" : "bg-gray-100"
                                )} />
                            )}
                        </div>

                        {/* Text Column */}
                        <div className={cn(
                            "pb-8 mt-0.5 transition-all duration-500",
                            isCompleted ? "opacity-100" : isCurrent ? "opacity-100 translate-x-1" : "opacity-40"
                        )}>
                            <h4 className={cn(
                                "text-sm font-bold leading-none mb-1",
                                isCurrent ? "text-[#1e3932]" : isCompleted ? "text-gray-900" : "text-gray-400"
                            )}>
                                {state.label}
                            </h4>
                            <p className="text-[10px] text-gray-500 font-medium">
                                {state.description}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TrackingTimeline;
