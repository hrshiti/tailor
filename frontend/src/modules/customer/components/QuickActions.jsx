import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const actions = [
    {
        label: 'Store',
        image: 'https://cdn-icons-png.flaticon.com/128/9284/9284227.png',
        color: 'bg-rose-50',
        path: '/store'
    },
    {
        label: 'My Orders',
        image: 'https://cdn-icons-png.flaticon.com/128/9420/9420653.png',
        color: 'bg-blue-50',
        path: '/orders'
    },
    {
        label: 'Reference',
        image: 'https://cdn-icons-png.flaticon.com/128/9583/9583210.png',
        color: 'bg-purple-50',
        path: '/services'
    },
    {
        label: 'Refer & Earn',
        image: 'https://cdn-icons-png.flaticon.com/128/9502/9502690.png',
        color: 'bg-orange-50',
        path: '/refer'
    }
];

const QuickActions = () => {
    const navigate = useNavigate();

    return (
        <div className="px-4 py-6">
            <div className="grid grid-cols-4 gap-4">
                {actions.map((action, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center gap-2 cursor-pointer"
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate(action.path)}
                    >
                        <div className={`p-4 rounded-2xl shadow-sm ${action.color} flex items-center justify-center aspect-square w-full border border-white/50 bg-opacity-70 backdrop-blur-sm transition-transform hover:-translate-y-1`}>
                            <img
                                src={action.image}
                                alt={action.label}
                                className="w-10 h-10 object-contain drop-shadow-md"
                            />
                        </div>
                        <span className="text-[10px] font-black text-center text-gray-500 uppercase tracking-tighter leading-tight">
                            {action.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default QuickActions;
