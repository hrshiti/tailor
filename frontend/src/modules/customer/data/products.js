import img1 from '../../../assets/img1.jpeg';
import img2 from '../../../assets/img2.jpeg';
import img3 from '../../../assets/img3.jpeg';
import img4 from '../../../assets/img4.jpeg';
import img5 from '../../../assets/img5.jpeg';
import img6 from '../../../assets/img6.jpeg';
import img8 from '../../../assets/img8.avif';
import img10 from '../../../assets/img10.webp';
import img11 from '../../../assets/img11.jpeg';
import img12 from '../../../assets/img12.jpeg';
import img13 from '../../../assets/img13.jpeg';
import img14 from '../../../assets/img14.jpeg';
import img15 from '../../../assets/img15.jpeg';

export const PRODUCTS = [
    {
        id: 1,
        title: 'Embroidered Anarkali Kurti',
        name: 'Embroidered Anarkali Kurti',
        price: 1499,
        originalPrice: 2999,
        category: 'Kurtis',
        rating: 4.5,
        reviews: 120,
        discount: 50,
        codAvailable: true,
        inStock: true,
        images: [img1, img2],
        image: img1,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: [
            { name: "Ruby Red", hex: "#e11d48" }
        ],
        details: [
            { title: "Fabric", content: "Premium Rayon with Gold Print" },
            { title: "Includes", content: "Kurti Only" },
            { title: "Care", content: "Hand Wash separately in cold water." },
            { title: "Fit", content: "Regular fit. Model is 5'7\" wearing size S." }
        ]
    },
    {
        id: 2,
        title: 'Cotton Printed Suit Set',
        name: 'Cotton Printed Suit Set',
        price: 2199,
        originalPrice: 3500,
        category: 'Suits',
        rating: 4.2,
        reviews: 85,
        discount: 37,
        codAvailable: true,
        inStock: true,
        images: [img3, img4],
        image: img3,
        sizes: ["M", "L", "XL"],
        colors: [
            { name: "Purple", hex: "#7e22ce" },
            { name: "Teal", hex: "#14b8a6" }
        ],
        details: [
            { title: "Fabric", content: "Pure Cotton 60-60" },
            { title: "Includes", content: "Kurta, Pant & Dupatta" },
            { title: "Care", content: "Machine Wash" },
            { title: "Fit", content: "Straight fit." }
        ]
    },
    {
        id: 3,
        title: 'Floral Maxi Dress',
        name: 'Floral Maxi Dress',
        price: 1899,
        originalPrice: 2499,
        category: 'Dresses',
        rating: 4.8,
        reviews: 200,
        discount: 24,
        codAvailable: true,
        inStock: true,
        images: [img5, img6],
        image: img5,
        sizes: ["XS", "S", "M", "L"],
        colors: [
            { name: "Pink Floral", hex: "#fce7f3" }
        ],
        details: [
            { title: "Fabric", content: "Georgette" },
            { title: "Care", content: "Dry Clean Only" }
        ]
    },
    {
        id: 4,
        title: 'Designer Silk Saree',
        name: 'Designer Silk Saree',
        price: 4599,
        originalPrice: 6999,
        category: 'Sarees',
        rating: 4.7,
        reviews: 150,
        discount: 34,
        codAvailable: false,
        inStock: true,
        images: [img8, img10],
        image: img8,
        sizes: ["Free Size"],
        colors: [
            { name: "Royal Blue", hex: "#1e3a8a" }
        ],
        details: [
            { title: "Fabric", content: "Banarasi Silk" },
            { title: "Includes", content: "Saree with Unstitched Blouse Piece" }
        ]
    },
    {
        id: 5,
        title: 'Casual Chic Top',
        name: 'Casual Chic Top',
        price: 799,
        originalPrice: 1299,
        category: 'Casual',
        rating: 4.0,
        reviews: 50,
        discount: 38,
        codAvailable: true,
        inStock: true,
        images: [img11],
        image: img11,
        sizes: ["S", "M", "L"],
        colors: [
            { name: "White", hex: "#ffffff" }
        ],
        details: [
            { title: "Fabric", content: "Cotton Blend" },
            { title: "Care", content: "Machine Wash" }
        ]
    },
    {
        id: 6,
        title: 'Festive Lehenga Choli',
        name: 'Festive Lehenga Choli',
        price: 8999,
        originalPrice: 12999,
        category: 'Festive',
        rating: 4.9,
        reviews: 300,
        discount: 30,
        codAvailable: true,
        inStock: true,
        images: [img12],
        image: img12,
        sizes: ["Semi-Stitched"],
        colors: [
            { name: "Maroon", hex: "#7f1d1d" }
        ],
        details: [
            { title: "Fabric", content: "Velvet" },
            { title: "Work", content: "Zari and Stone Work" }
        ]
    },
    {
        id: 7,
        title: 'Handloom Cotton Kurta',
        name: 'Handloom Cotton Kurta',
        price: 999,
        originalPrice: 1599,
        category: 'Kurtis',
        rating: 4.3,
        reviews: 90,
        discount: 37,
        codAvailable: true,
        inStock: true,
        images: [img13],
        image: img13,
        sizes: ["M", "L", "XL", "XXL"],
        colors: [
            { name: "Indigo", hex: "#312e81" }
        ],
        details: [
            { title: "Fabric", content: "100% Cotton" },
            { title: "Care", content: "Hand Wash" }
        ]
    },
    {
        id: 8,
        title: 'Heels & Footwear',
        name: 'Heels & Footwear',
        price: 2999,
        originalPrice: 4999,
        category: 'Footwear',
        rating: 4.6,
        reviews: 210,
        discount: 40,
        codAvailable: true,
        inStock: true,
        images: [img14, img15],
        image: img14,
        sizes: ["UK 4", "UK 5", "UK 6", "UK 7"],
        colors: [
            { name: "Beige", hex: "#d6cfc7" }
        ],
        details: [
            { title: "Material", content: "Synthetic Leather" },
            { title: "Heel Height", content: "2 inches" }
        ]
    }
];
