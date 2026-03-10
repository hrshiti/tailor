export const overviewStats = {
    totalRevenue: "₹8,45,200",
    revenueChange: "+12.5%",
    activeOrders: 156,
    ordersChange: "+5.2%",
    totalTailors: 42,
    tailorsChange: "-2.1%",
    totalCustomers: 1280,
    customersChange: "+18.4%",
    pendingPayouts: "₹1,24,000",
    deliveryOnline: 18
};

export const recentOrders = [
    { id: 'ORD-9901', customer: 'Ananya Iyer', phone: '+91 9876543210', email: 'ananya@example.com', address: 'Bandra West, Mumbai', tailor: 'Classic Stitch', service: 'Bridal Lehenga', type: 'Stitching', amount: '₹12,000', status: 'In Production', date: '10 Mar 2026', paymentStatus: 'Paid', measurements: 'Saved Profile' },
    { id: 'ORD-9902', customer: 'Vikram Seth', phone: '+91 9876543211', email: 'vikram@example.com', address: 'Andheri East, Mumbai', tailor: 'Mens Hub', service: 'Tuxedo', type: 'Stitching', amount: '₹8,500', status: 'Quality Check', date: '09 Mar 2026', paymentStatus: 'Paid', measurements: 'Uploaded Slip' },
    { id: 'ORD-9903', customer: 'Meera Das', phone: '+91 9876543212', email: 'meera@example.com', address: 'Koramangala, Bangalore', tailor: 'Elite Tailors', service: 'Designer Saree', type: 'Store', amount: '₹4,200', status: 'Pickup Assigned', date: '08 Mar 2026', paymentStatus: 'COD', measurements: 'N/A' },
    { id: 'ORD-9904', customer: 'Karan Mehra', phone: '+91 9876543213', email: 'karan@example.com', address: 'Indiranagar, Bangalore', tailor: 'Royal Stitches', service: 'Sherwani', type: 'Stitching', amount: '₹15,000', status: 'Delivered', date: '05 Mar 2026', paymentStatus: 'Paid', measurements: 'Self Enter' },
    { id: 'ORD-9905', customer: 'Priya Sharma', phone: '+91 9876543214', email: 'priya@example.com', address: 'Juhu, Mumbai', tailor: 'Fashion Hub', service: 'Salwar Kameez', type: 'Stitching', amount: '₹2,500', status: 'Order Placed', date: '10 Mar 2026', paymentStatus: 'Pending', measurements: 'Saved Profile' },
];

export const topTailors = [
    { id: 'T-01', name: 'Masterji Ahmed', rating: 4.9, completedOrders: 2400 },
    { id: 'T-02', name: 'Elite Tailors', rating: 4.9, completedOrders: 1800 },
    { id: 'T-03', name: 'Fashion Hub', rating: 4.8, completedOrders: 1200 },
    { id: 'T-04', name: 'Classic Cuts', rating: 4.7, completedOrders: 2100 },
];

export const allTailors = [
    { id: 'T-01', name: 'Masterji Ahmed', specialty: 'Bridal Specialist', rating: 4.9, completedOrders: 2400, status: 'Approved', joined: '12 Jan 2024', location: 'Chandni Chowk, Delhi', phone: '+91 9876543220', email: 'ahmed@example.com', commission: '15%' },
    { id: 'T-02', name: 'Fashion Hub', specialty: 'Suit Expert', rating: 4.8, completedOrders: 1200, status: 'Approved', joined: '05 Mar 2024', location: 'Noida', phone: '+91 9876543221', email: 'fashionhub@example.com', commission: '12%' },
    { id: 'T-03', name: 'Priya Creations', specialty: 'Designer Blouses', rating: 4.7, completedOrders: 3500, status: 'Approved', joined: '10 Feb 2023', location: 'Gurugram', phone: '+91 9876543222', email: 'priya@example.com', commission: '15%' },
    { id: 'T-04', name: 'Royal Stitch', specialty: 'Kurta Pajama', rating: 4.6, completedOrders: 900, status: 'Suspended', joined: '22 Aug 2025', location: 'Rohini, Delhi', phone: '+91 9876543223', email: 'royal@example.com', commission: '18%' },
];

export const tailorApplications = [
    { id: 'APP-101', name: 'Zari Crafts', specialty: 'Heavy Handwork', submittedDate: '10 Mar 2026', phone: '+91 9998887771', status: 'Pending Review', location: 'South Ex, Delhi' },
    { id: 'APP-102', name: 'Modern Fits', specialty: 'Western Wear', submittedDate: '09 Mar 2026', phone: '+91 9998887772', status: 'Pending Review', location: 'Bandra, Mumbai' },
];

