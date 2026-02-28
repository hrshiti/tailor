import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    ArrowLeft, MapPin, Phone, MessageSquare,
    AlertCircle, HelpCircle, Package, Truck,
    Calendar, ExternalLink, ChevronRight, ShieldCheck
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
                    <a
                        href={`tel:+919876543210`} // Mock number, could be dynamic from TAILORS
                        className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center gap-2 active:scale-95 transition-all text-center no-underline"
                    >
                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                            <Phone size={18} />
                        </div>
                        <span className="text-[10px] font-black text-gray-700 uppercase tracking-tight">Call Partner</span>
                    </a>

                    <a
                        href={`https://wa.me/919876543210?text=I need help with my order ${order.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center gap-2 active:scale-95 transition-all text-center no-underline"
                    >
                        <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                            <MessageSquare size={18} />
                        </div>
                        <span className="text-[10px] font-black text-gray-700 uppercase tracking-tight">Chat Help</span>
                    </a>
                </div>

                <div
                    onClick={() => {
                        const subject = encodeURIComponent(`Issue with Order ${order.id}`);
                        const body = encodeURIComponent(`Hello Support,\n\nI am facing an issue with my order ${order.id} for the service ${order.serviceTitle}.\n\nPlease help.`);
                        window.location.href = `mailto:support@tailorapp.com?subject=${subject}&body=${body}`;
                    }}
                    className="p-4 bg-[#1e3932] rounded-[2rem] text-white shadow-xl flex items-center justify-between group cursor-pointer active:scale-[0.98] transition-all"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
                            <AlertCircle size={22} className="text-red-300" />
                        </div>
                        <div>
                            <p className="text-[13px] font-black uppercase tracking-widest">Have an issue?</p>
                            <p className="text-[10px] text-white/60 font-medium">Auto-generate support ticket</p>
                        </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#1e3932] transition-all">
                        <ChevronRight size={16} />
                    </div>
                </div>

                {/* Optional: Tailor Card in Tracking */}
                {order.tailorName && (
                    <div className="bg-white rounded-[2rem] p-5 border border-gray-100 shadow-sm">
                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Assigned Artisan</h4>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-[#1e3932] border border-gray-100 font-black text-xs">
                                {order.tailorName.charAt(0)}
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-black text-gray-900 leading-none mb-1">{order.tailorName}</p>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">Expert Tailor</p>
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f2fcf9] rounded-xl border border-[#1e3932]/10">
                                <ShieldCheck size={12} className="text-[#1e3932]" />
                                <span className="text-[10px] font-black text-[#1e3932] uppercase">Verified</span>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default OrderTracking;
