import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Phone, Mail, FileText, ChevronRight } from 'lucide-react';

export const ProfileSupport = () => {
    const navigate = useNavigate();

    const faqItems = [
        { question: 'How do I return a stitched item?', answer: 'We offer free alterations within 7 days of delivery.' },
        { question: 'Where is my active order?', answer: 'You can track its live status in the "My Orders" tab.' },
        { question: 'How do I cancel an order?', answer: 'Orders can only be cancelled before the fabric is picked up.' },
        { question: 'What are your delivery charges?', answer: 'Delivery is free for orders above ₹1000.' },
    ];

    return (
        <div className="flex flex-col h-full bg-gray-50 pb-20">

            {/* Header */}
            <div className="bg-white px-5 py-4 shrink-0 shadow-sm sticky top-0 z-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors relative z-30">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <h1 className="text-xl font-bold tracking-tight text-gray-900">Help & Support</h1>
                </div>
            </div>

            <div className="p-4 space-y-6">

                {/* Quick Contact Cards */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-blue-200 hover:bg-blue-50/30 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                            <MessageCircle className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-sm text-gray-900">Live Chat</span>
                        <span className="text-[10px] text-gray-500">Typical reply: 2 mins</span>
                    </div>

                    <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-green-200 hover:bg-green-50/30 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                            <Phone className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-sm text-gray-900">Call Us</span>
                        <span className="text-[10px] text-gray-500">10:00 AM - 7:00 PM</span>
                    </div>
                </div>

                {/* Support Options Menu */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-4 flex items-center justify-between border-b border-gray-50 cursor-pointer hover:bg-gray-50">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
                                <Mail className="w-4 h-4" />
                            </div>
                            <span className="font-bold text-sm text-gray-900">Email Us</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                                <FileText className="w-4 h-4" />
                            </div>
                            <span className="font-bold text-sm text-gray-900">Terms & Policies</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                </div>

                {/* FAQs */}
                <div>
                    <h3 className="font-bold text-gray-900 mb-3 px-1">Frequently Asked Questions</h3>
                    <div className="space-y-3">
                        {faqItems.map((faq, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:border-gray-200 transition-colors">
                                <h4 className="font-bold text-sm text-gray-900 mb-1 leading-snug">{faq.question}</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};
