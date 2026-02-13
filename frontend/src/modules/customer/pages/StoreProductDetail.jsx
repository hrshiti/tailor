import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp, Share2, ShoppingCart } from 'lucide-react';

// Components
import ProductGallery from '../components/store-detail/ProductGallery';
import ProductInfo from '../components/store-detail/ProductInfo';
import VariantSelector from '../components/store-detail/VariantSelector';
import PincodeCheck from '../components/store-detail/PincodeCheck';
import ActionButtons from '../components/store-detail/ActionButtons';

// Mock Product
const productData = {
    id: 1,
    title: "Embroidered Georgette Kurti with Palazzo",
    category: "Festive Wear",
    price: 1499,
    originalPrice: 2999,
    rating: 4.5,
    reviews: 82,
    inStock: true,
    codAvailable: true,
    images: [
        "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1610419266710-d8e7c2e3640c?auto=format&fit=crop&q=80&w=800"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
        { name: "Teal Green", hex: "#1e3932" },
        { name: "Ruby Red", hex: "#e11d48" },
        { name: "Mustard", hex: "#facc15" }
    ],
    details: [
        { title: "Fabric", content: "Premium Georgette with Cotton Lining" },
        { title: "Includes", content: "Kurti, Palazzo & Dupatta" },
        { title: "Care", content: "Dry Clean Only to maintain embroidery sheen." },
        { title: "Fit", content: "Regular fit. Model is 5'7\" wearing size S." }
    ]
};

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                className="w-full flex justify-between items-center py-4 text-left group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-sm font-semibold text-gray-800 group-hover:text-[#1e3932] transition-colors">{title}</span>
                {isOpen ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
            </button>
            {isOpen && <div className="text-xs text-gray-600 pb-4 leading-relaxed animate-in slide-in-from-top-1">{content}</div>}
        </div>
    );
};

const StoreProductDetail = () => {
    const { id } = useParams();
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    return (
        <div className="min-h-screen bg-white pb-32 font-sans">
            {/* 1. Header */}
            <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 py-3 flex items-center justify-between pt-safe">
                <Link to="/store" className="p-2 -ml-2 rounded-full hover:bg-gray-50 text-gray-700">
                    <ArrowLeft size={20} />
                </Link>
                <h1 className="text-sm font-bold text-gray-900 truncate max-w-[60%]">
                    {productData.title}
                </h1>
                <div className="flex gap-2">
                    <button className="p-2 relative">
                        <ShoppingCart size={20} className="text-gray-700" />
                        <span className="absolute top-1 right-0 w-2 h-2 bg-red-500 rounded-full border border-white" />
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8">
                {/* Left: Gallery */}
                <ProductGallery images={productData.images} />

                {/* Right: Info & Actions */}
                <div className="md:sticky md:top-24 h-max">
                    <ProductInfo product={productData} />

                    <div className="h-px bg-gray-100 my-6" />

                    <VariantSelector
                        sizes={productData.sizes}
                        colors={productData.colors}
                        onSizeSelect={setSelectedSize}
                        onColorSelect={setSelectedColor}
                    />

                    <PincodeCheck />

                    {/* Product Details Accordion */}
                    <div className="mt-8">
                        <h3 className="text-sm font-bold text-gray-900 mb-2">Product Specifications</h3>
                        {productData.details.map((item, idx) => (
                            <AccordionItem key={idx} title={item.title} content={item.content} />
                        ))}
                        <AccordionItem
                            title="Return & Exchange Policy"
                            content="7-day easy returns if product is unused and tags are intact. Exchange available for size issues."
                        />
                    </div>

                    {/* Action Buttons (Desktop placement, Mobile is fixed) */}
                    <div className="hidden md:block mt-8">
                        <ActionButtons />
                    </div>
                </div>
            </div>

            {/* Mobile Sticky Actions */}
            <div className="md:hidden">
                <ActionButtons />
            </div>

        </div>
    );
};

export default StoreProductDetail;
