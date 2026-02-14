import React, { useState, useEffect } from 'react';
import { MapPin, ChevronDown, Check, Loader2, Navigation } from 'lucide-react';

const LocationBar = () => {
    const [location, setLocation] = useState('Srinagar, Kashmir - 190001');
    const [isEditing, setIsEditing] = useState(false);
    const [tempLocation, setTempLocation] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const savedLocation = localStorage.getItem('user-location');
        if (savedLocation) setLocation(savedLocation);
    }, []);

    const handleSave = () => {
        if (tempLocation.trim()) {
            setLocation(tempLocation);
            localStorage.setItem('user-location', tempLocation);
            setIsEditing(false);
        }
    };

    const handleDetectLocation = () => {
        setIsLoading(true);
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                // Mock Reverse Geocoding
                setTimeout(() => {
                    const mockAddress = "Detected Location - 560001";
                    setLocation(mockAddress);
                    localStorage.setItem('user-location', mockAddress);
                    setIsLoading(false);
                    setIsEditing(false);
                }, 1500);
            }, (error) => {
                alert("Location access denied or unavailable.");
                setIsLoading(false);
            });
        } else {
            alert("Geolocation not supported");
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-[#1e3932] text-white px-4 py-2 flex justify-between items-center text-sm shadow-md relative z-30 transition-all">
            {isEditing ? (
                <div className="flex items-center gap-2 w-full animate-in fade-in slide-in-from-top-1">
                    <input
                        type="text"
                        value={tempLocation}
                        onChange={(e) => setTempLocation(e.target.value)}
                        placeholder="Enter Pincode or City"
                        className="flex-1 bg-white/10 border border-white/20 rounded px-2 py-1 text-white text-xs placeholder:text-white/50 focus:outline-none focus:border-white"
                        autoFocus
                    />
                    <button onClick={handleDetectLocation} className="p-1 bg-white/20 rounded hover:bg-white/30" title="Detect Location">
                        {isLoading ? <Loader2 size={14} className="animate-spin" /> : <Navigation size={14} />}
                    </button>
                    <button onClick={handleSave} className="p-1 bg-green-500 rounded hover:bg-green-600">
                        <Check size={14} />
                    </button>
                </div>
            ) : (
                <>
                    <div className="flex items-center gap-2 truncate max-w-[70%]">
                        <MapPin size={16} className="text-[#d4e9e2] shrink-0" />
                        <span className="font-medium truncate">{location}</span>
                    </div>
                    <button
                        onClick={() => {
                            setTempLocation(location);
                            setIsEditing(true);
                        }}
                        className="text-[#d4e9e2] text-xs font-bold flex items-center gap-1 hover:text-white transition-colors uppercase tracking-wider"
                    >
                        Change
                        <ChevronDown size={14} />
                    </button>
                </>
            )}
        </div>
    );
};

export default LocationBar;
