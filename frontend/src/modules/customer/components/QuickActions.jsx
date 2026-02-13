import React from 'react';
import { motion } from 'framer-motion';

const actions = [
    {
        label: 'Stitch Now',
        image: 'https://cdn-icons-png.flaticon.com/128/9284/9284227.png', // Sewing Machine 3D
        color: 'bg-rose-50',
        path: '/services'
    },
    {
        label: 'Track Order',
        image: 'https://cdn-icons-png.flaticon.com/128/9420/9420653.png', // Delivery Truck 3D
        color: 'bg-blue-50',
        path: '/track'
    },
    {
        label: 'Measurements',
        image: 'https://cdn-icons-png.flaticon.com/128/9583/9583210.png', // Tape Measure/Ruler 3D
        color: 'bg-purple-50',
        path: '/measurements'
    },
    {
        label: 'Reorder',
        image: 'https://cdn-icons-png.flaticon.com/128/9502/9502690.png', // Rotate/History 3D
        color: 'bg-orange-50',
        path: '/orders'
    }
];

const QuickActions = () => {
    return (
        <div className="px-4 py-6">
            <div className="grid grid-cols-4 gap-4">
                {actions.map((action, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center gap-2 cursor-pointer"
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className={`p-3 rounded-2xl shadow-sm ${action.color} flex items-center justify-center aspect-square w-full border border-white`}>
                            <img
                                src={action.image}
                                alt={action.label}
                                className="w-10 h-10 object-contain drop-shadow-sm"
                            />
                        </div>
                        <span className="text-[11px] font-medium text-center text-gray-700 leading-tight">
                            {action.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default QuickActions;
