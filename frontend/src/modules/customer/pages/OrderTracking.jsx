import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    ArrowLeft, MapPin, Phone, MessageSquare,
    AlertCircle, HelpCircle, Package, Truck,
    Calendar, ExternalLink
} from 'lucide-react';
import useOrderStore, { ORDER_STATES } from '../../../store/orderStore';
import TrackingTimeline from '../components/orders/TrackingTimeline';

const OrderTracking = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const getOrderById = useOrderStore(state => state.getOrderById);
    const order = getOrderById(id);

    useEffect(() => {
        if (!order) {
            // navigate('/orders'); // Silently fail or handled below
        }
    }, [order, navigate]);

    if (!order) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
                <AlertCircle size={48} className="text-red-400 mb-4" />
                <h2 className="text-lg font-bold text-gray-900">Order Not Found</h2>
                <button onClick={() => navigate('/orders')} className="mt-4 text-[#1e3932] font-bold underline">Go Back</button>
            </div>
        );
    }

    const deliveryDate = new Date();
    // Simulation: if express, 10 days, else 15
    deliveryDate.setDate(deliveryDate.getDate() + (order.deliveryType === 'Express' ? 10 : 15));
    const dateString = deliveryDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    return (
        <div className="min-h-screen bg-gray-50 pb-12 font-sans text-gray-900">
            {/* 1. Sticky Header */}
            <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 py-3 pb-4 pt-safe flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-50 text-gray-700">
                        <ArrowLeft size={20} />
                    </button>
                    <div className="flex-1">
                        <h1 className="text-sm font-bold text-gray-900">Track Order</h1>
                        <p className="text-[10px] text-gray-500 font-medium font-mono uppercase tracking-widest">{order.id}</p>
                    </div>
                </div>
            </div>

            <div className="max-w-xl mx-auto p-4 space-y-4 animate-in fade-in duration-500">

                {/* 2. Order Quick Summary */}
                <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shrink-0">
                        <img src={order.imageUrl} alt={order.serviceTitle} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-sm font-bold text-gray-900 mb-1">{order.serviceTitle}</h3>
                        <div className="flex items-center gap-1.5 text-green-700 font-bold text-[10px] uppercase tracking-wide">
                            <Truck size={12} />
                            <span>Arriving by {dateString}</span>
                        </div>
                    </div>
                </div>

                {/* 3. The Timeline Section */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm relative overflow-hidden">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                            <Package size={16} className="text-[#1e3932]" />
                            Order Journey
                        </h3>
                        <div className="px-3 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded-full border border-green-100">
                            Live Status
                        </div>
                    </div>

                    <TrackingTimeline states={ORDER_STATES} currentIndex={order.statusIndex || 0} />
                </div>

                {/* 4. Support & Actions */}
                <div className="grid grid-cols-2 gap-3">
                    <button className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center gap-2 active:scale-95 transition-all">
                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                            <Phone size={18} />
                        </div>
                        <span className="text-[10px] font-bold text-gray-700 uppercase">Call Partner</span>
                    </button>
                    <button className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center gap-2 active:scale-95 transition-all">
                        <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                            <MessageSquare size={18} />
                        </div>
                        <span className="text-[10px] font-bold text-gray-700 uppercase">Chat Help</span>
                    </button>
                </div>

                <div className="p-4 bg-[#1e3932] rounded-3xl text-white shadow-xl flex items-center justify-between group cursor-pointer active:scale-[0.98] transition-all">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                            <HelpCircle size={20} />
                        </div>
                        <div>
                            <p className="text-xs font-bold">Have an issue?</p>
                            <p className="text-[10px] opacity-70">Raise a support ticket now</p>
                        </div>
                    </div>
                    <ExternalLink size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>

            </div>
        </div>
    );
};

export default OrderTracking;
