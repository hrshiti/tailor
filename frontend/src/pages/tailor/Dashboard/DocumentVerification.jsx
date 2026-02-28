import React from 'react';
import {
    FileText,
    CheckCircle,
    XCircle,
    Clock,
    Eye,
    AlertTriangle,
    Download,
    ShieldCheck,
    ChevronRight,
    ArrowUpRight,
    Search
} from 'lucide-react';

const DocumentCard = ({ title, type, status, date, icon: Icon }) => {
    const statusConfig = {
        'VERIFIED': { color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-100', icon: CheckCircle },
        'PENDING': { color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100', icon: Clock },
        'REJECTED': { color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-100', icon: XCircle },
    };

    const config = statusConfig[status];

    return (
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-8 hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-all group relative overflow-hidden">
            <div className="flex justify-between items-start mb-6 relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:rotate-3 transition-transform`} style={{ backgroundColor: config.bg }}>
                    <Icon className={`w-7 h-7 ${config.color}`} />
                </div>
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${config.bg} ${config.color} ${config.border} text-[10px] font-black uppercase tracking-widest`}>
                    <config.icon className="w-3 h-3" /> {status}
                </div>
            </div>

            <div className="relative z-10">
                <h3 className="text-xl font-black text-gray-900 tracking-tight">{title}</h3>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">{type} • Uploaded on {date}</p>
            </div>

            <div className="mt-8 flex gap-3 relative z-10">
                <button className="flex-1 py-3 bg-gray-50 text-gray-600 hover:bg-gray-100 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all">
                    <Eye className="w-4 h-4" /> View Sample
                </button>
                <button className="p-3 bg-gray-50 text-gray-400 hover:text-[#4C1D95] hover:bg-[#4C1D95]/5 rounded-2xl transition-all border border-gray-100">
                    <Download className="w-4 h-4" />
                </button>
            </div>

            {/* Background Icon Decoration */}
            <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity translate-x-10 -translate-y-10 group-hover:translate-x-5 group-hover:-translate-y-5 transition-transform duration-700`}>
                <Icon className={`w-40 h-40 ${config.color}`} />
            </div>
        </div>
    );
};

export const DocumentVerification = () => {
    return (
        <div className="space-y-10 animate-fade-in pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-left">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tighter">Document <span className="text-[#4C1D95]">Verification</span></h1>
                    <p className="text-gray-400 font-bold text-sm tracking-wide mt-1 uppercase">Manage and track your business documents status</p>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-gray-100 shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                    <span className="text-xs font-black text-gray-900 uppercase tracking-widest">Kyc Level 2 Secured</span>
                </div>
            </div>

            {/* Rejection Alert if any */}
            <div className="bg-red-50 p-6 rounded-[2.5rem] border border-red-100 flex flex-col md:flex-row items-center gap-6 shadow-[0_8px_30px_rgb(239,68,68,0.05)]">
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-xl shadow-red-500/10 shrink-0">
                    <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>
                <div className="flex-1 text-left">
                    <h4 className="text-lg font-black text-red-900 tracking-tight leading-none mb-1 uppercase">Correction Required</h4>
                    <p className="text-sm text-red-700 font-medium">Your <span className="font-black underline scale-150">Shop License</span> copy was rejected due to lack of clarity. Please re-upload a high-resolution scan of the original document.</p>
                </div>
                <button className="bg-red-600 text-white px-8 py-3.5 rounded-3xl text-xs font-black tracking-widest uppercase shadow-xl shadow-red-600/20 hover:scale-105 active:scale-95 transition-all">Re-upload Document</button>
            </div>

            {/* Documents Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <DocumentCard
                    title="Aadhar Card"
                    type="Government ID"
                    status="VERIFIED"
                    date="Sep 10, 2023"
                    icon={ShieldCheck}
                />
                <DocumentCard
                    title="PAN Card"
                    type="Tax Document"
                    status="VERIFIED"
                    date="Sep 10, 2023"
                    icon={FileText}
                />
                <DocumentCard
                    title="Shop License"
                    type="Business License"
                    status="REJECTED"
                    date="Sep 12, 2023"
                    icon={Search}
                />
                <DocumentCard
                    title="Police Verification"
                    type="Security Clearance"
                    status="PENDING"
                    date="Sep 14, 2023"
                    icon={Clock}
                />
            </div>

            {/* Help Section */}
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="space-y-4">
                    <h3 className="text-2xl font-black text-gray-900 tracking-tight">Need help with verification?</h3>
                    <p className="text-sm text-gray-500 max-w-lg font-medium leading-relaxed">Our verification process usually takes <span className="text-[#4C1D95] font-black underline">24-48 business hours</span> after document submission. If your documents are stuck in pending for longer, please contact our partner support.</p>
                    <div className="flex gap-4 pt-2">
                        <div className="flex items-center gap-2 text-[#4C1D95] text-xs font-black uppercase tracking-widest hover:underline cursor-pointer group">View FAQ <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-all" /></div>
                        <div className="flex items-center gap-2 text-[#4C1D95] text-xs font-black uppercase tracking-widest hover:underline cursor-pointer group">Contact Support <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" /></div>
                    </div>
                </div>
                <div className="w-full lg:w-48 h-48 bg-gray-50 rounded-[2.5rem] border-4 border-dashed border-gray-100 flex flex-col items-center justify-center p-8 text-center group hover:bg-white hover:border-[#4C1D95]/10 cursor-pointer transition-all">
                    <Plus className="w-8 h-8 text-gray-300 group-hover:text-[#4C1D95] mb-2" />
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-[#4C1D95]">Add Extra Document</span>
                </div>
            </div>
        </div>
    );
};