export const deliveryPartners = [
    { id: 'DP-01', name: 'Rahul Kumar', phone: '+91 9876543110', status: 'Online', activeTasks: 2, totalDeliveries: 450, rating: 4.8, vehicle: 'Scooter (DL-3C-1234)', joined: '15 Sep 2024' },
    { id: 'DP-02', name: 'Amit Singh', phone: '+91 9876543111', status: 'Offline', activeTasks: 0, totalDeliveries: 820, rating: 4.9, vehicle: 'Bike (UP-16-5678)', joined: '02 Feb 2023' },
    { id: 'DP-03', name: 'Sanjay Verma', phone: '+91 9876543112', status: 'Online', activeTasks: 1, totalDeliveries: 120, rating: 4.5, vehicle: 'Scooter (HR-26-9012)', joined: '10 Jan 2026' },
];

export const unassignedOrders = [
    { id: 'ORD-9908', type: 'Pickup', from: 'Koramangala, Bangalore', to: 'Elite Tailors', timeSlot: 'Today, 2PM - 4PM', status: 'Unassigned' },
    { id: 'ORD-9909', type: 'Delivery', from: 'Classic Stitch', to: 'Bandra West, Mumbai', timeSlot: 'Today, 5PM - 7PM', status: 'Unassigned' },
];

export const allCustomers = [
    { id: 'CUST-001', name: 'Ananya Iyer', phone: '+91 9876543210', email: 'ananya@example.com', orders: 12, totalSpent: '₹45,000', joined: '10 Jan 2023', status: 'Active' },
    { id: 'CUST-002', name: 'Vikram Seth', phone: '+91 9876543211', email: 'vikram@example.com', orders: 3, totalSpent: '₹12,500', joined: '05 Mar 2024', status: 'Active' },
    { id: 'CUST-003', name: 'Meera Das', phone: '+91 9876543212', email: 'meera@example.com', orders: 0, totalSpent: '₹0', joined: '08 Mar 2026', status: 'Inactive' },
    { id: 'CUST-004', name: 'Rohit Verma', phone: '+91 9876543215', email: 'rohit@example.com', orders: 24, totalSpent: '₹1,20,000', joined: '15 Aug 2022', status: 'Active' },
];

export const revenueData = [
    { name: 'Mon', revenue: 4000 },
    { name: 'Tue', revenue: 3000 },
    { name: 'Wed', revenue: 2000 },
    { name: 'Thu', revenue: 2780 },
    { name: 'Fri', revenue: 1890 },
    { name: 'Sat', revenue: 2390 },
    { name: 'Sun', revenue: 3490 },
];

export const transactions = [
    { id: 'TXN-9001', date: '10 Mar 2026, 02:30 PM', orderId: 'ORD-9901', amount: '₹12,000', type: 'Credit', method: 'UPI', status: 'Completed', customer: 'Ananya Iyer' },
    { id: 'TXN-9002', date: '09 Mar 2026, 11:15 AM', orderId: 'ORD-9902', amount: '₹8,500', type: 'Credit', method: 'Credit Card', status: 'Completed', customer: 'Vikram Seth' },
    { id: 'TXN-9003', date: '08 Mar 2026, 04:45 PM', orderId: 'ORD-9903', amount: '₹4,200', type: 'Credit', method: 'Net Banking', status: 'Pending', customer: 'Meera Das' },
    { id: 'TXN-9004', date: '08 Mar 2026, 09:00 AM', orderId: 'REF-101', amount: '₹1,500', type: 'Debit', method: 'Original Source', status: 'Completed', customer: 'Rohit Verma' },
];

export const payouts = [
    { id: 'PAY-501', date: '01 Mar 2026', recipient: 'Masterji Ahmed', type: 'Tailor', amount: '₹45,000', status: 'Processing', bankAcc: '**** 1234' },
    { id: 'PAY-502', date: '28 Feb 2026', recipient: 'Rahul Kumar', type: 'Delivery', amount: '₹12,500', status: 'Completed', bankAcc: '**** 5678' },
    { id: 'PAY-503', date: '15 Feb 2026', recipient: 'Fashion Hub', type: 'Tailor', amount: '₹32,000', status: 'Completed', bankAcc: '**** 9012' },
];
