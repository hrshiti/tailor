import React, { useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import ServiceHero from '../components/service-detail/ServiceHero';
import DeliverySelector from '../components/service-detail/DeliverySelector';
import MeasurementSelector from '../components/service-detail/MeasurementSelector';
import FabricSelector from '../components/service-detail/FabricSelector';
import DesignUpload from '../components/service-detail/DesignUpload';
import PriceSummary from '../components/service-detail/PriceSummary';
import useCheckoutStore from '../../../store/checkoutStore';

import { SERVICES } from '../data/services';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                className="w-full flex justify-between items-center py-3 text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-sm font-medium text-gray-800">{question}</span>
                {isOpen ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
            </button>
            {isOpen && <p className="text-xs text-gray-600 pb-3 leading-relaxed">{answer}</p>}
        </div>
    );
};

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { initializeCheckout, serviceDetails: storedDetails } = useCheckoutStore(state => state);

    // Check if a tailor was pre-selected (priority to navigation state, then store)
    const preSelectedTailor = {
        tailorId: location.state?.tailorId || storedDetails?.tailorId,
        tailorName: location.state?.tailorName || storedDetails?.tailorName
    };

    // Dynamic data fetching
    const serviceData = SERVICES.find(s => s.id === parseInt(id)) || SERVICES[0];

    // State for configuration
    const [deliveryType, setDeliveryType] = useState('standard'); // standard, express, premium
    const [measurementType, setMeasurementType] = useState(null); // saved, new, upload
    const [fabricSource, setFabricSource] = useState('customer'); // customer, platform
    const [measurements, setMeasurements] = useState(null);

    // Pricing Logic
    const getDeliveryPrice = () => {
        if (deliveryType === 'express') return 150;
        if (deliveryType === 'premium') return 350;
        return 0; // standard
    };

    const getDeliveryDays = () => {
        if (deliveryType === 'express') return 10;
        if (deliveryType === 'premium') return 7;
        return 15; // standard
    }

    const handleProceed = () => {
        const basePrice = serviceData.basePrice;
        const deliveryPrice = getDeliveryPrice();
        const taxes = Math.round((basePrice + deliveryPrice) * 0.05);
        const total = basePrice + deliveryPrice + taxes;

        initializeCheckout({
            service: serviceData,
            config: {
                deliveryType,
                fabricSource,
                measurements
            },
            pricing: {
                base: basePrice,
                delivery: deliveryPrice,
                taxes,
                total,
                deliveryDays: getDeliveryDays()
            },
            tailorId: preSelectedTailor.tailorId || null,
            tailorName: preSelectedTailor.tailorName || null
        });

        // If no tailor is selected, go to tailor selection page
        if (!preSelectedTailor.tailorId) {
            navigate('/checkout/tailor');
        } else {
            navigate('/checkout/address');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-32 font-sans">
            {/* 1. Sticky Header */}
            <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 px-4 py-3 flex items-center gap-3 pt-safe">
                <Link to="/services" className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-700">
                    <ArrowLeft size={20} />
                </Link>
                <h1 className="text-lg font-bold text-gray-900 truncate flex-1">{serviceData.title}</h1>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-4">

                {/* Left Column: Configuration */}
                <div className="md:col-span-2">
                    {/* 2. Hero Section */}
                    <ServiceHero service={serviceData} />

                    {/* 3. Delivery Selection */}
                    <DeliverySelector selected={deliveryType} onSelect={setDeliveryType} />

                    {/* 4. Measurement Selection */}
                    <MeasurementSelector
                        selectedType={measurementType}
                        onSelectType={setMeasurementType}
                        onMeasurementComplete={(data) => {
                            console.log('Measurement Data Captured:', data);
                            setMeasurements(data);
                        }}
                    />

                    {/* 5. Fabric Source */}
                    <FabricSelector selected={fabricSource} onSelect={setFabricSource} />

                    {/* 6. Design Upload & Instructions */}
                    <DesignUpload />

                    {/* 9. Service Details Text */}
                    <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100">
                        <h3 className="text-sm font-bold text-gray-900 mb-2">Service Details</h3>
                        <p className="text-xs text-gray-600 mb-4 leading-relaxed">{serviceData.description}</p>

                        <h4 className="text-xs font-bold text-gray-900 mb-1">What's Included?</h4>
                        <ul className="list-disc list-inside text-xs text-gray-600 space-y-1 mb-4">
                            <li>Stitching as per measurements</li>
                            <li>Basic lining (if required)</li>
                            <li>Standard buttons & finishing</li>
                            <li>Ironing & Packaging</li>
                        </ul>

                        <h4 className="text-xs font-bold text-red-600 mb-1">Cancellation Policy</h4>
                        <p className="text-[10px] text-gray-500">Free cancellation before fabric pickup. 50% charges apply if cancelled after cutting.</p>
                    </div>

                    {/* 10. FAQ */}
                    <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100">
                        <h3 className="text-sm font-bold text-gray-900 mb-2">Frequently Asked Questions</h3>
                        <FAQItem question="Can I change the design later?" answer="Minor changes like sleeve length can be done during pickup, but major design changes aren't possible after cutting." />
                        <FAQItem question="Is alterations free?" answer="Yes! We provide one free alteration within 7 days of delivery if the fit isn't perfect." />
                        <FAQItem question="Do you provide fabric?" answer="Currently we only stitch. You need to provide the fabric, which we will pick up from your home." />
                    </div>
                </div>

                {/* Right Column: Sticky Price Summary (Desktop) */}
                <div className="relative">
                    <PriceSummary
                        basePrice={serviceData.basePrice}
                        deliveryPrice={getDeliveryPrice()}
                        deliveryDays={getDeliveryDays()}
                        onProceed={handleProceed}
                    />
                </div>

            </div>
        </div>
    );
};

export default ServiceDetail;
