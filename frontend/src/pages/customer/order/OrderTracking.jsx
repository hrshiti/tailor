import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    ArrowLeft,
    MapPin,
    Phone,
    Package,
    Scissors,
    CheckCircle2,
    Clock,
    MoreVertical
} from 'lucide-react';

export const OrderTracking = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // Mock order data
    const orderData = {
        id: id || 'ORD-4822',
        date: 'Oct 24, 2026',
        estimatedDelivery: 'Nov 08, 2026',
        service: 'Kurti Custom Stitching',
        total: '₹1,048',
        deliveryPartner: {
            name: 'Ramesh Singh',
            phone: '+91 98765 43211',
            rating: 4.8
        }
    };

    const trackingSteps = [
        { title: 'Order Placed', time: 'Oct 24, 10:30 AM', completed: true, icon: CheckCircle2 },
        { title: 'Pickup Scheduled', time: 'Oct 24, 11:15 AM', completed: true, icon: Clock },
        { title: 'Fabric Picked', time: 'Pending', completed: false, icon: Package },
        { title: 'With Tailor', time: 'Pending', completed: false, icon: Scissors },
        { title: 'Cutting Phase', time: 'Pending', completed: false, icon: Scissors },
        { title: 'Stitching', time: 'Pending', completed: false, icon: Scissors },
        { title: 'Hemming', time: 'Pending', completed: false, icon: Scissors },
        { title: 'Ironing & Finishing', time: 'Pending', completed: false, icon: Scissors },
        { title: 'Ready for Dispatch', time: 'Pending', completed: false, icon: Package },
        { title: 'Out for Delivery', time: 'Pending', completed: false, icon: MapPin },
        { title: 'Delivered', time: 'Pending', completed: false, icon: CheckCircle2 },
    ];

    const currentStepIndex = 1; // "Pickup Scheduled" is current state

    return (
        <div className="flex flex-col h-full bg-gray-50">
            {/* Header */}
            <div className="bg-[#4C1D95] text-white px-5 py-4 shrink-0 shadow-md z-10 sticky top-0 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate('/orders')} className="p-1 -ml-1 text-gray-300 hover:text-white">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <div>
                        <h1 className="text-xl font-bold tracking-tight">Track Order</h1>
                        <p className="text-xs text-gray-300">{orderData.id}</p>
                    </div>
                </div>
                <button className="text-white hover:bg-white/10 p-1.5 rounded-lg">
                    <MoreVertical className="w-5 h-5" />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto hide-scrollbar pb-10">

                {/* Order Meta Info */}
                <div className="bg-white p-5 border-b border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h2 className="font-bold text-gray-900">{orderData.service}</h2>
                            <p className="text-xs text-gray-500 mt-0.5">Placed on {orderData.date}</p>
                        </div>
                        <div className="text-right">
                            <span className="bg-blue-50 text-blue-700 font-bold text-[10px] px-2 py-1 rounded-md uppercase tracking-wider">
                                In Progress
                            </span>
                            <p className="text-sm font-bold text-[#4C1D95] mt-1">{orderData.total}</p>
                        </div>
                    </div>

                    <div className="bg-orange-50 rounded-xl p-3 border border-orange-100 flex items-center justify-between">
                        <div className="flex gap-3 items-center">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 border border-orange-200">
                                <span className="font-bold text-[#E58C4F]">R</span>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-orange-600 uppercase tracking-widest mb-0.5">Pickup Assigned</p>
                                <p className="text-sm font-bold text-gray-900">{orderData.deliveryPartner.name}</p>
                                <p className="text-xs text-gray-500">★ {orderData.deliveryPartner.rating}</p>
                            </div>
                        </div>
                        <button className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg shadow-green-500/30">
                            <Phone className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Timeline */}
                <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-6">Order Activity</h3>

                    <div className="relative pl-4 space-y-6 before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gray-200">
                        {trackingSteps.map((step, idx) => {
                            const isCurrent = idx === currentStepIndex;
                            const isCompleted = idx <= currentStepIndex;
                            const isLast = idx === trackingSteps.length - 1;

                            return (
                                <div key={idx} className="relative flex items-start gap-4 z-10">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-4 border-gray-50 shadow-sm
                    ${isCurrent ? 'bg-blue-500 text-white animate-pulse' :
                                            isCompleted ? 'bg-[#4C1D95] text-white' : 'bg-gray-200 text-gray-400'}`}
                                    >
                                        <step.icon className={`w-3.5 h-3.5 ${(isCurrent || isCompleted) ? 'text-white' : 'text-gray-500'}`} />
                                    </div>

                                    <div className={`pt-1.5 ${isLast ? '' : 'pb-2'}`}>
                                        <h4 className={`text-sm font-bold ${isCurrent ? 'text-blue-600' : isCompleted ? 'text-gray-900' : 'text-gray-400'}`}>
                                            {step.title}
                                        </h4>
                                        <p className="text-xs text-gray-500 mt-0.5">{step.time}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

