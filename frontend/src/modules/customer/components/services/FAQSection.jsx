import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
    {
        question: "What if my measurements are incorrect?",
        answer: "We offer a 'Perfect Fit Guarantee'. If the fit isn't right, the first alteration is completely free within 7 days of delivery."
    },
    {
        question: "Is Cash on Delivery (COD) available?",
        answer: "Yes, you can pay via COD for orders up to ₹2000. For higher value orders, a partial advance payment is required."
    },
    {
        question: "Can I cancel my order after pickup?",
        answer: "You can cancel anytime before the fabric is cut. Once stitching begins, a cancellation fee may apply."
    },
    {
        question: "Do you provide fabric as well?",
        answer: "Currently, we only provide stitching services. You need to provide the fabric, which our executive will pick up."
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="px-4 py-6 pb-24">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-3">
                {faqData.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                        <button
                            className="w-full flex justify-between items-center p-4 text-left"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <span className="text-xs font-semibold text-gray-800">{item.question}</span>
                            {openIndex === index ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
                        </button>
                        {openIndex === index && (
                            <div className="px-4 pb-4 pt-0">
                                <p className="text-[11px] text-gray-600 leading-relaxed border-t border-gray-100 pt-2">{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
