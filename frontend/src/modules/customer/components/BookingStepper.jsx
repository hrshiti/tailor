import React from 'react';
import { motion } from 'framer-motion';
import { Check, Scissors, ShoppingBag, Ruler, CreditCard } from 'lucide-react';
import { cn } from '../../../utils/cn';

const STEPS = [
    { id: 'service', label: 'Service', icon: Scissors },
    { id: 'fabric', label: 'Fabric', icon: ShoppingBag },
    { id: 'details', label: 'Details', icon: Ruler },
    { id: 'review', label: 'Review', icon: CreditCard },
];

const BookingStepper = ({ currentStepId }) => {
    const currentIndex = STEPS.findIndex(s => s.id === currentStepId);

    return (
        <div className="w-full py-6 px-4 bg-white/50 backdrop-blur-sm border-b border-gray-100">
            <div className="max-w-md mx-auto relative flex justify-between items-center">
                {/* Connecting Lines */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(currentIndex / (STEPS.length - 1)) * 100}%` }}
                        className="h-full bg-[#1e3932] transition-all duration-500 shadow-sm"
                    />
                </div>

                {/* Step Circles */}
                {STEPS.map((step, index) => {
                    const isCompleted = index < currentIndex;
                    const isActive = step.id === currentStepId;
                    const Icon = step.icon;

                    return (
                        <div key={step.id} className="relative z-10 flex flex-col items-center gap-2">
                            <motion.div
                                initial={false}
                                animate={{
                                    backgroundColor: isCompleted || isActive ? '#1e3932' : '#ffffff',
                                    borderColor: isCompleted || isActive ? '#1e3932' : '#f3f4f6',
                                    scale: isActive ? 1.1 : 1,
                                }}
                                className={cn(
                                    "w-10 h-10 rounded-2xl border-2 flex items-center justify-center transition-all shadow-sm",
                                    isActive ? "ring-4 ring-[#1e3932]/10" : ""
                                )}
                            >
                                {isCompleted ? (
                                    <Check size={18} className="text-white" />
                                ) : (
                                    <Icon size={18} className={cn(
                                        isActive ? "text-white" : "text-gray-400"
                                    )} />
                                )}
                            </motion.div>
                            <span className={cn(
                                "text-[10px] font-black uppercase tracking-widest transition-colors",
                                isActive ? "text-[#1e3932]" : "text-gray-400"
                            )}>
                                {step.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BookingStepper;
