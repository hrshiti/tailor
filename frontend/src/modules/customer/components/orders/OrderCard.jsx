import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, Package } from 'lucide-react';

const OrderCard = ({ order }) => {
    return (
        <Link to={`/orders/${order.id}/track`} className="block bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all group">
            <div className="flex gap-4">
                {/* 1. Image */}
                <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                    <img
                        src={order.imageUrl || order.image || "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=200"} // Fallback
                        alt={order.serviceTitle}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/5" />
                </div>

                {/* 2. Details */}
                <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border ${order.status === 'Delivered' ? 'bg-green-50 text-green-600 border-green-100' :
                                        order.status === 'In Progress' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                            'bg-orange-50 text-orange-600 border-orange-100'
                                    }`}>
                                    {order.status}
                                </span>
                                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                                    {order.id}
                                </span>
                            </div>
                            <h3 className="text-sm font-black text-gray-900 line-clamp-1 group-hover:text-[#1e3932] transition-colors uppercase tracking-tight">
                                {order.serviceTitle}
                            </h3>
                        </div>
                        <div className="text-right">
                            <span className="text-sm font-black text-[#1e3932]">₹{order.totalAmount}</span>
                            <p className="text-[9px] text-gray-400 font-bold uppercase mt-0.5">Paid</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-[10px] text-gray-500 mt-3 font-bold uppercase tracking-wide">
                        <div className="flex items-center gap-1.5 px-2 py-1 bg-gray-50 rounded-lg border border-gray-100">
                            <Calendar size={12} className="text-gray-400" />
                            <span>{order.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2 py-1 bg-gray-50 rounded-lg border border-gray-100">
                            <Package size={12} className="text-gray-400" />
                            <span>{order.deliveryType}</span>
                        </div>
                    </div>
                </div>

                {/* 3. Arrow */}
                <div className="self-center text-gray-300 group-hover:text-[#1e3932] transition-colors">
                    <ChevronRight size={20} />
                </div>
            </div>
        </Link>
    );
};

export default OrderCard;
