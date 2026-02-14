import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, ChevronRight } from 'lucide-react';
import { TAILORS } from '../data/tailors';
import useCheckoutStore from '../../../store/checkoutStore';

const TailorSelection = () => {
    const navigate = useNavigate();
    const { serviceDetails, configuration, pricing, initializeCheckout } = useCheckoutStore();

    const handleSelectTailor = (tailor) => {
        initializeCheckout({
            service: serviceDetails,
            config: configuration,
            pricing: pricing,
            tailorId: tailor.id,
            tailorName: tailor.name
        });
        navigate('/checkout/address');
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20 font-sans">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-[#1e3932] text-white px-4 py-4 flex items-center gap-3 pt-safe">
                <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors">
                    <ArrowLeft size={20} />
                </button>
                <div className="flex-1">
                    <h1 className="text-lg font-bold">Select a Tailor</h1>
                    <p className="text-[10px] text-gray-300">Choose an expert for your {serviceDetails?.title || 'service'}</p>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="bg-white px-6 py-4 flex justify-between items-center border-b border-gray-100">
                <div className="flex flex-col items-center gap-1">
                    <div className="w-6 h-6 rounded-full bg-[#1e3932] text-white text-[10px] flex items-center justify-center font-bold">1</div>
                    <span className="text-[10px] font-bold text-[#1e3932]">Service</span>
                </div>
                <div className="h-px bg-[#1e3932] flex-1 mx-4"></div>
                <div className="flex flex-col items-center gap-1">
                    <div className="w-6 h-6 rounded-full bg-[#1e3932] text-white text-[10px] flex items-center justify-center font-bold animate-pulse">2</div>
                    <span className="text-[10px] font-bold text-[#1e3932]">Tailor</span>
                </div>
                <div className="h-px bg-gray-200 flex-1 mx-4"></div>
                <div className="flex flex-col items-center gap-1">
                    <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-500 text-[10px] flex items-center justify-center font-bold">3</div>
                    <span className="text-[10px] font-bold text-gray-400">Review</span>
                </div>
            </div>

            {/* Tailor List */}
            <div className="p-4 space-y-4">
                {TAILORS.map(tailor => (
                    <div
                        key={tailor.id}
                        onClick={() => handleSelectTailor(tailor)}
                        className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 active:scale-[0.98] transition-all cursor-pointer group"
                    >
                        <div className="w-16 h-16 rounded-xl overflow-hidden border border-gray-100 shrink-0">
                            <img src={tailor.image} alt={tailor.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#1e3932] transition-colors">{tailor.name}</h3>
                            <p className="text-[10px] text-[#1e3932] font-bold mb-1">{tailor.specialty}</p>
                            <div className="flex items-center gap-3 text-[10px] text-gray-500">
                                <span className="flex items-center gap-0.5"><Star size={10} className="fill-yellow-400 text-yellow-400" /> {tailor.rating}</span>
                                <span className="flex items-center gap-0.5"><MapPin size={10} /> {tailor.distance}</span>
                                <span className="font-bold text-green-600 italic">{tailor.experience} Exp</span>
                            </div>
                        </div>
                        <ChevronRight size={18} className="text-gray-300 mr-1" />
                    </div>
                ))}
            </div>

            {/* Info Message */}
            <div className="mx-4 bg-blue-50 p-4 rounded-xl border border-blue-100">
                <p className="text-[10px] text-blue-700 leading-relaxed">
                    <span className="font-bold">Note:</span> You are manually selecting a tailor. Their specific stitching quality and style will be reflected in your final outfit.
                </p>
            </div>
        </div>
    );
};

export default TailorSelection;
