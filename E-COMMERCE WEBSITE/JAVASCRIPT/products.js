// Product data
const products = [
    {
        id: 1,
        name: 'Ultraboost Running Shoes',
        category: 'Shoes',
        price: 129.99,
        oldPrice: 179.99,
        description: 'Premium running shoes with responsive cushioning and breathable mesh upper for maximum comfort.',
        images: [
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1621665421578-00680715f80d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        ],
        brand: 'Adidas',
        rating: 4.8,
        reviewCount: 152,
        inStock: true,
        isNew: false,
        isSale: true,
        featured: true,
        trending: false,
        attributes: {
            color: 'Black',
            size: '9.5',
            material: 'Mesh, Rubber'
        }
    },
    {
        id: 2,
        name: 'Wireless Noise-Cancelling Headphones',
        category: 'Electronics',
        price: 249.99,
        oldPrice: 299.99,
        description: 'Immersive sound with industry-leading noise cancellation. Long battery life and comfortable design for all-day listening.',
        images: [
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        ],
        brand: 'Sony',
        rating: 4.9,
        reviewCount: 326,
        inStock: true,
        isNew: true,
        isSale: false,
        featured: true,
        trending: true,
        attributes: {
            color: 'Black',
            connectivity: 'Bluetooth 5.0',
            batteryLife: '30 hours'
        }
    },
    {
        id: 3,
        name: 'Premium Leather Jacket',
        category: 'Clothing',
        price: 189.99,
        oldPrice: null,
        description: 'Classic leather jacket made from premium materials. Stylish design that never goes out of fashion.',
        images: [
            'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1520975661595-6453be3f7070?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        ],
        brand: 'Urban Outfitters',
        rating: 4.7,
        reviewCount: 98,
        inStock: true,
        isNew: false,
        isSale: false,
        featured: false,
        trending: true,
        attributes: {
            color: 'Brown',
            size: 'M',
            material: 'Genuine Leather'
        }
    },
    {
        id: 4,
        name: 'Smart Fitness Watch',
        category: 'Electronics',
        price: 99.99,
        oldPrice: 129.99,
        description: 'Track your fitness goals, heart rate, sleep patterns and more. Water-resistant and with a long-lasting battery.',
        images: [
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1617043786394-f977fa12eddf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1610438235354-a6ae5528385c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        ],
        brand: 'Fitbit',
        rating: 4.5,
        reviewCount: 215,
        inStock: true,
        isNew: false,
        isSale: true,
        featured: true,
        trending: true,
        attributes: {
            color: 'Black',
            display: 'AMOLED',
            batteryLife: '7 days'
        }
    },
    {
        id: 5,
        name: 'Designer Sunglasses',
        category: 'Accessories',
        price: 159.99,
        oldPrice: 189.99,
        description: 'Stylish designer sunglasses with UV protection. Lightweight frame with durable construction.',
        images: [
            'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        ],
        brand: 'Ray-Ban',
        rating: 4.6,
        reviewCount: 78,
        inStock: true,
        isNew: false,
        isSale: true,
        featured: false,
        trending: false,
        attributes: {
            color: 'Black/Gold',
            lensType: 'Polarized',
            material: 'Metal'
        }
    },
    {
        id: 6,
        name: 'Cotton Casual T-Shirt',
        category: 'Clothing',
        price: 29.99,
        oldPrice: null,
        description: 'Comfortable cotton t-shirt with a modern fit. Perfect for everyday wear.',
        images: [
            'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        ],
        brand: 'H&M',
        rating: 4.3,
        reviewCount: 122,
        inStock: true,
        isNew: true,
        isSale: false,
        featured: true,
        trending: false,
        attributes: {
            color: 'White',
            size: 'L',
            material: '100% Cotton'
        }
    },
    {
        id: 7,
        name: 'Smart Home Speaker',
        category: 'Electronics',
        price: 79.99,
        oldPrice: 99.99,
        description: 'Voice-controlled smart speaker with premium sound quality. Control your smart home and enjoy music, news, and more.',
        images: [
            'https://images.unsplash.com/photo-1589894404892-7d598f418a42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1552252220-bdba525fe538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        ],
        brand: 'Amazon',
        rating: 4.4,
        reviewCount: 245,
        inStock: true,
        isNew: false,
        isSale: true,
        featured: true,
        trending: true,
        attributes: {
            color: 'Charcoal',
            connectivity: 'Wi-Fi, Bluetooth',
            compatibility: 'Alexa'
        }
    },
    {
        id: 8,
        name: 'Canvas Backpack',
        category: 'Accessories',
        price: 49.99,
        oldPrice: 59.99,
        description: 'Durable canvas backpack with multiple compartments. Perfect for school, travel, or everyday use.',
        images: [
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
        ],
        brand: 'Herschel',
        rating: 4.2,
        reviewCount: 87,
        inStock: true,
        isNew: false,
        isSale: true,
        featured: false,
        trending: true,
        attributes: {
            color: 'Navy Blue',
            capacity: '25L',
            material: 'Canvas'
        }
    },
    {
        id: 101,
        name: "Premium Wireless Earbuds",
        category: "Electronics",
        price: 1499.99,
        description: "True wireless earbuds with active noise cancellation, touch controls, and long battery life.",
        images: [
            "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", 
            "https://images.unsplash.com/photo-1608156639585-b3a032e88587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        brand: "Sony",
        rating: 4.8,
        reviewCount: 256,
        inStock: true,
        isNew: true,
        isSale: false,
        featured: true
    },
    {
        id: 102,
        name: "Ultra HD Smart TV 55\"",
        category: "Electronics",
        price: 24999.99,
        oldPrice: 29999.99,
        description: "55-inch 4K Ultra HD Smart TV with HDR, voice control, and built-in streaming apps.",
        images: [
            "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", 
            "https://images.unsplash.com/photo-1592842232655-e5d345cbc2c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1577979749830-f1d742b96791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        brand: "Samsung",
        rating: 4.7,
        reviewCount: 189,
        inStock: true,
        isNew: false,
        isSale: true,
        featured: true
    },
    {
        id: 103,
        name: "Professional Camera Kit",
        category: "Electronics",
        price: 34999.99,
        description: "Professional DSLR camera with 24.1MP sensor, 4K video recording, and multiple lens options.",
        images: [
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", 
            "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        brand: "Canon",
        rating: 4.9,
        reviewCount: 124,
        inStock: true,
        isNew: true,
        isSale: false,
        featured: true
    },
    {
        id: 104,
        name: "Men's Formal Leather Shoes",
        category: "Footwear",
        price: 3499.99,
        oldPrice: 3999.99,
        description: "Classic leather oxford shoes with comfortable insoles and durable construction.",
        images: [
            "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80", 
            "https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1613987876445-fcb353a957ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        brand: "Clarks",
        rating: 4.6,
        reviewCount: 152,
        inStock: true,
        isNew: false,
        isSale: true,
        featured: true
    },
    {
        id: 105,
        name: "Women's Designer Handbag",
        category: "Accessories",
        price: 3999.99,
        description: "Luxury designer handbag with premium materials, spacious compartments, and elegant design.",
        images: ["https://images.unsplash.com/photo-1584917865442-de89df76afd3", "https://images.unsplash.com/photo-1591561954557-26941169b49e"],
        brand: "Gucci",
        rating: 4.8,
        reviewCount: 156,
        inStock: true,
        isNew: true,
        isSale: false,
        featured: true
    },
    {
        id: 106,
        name: "Premium Coffee Maker",
        category: "Home",
        price: 4999.99,
        oldPrice: 5499.99,
        description: "Advanced coffee maker with programmable settings, built-in grinder, and temperature control.",
        images: ["https://images.unsplash.com/photo-1595246140613-f597a611f61b", "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e"],
        brand: "Breville",
        rating: 4.7,
        reviewCount: 132,
        inStock: true,
        isNew: false,
        isSale: true,
        featured: false
    },
    {
        id: 107,
        name: "Fitness Smartwatch",
        category: "Electronics",
        price: 1999.99,
        description: "Advanced fitness tracker with heart rate monitor, GPS, sleep tracking, and water resistance.",
        images: ["https://images.unsplash.com/photo-1579586337278-3befd40fd17a", "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1"],
        brand: "Fitbit",
        rating: 4.6,
        reviewCount: 210,
        inStock: true,
        isNew: true,
        isSale: false,
        featured: true
    },
    {
        id: 108,
        name: "Premium Kitchen Knife Set",
        category: "Home",
        price: 2799.99,
        oldPrice: 3499.99,
        description: "Professional-grade kitchen knife set with high-carbon stainless steel blades and ergonomic handles.",
        images: ["https://images.unsplash.com/photo-1593618998160-854742b8984a", "https://images.unsplash.com/photo-1566454825481-a13242c305c9"],
        brand: "Wüsthof",
        rating: 4.9,
        reviewCount: 87,
        inStock: true,
        isNew: false,
        isSale: true,
        featured: false
    },
    {
        id: 109,
        name: "Designer Sunglasses",
        category: "Accessories",
        price: 1299.99,
        description: "Premium designer sunglasses with UV protection, polarized lenses, and durable frames.",
        images: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083", "https://images.unsplash.com/photo-1577803645773-f96470509666"],
        brand: "Ray-Ban",
        rating: 4.7,
        reviewCount: 165,
        inStock: true,
        isNew: true,
        isSale: false,
        featured: true
    },
    {
        id: 110,
        name: "Premium Yoga Mat",
        category: "Sports",
        price: 999.99,
        oldPrice: 1199.99,
        description: "Eco-friendly, non-slip yoga mat with optimal cushioning and alignment markings.",
        images: ["https://images.unsplash.com/photo-1592432678016-e910b452f9a3", "https://images.unsplash.com/photo-1518611012118-696072aa579a"],
        brand: "Lululemon",
        rating: 4.5,
        reviewCount: 129,
        inStock: true,
        isNew: false,
        isSale: true,
        featured: false
    },
    {
        id: 111,
        name: "Gaming Laptop",
        category: "Electronics",
        price: 49999.99,
        description: "High-performance gaming laptop with NVIDIA RTX graphics, 16GB RAM, and 1TB SSD storage.",
        images: ["https://images.unsplash.com/photo-1603302576837-37561b2e2302", "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf"],
        brand: "Alienware",
        rating: 4.8,
        reviewCount: 142,
        inStock: true,
        isNew: true,
        isSale: false,
        featured: true
    },
    {
        id: 112,
        name: "Mechanical Keyboard",
        category: "Electronics",
        price: 1799.99,
        oldPrice: 1999.99,
        description: "Mechanical gaming keyboard with customizable RGB lighting and programmable keys.",
        images: ["https://images.unsplash.com/photo-1595044426077-d36d9236d44a", "https://images.unsplash.com/photo-1587829741301-dc798b83add3"],
        brand: "Corsair",
        rating: 4.6,
        reviewCount: 98,
        inStock: true,
        isNew: false,
        isSale: true,
        featured: false
    },
    {
        id: 113,
        name: "Wireless Gaming Mouse",
        category: "Electronics",
        price: 1299.99,
        description: "High-precision wireless gaming mouse with adjustable DPI and programmable buttons.",
        images: ["https://images.unsplash.com/photo-1605773527852-c546a8584ea3", "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7"],
        brand: "Logitech",
        rating: 4.7,
        reviewCount: 123,
        inStock: true,
        isNew: true,
        isSale: false,
        featured: false
    },
    {
        id: 114,
        name: "Men's Running Shoes",
        category: "Footwear",
        price: 2799.99,
        oldPrice: 3299.99,
        description: "Lightweight running shoes with responsive cushioning and breathable mesh upper.",
        images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff", "https://images.unsplash.com/photo-1608231387042-66d1773070a5"],
        brand: "Nike",
        rating: 4.8,
        reviewCount: 187,
        inStock: true,
        isNew: false,
        isSale: true,
        featured: true
    },
    {
        id: 115,
        name: "Women's Casual Sneakers",
        category: "Footwear",
        price: 1999.99,
        description: "Stylish and comfortable casual sneakers perfect for everyday wear.",
        images: ["https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a", "https://images.unsplash.com/photo-1549298916-b41d501d3772"],
        brand: "Adidas",
        rating: 4.6,
        reviewCount: 165,
        inStock: true,
        isNew: true,
        isSale: false,
        featured: false
    },
    {
        id: 116,
        name: "Smart Home Security System",
        category: "Electronics",
        price: 7999.99,
        oldPrice: 8999.99,
        description: "Comprehensive smart home security system with cameras, motion sensors, and mobile app control.",
        images: ["https://images.unsplash.com/photo-1558002038-bb0401b9e6b6", "https://images.unsplash.com/photo-1563459802257-2a97df940f11"],
        brand: "Ring",
        rating: 4.7,
        reviewCount: 143,
        inStock: true,
        isNew: false,
        isSale: true,
        featured: true
    },
    {
        id: 117,
        name: "Drone with 4K Camera",
        category: "Electronics",
        price: 14999.99,
        description: "Professional drone with 4K camera, GPS, obstacle avoidance, and 30-minute flight time.",
        images: ["https://images.unsplash.com/photo-1508614589041-895b88991e3e", "https://images.unsplash.com/photo-1579829366248-204fe8413f31"],
        brand: "DJI",
        rating: 4.9,
        reviewCount: 112,
        inStock: true,
        isNew: true,
        isSale: false,
        featured: true
    },
    {
        id: 118,
        name: "Luxury Watch",
        category: "Accessories",
        price: 12999.99,
        oldPrice: 14999.99,
        description: "Premium luxury watch with automatic movement, sapphire crystal, and stainless steel bracelet.",
        images: ["https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3", "https://images.unsplash.com/photo-1508057198894-247b23fe5ade"],
        brand: "Omega",
        rating: 4.8,
        reviewCount: 98,
        inStock: true,
        isNew: false,
        isSale: true,
        featured: true
    },
    {
        id: 119,
        name: "Portable Bluetooth Speaker",
        category: "Electronics",
        price: 1299.99,
        description: "Waterproof Bluetooth speaker with 360-degree sound, deep bass, and 20-hour battery life.",
        images: ["https://images.unsplash.com/photo-1608043152269-423dbba4e7e1", "https://images.unsplash.com/photo-1589003511513-eefa2333128f"],
        brand: "JBL",
        rating: 4.6,
        reviewCount: 187,
        inStock: true,
        isNew: true,
        isSale: false,
        featured: false
    },
    {
        id: 120,
        name: "Handcrafted Leather Wallet",
        category: "Accessories",
        price: 899.99,
        oldPrice: 1199.99,
        description: "Genuine leather bifold wallet with RFID protection, multiple card slots, and slim design.",
        images: [
            "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        brand: "Fossil",
        rating: 4.7,
        reviewCount: 89,
        inStock: true,
        isNew: false,
        isSale: true,
        featured: true,
        trending: false,
        attributes: {
            color: "Brown",
            material: "Genuine Leather",
            cardSlots: "8"
        }
    },
    {
        id: 121,
        name: "Coffee Bean Grinder",
        category: "Home",
        price: 1299.99,
        description: "Electric coffee bean grinder with 18 grind settings, stainless steel blades, and compact design.",
        images: [
            "https://images.unsplash.com/photo-1611162058117-ece0b8927e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1622623269749-acf5cfb1ff8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        brand: "Breville",
        rating: 4.5,
        reviewCount: 112,
        inStock: true,
        isNew: true,
        isSale: false,
        featured: false,
        trending: true,
        attributes: {
            color: "Silver",
            capacity: "60g",
            settings: "18"
        }
    },
    {
        id: 122,
        name: "Indoor Plant Collection",
        category: "Home",
        price: 1999.99,
        oldPrice: 2499.99,
        description: "Set of 5 easy-care indoor plants with decorative pots. Perfect for home or office decoration.",
        images: [
            "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1545165375-7c5f3a5cf997?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        brand: "Bloomscape",
        rating: 4.6,
        reviewCount: 78,
        inStock: true,
        isNew: false,
        isSale: true,
        featured: true,
        trending: true,
        attributes: {
            plantTypes: "Assorted",
            potMaterial: "Ceramic",
            careLevel: "Easy"
        }
    },
    {
        id: 123,
        name: "Digital Drawing Tablet",
        category: "Electronics",
        price: 8999.99,
        description: "Professional graphics tablet with pressure-sensitive pen, customizable shortcuts, and large drawing area.",
        images: [
            "https://images.unsplash.com/photo-1626144235705-1f5a583c1152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1612599316791-451087e8f5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        brand: "Wacom",
        rating: 4.8,
        reviewCount: 145,
        inStock: true,
        isNew: true,
        isSale: false,
        featured: true,
        trending: false,
        attributes: {
            size: "Medium",
            pressureLevels: "8192",
            connectivity: "USB-C"
        }
    },
    {
        id: 124,
        name: "Scented Soy Candle Set",
        category: "Home",
        price: 1499.99,
        oldPrice: 1899.99,
        description: "Set of 3 premium soy candles with long burn time and natural essential oil fragrances.",
        images: [
            "https://images.unsplash.com/photo-1603006905394-ee0c0a1ecabc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        brand: "NEST",
        rating: 4.7,
        reviewCount: 93,
        inStock: true,
        isNew: false,
        isSale: true,
        featured: false,
        trending: true,
        attributes: {
            scents: "Lavender, Vanilla, Citrus",
            burnTime: "50 hours each",
            material: "100% Soy Wax"
        }
    },
    {
        id: 125,
        name: "Bluetooth Portable Speaker",
        category: "Electronics",
        price: 2499.99,
        description: "Waterproof portable speaker with 360° sound, 24-hour battery life, and built-in microphone.",
        images: [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1589003511763-eecbfb6c606a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        brand: "JBL",
        rating: 4.6,
        reviewCount: 217,
        inStock: true,
        isNew: true,
        isSale: false,
        featured: true,
        trending: true,
        attributes: {
            color: "Black",
            batteryLife: "24 hours",
            waterproof: "IPX7"
        }
    },
    {
        id: 126,
        name: "Cozy Knit Throw Blanket",
        category: "Home",
        price: 1299.99,
        oldPrice: 1599.99,
        description: "Soft, chunky knit throw blanket perfect for adding warmth and texture to any room.",
        images: [
            "https://images.unsplash.com/photo-1580999916862-0833e4fe6324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1600369672770-985fd30004eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        brand: "West Elm",
        rating: 4.5,
        reviewCount: 67,
        inStock: true,
        isNew: false,
        isSale: true,
        featured: true,
        trending: false,
        attributes: {
            color: "Ivory",
            size: "50\" x 60\"",
            material: "Cotton Blend"
        }
    },
    {
        id: 127,
        name: "Professional Hair Dryer",
        category: "Beauty",
        price: 4999.99,
        description: "Salon-quality hair dryer with ionic technology, multiple heat settings, and quick-drying performance.",
        images: [
            "https://images.unsplash.com/photo-1522338140262-f46f5913618a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        brand: "Dyson",
        rating: 4.9,
        reviewCount: 183,
        inStock: true,
        isNew: true,
        isSale: false,
        featured: true,
        trending: true,
        attributes: {
            color: "Fuchsia/Nickel",
            settings: "3 heat, 3 speed",
            technology: "Ionic"
        }
    },
    {
        id: 128,
        name: "Wooden Cutting Board Set",
        category: "Kitchen",
        price: 1799.99,
        oldPrice: 2299.99,
        description: "Set of 3 acacia wood cutting boards in different sizes, perfect for food prep and serving.",
        images: [
            "https://images.unsplash.com/photo-1594228542268-aaa97104287e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1584689322447-b50db6ed3f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        brand: "Williams Sonoma",
        rating: 4.7,
        reviewCount: 56,
        inStock: true,
        isNew: false,
        isSale: true,
        featured: false,
        trending: true,
        attributes: {
            material: "Acacia Wood",
            sizes: "Small, Medium, Large",
            care: "Hand Wash Only"
        }
    },
    {
        id: 129,
        name: "Smart Robot Vacuum Cleaner",
        category: "Home",
        price: 9999.99,
        oldPrice: 12999.99,
        description: "Intelligent robot vacuum with mapping technology, app control, and automatic emptying station.",
        images: [
            "https://images.unsplash.com/photo-1593643946890-b5b85ece6166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1562656750-0d5296621050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        brand: "iRobot",
        rating: 4.8,
        reviewCount: 321,
        inStock: true,
        isNew: true,
        isSale: true,
        featured: true,
        trending: true,
        attributes: {
            color: "Black",
            batteryLife: "120 minutes",
            features: "Mapping, Auto-empty"
        }
    }
];

// Categories data
const categories = [
    {
        id: 1,
        name: 'Shoes',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
        count: 120
    },
    {
        id: 2,
        name: 'Electronics',
        image: 'https://images.unsplash.com/photo-1588117305388-c2631a279f82',
        count: 85
    },
    {
        id: 3,
        name: 'Clothing',
        image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9',
        count: 210
    },
    {
        id: 4,
        name: 'Accessories',
        image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111',
        count: 75
    }
];

// Add additional check after product declaration to fix any broken image URLs
const checkAndFixProductImages = () => {
    // Validate image URLs for all products
    products.forEach(product => {
        // Ensure images array exists
        if (!product.images) {
            product.images = [];
        }
        
        // If no images, add placeholder
        if (product.images.length === 0) {
            product.images.push('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNGM0YzRjMiLz48cGF0aCBkPSJNODIgMTI1LjVDODIgMTE3LjIxNiA4OC43MTU3IDExMC41IDk3IDExMC41SDEwM0MxMTEuMjg0IDExMC41IDExOCAxMTcuMjE2IDExOCAxMjUuNVYxMjUuNUMxMTggMTMzLjc4NCAxMTEuMjg0IDE0MC41IDEwMyAxNDAuNUg5N0M4OC43MTU3IDE0MC41IDgyIDEzMy43ODQgODIgMTI1LjVWMTI1LjVaIiBmaWxsPSIjQkRCREJEIi8+PHBhdGggZD0iTTY2IDg4QzY2IDc0LjE5MzggNzcuMTkzOCA2MyA5MSA2M0gxMDlDMTIyLjgwNiA2MyAxMzQgNzQuMTkzOCAxMzQgODhWODhDMTM0IDEwMS44MDYgMTIyLjgwNiAxMTMgMTA5IDExM0g5MUM3Ny4xOTM4IDExMyA2NiAxMDEuODA2IDY2IDg4Vjg4WiIgZmlsbD0iI0JEQkRCRCIvPjxwYXRoIGQ9Ik02NSAxNDdDODEuNTY4NSAxNDcgOTUgMTMzLjU2OSA5NSAxMTdDOTUgMTAwLjQzMSA4MS41Njg1IDg3IDY1IDg3QzQ4LjQzMTUgODcgMzUgMTAwLjQzMSAzNSAxMTdDMzUgMTMzLjU2OSA0OC40MzE1IDE0NyA2NSAxNDdaIiBmaWxsPSIjQkRCREJEIi8+PHBhdGggZD0iTTEzNSAxNDdDMTUxLjU2OSAxNDcgMTY1IDEzMy41NjkgMTY1IDExN0MxNjUgMTAwLjQzMSAxNTEuNTY5IDg3IDEzNSA4N0MxMTguNDMxIDg3IDEwNSAxMDAuNDMxIDEwNSAxMTdDMTA1IDEzMy41NjkgMTE4LjQzMSAxNDcgMTM1IDE0N1oiIGZpbGw9IiNCREJEQkQiLz48L3N2Zz4=');
        }
        
        // Fix any image URLs without proper query parameters
        product.images = product.images.map(imageUrl => {
            // Skip data URLs
            if (imageUrl.startsWith('data:')) return imageUrl;
            
            // Check and add query parameters for Unsplash images
            if (imageUrl.includes('unsplash.com') && !imageUrl.includes('ixlib=')) {
                return `${imageUrl}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`;
            }
            
            return imageUrl;
        });
        
        // Ensure product has all required properties
        if (product.inStock === undefined) product.inStock = true;
        if (product.rating === undefined) product.rating = 4.0;
        if (product.reviewCount === undefined) product.reviewCount = 0;
    });
};

// Call the function to fix all product images
checkAndFixProductImages();

// Optimize product filtering function
function filterProducts(criteria) {
    let filtered = [...products];
    
    if (criteria.category && criteria.category !== 'all') {
        filtered = filtered.filter(product => 
            product.category.toLowerCase() === criteria.category.toLowerCase());
    }
    
    if (criteria.search) {
        const searchLower = criteria.search.toLowerCase();
        filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(searchLower) ||
            product.description.toLowerCase().includes(searchLower) ||
            product.category.toLowerCase().includes(searchLower) ||
            (product.brand && product.brand.toLowerCase().includes(searchLower)));
    }
    
    if (criteria.minPrice !== undefined && criteria.minPrice !== null) {
        filtered = filtered.filter(product => product.price >= criteria.minPrice);
    }
    
    if (criteria.maxPrice !== undefined && criteria.maxPrice !== null) {
        filtered = filtered.filter(product => product.price <= criteria.maxPrice);
    }
    
    if (criteria.brands && criteria.brands.length > 0) {
        filtered = filtered.filter(product => 
            criteria.brands.some(brand => 
                product.brand && product.brand.toLowerCase() === brand.toLowerCase()
            )
        );
    }
    
    if (criteria.inStock !== undefined) {
        filtered = filtered.filter(product => product.inStock === criteria.inStock);
    }
    
    if (criteria.isSale !== undefined) {
        filtered = filtered.filter(product => product.isSale === criteria.isSale);
    }
    
    if (criteria.isNew !== undefined) {
        filtered = filtered.filter(product => product.isNew === criteria.isNew);
    }
    
    if (criteria.featured !== undefined) {
        filtered = filtered.filter(product => product.featured === criteria.featured);
    }
    
    if (criteria.trending !== undefined) {
        filtered = filtered.filter(product => product.trending === criteria.trending);
    }
    
    // Apply attribute filters (color, size, etc.)
    if (criteria.attributes) {
        Object.entries(criteria.attributes).forEach(([key, value]) => {
            filtered = filtered.filter(product => {
                if (!product.attributes || !product.attributes[key]) {
                    return false;
                }
                
                if (Array.isArray(product.attributes[key])) {
                    if (Array.isArray(value)) {
                        return value.some(v => product.attributes[key].includes(v));
                    } else {
                        return product.attributes[key].includes(value);
                    }
                } else {
                    return product.attributes[key] === value;
                }
            });
        });
    }
    
    return filtered;
}

// Improved function to render products with error handling
function renderProducts(container, products) {
    if (!container) {
        console.error('Container element not found');
        return;
    }
    
    // Clear container
    container.innerHTML = '';
    
    // Handle empty products array
    if (!products || products.length === 0) {
        container.innerHTML = `
            <div class="no-products-found">
                <i class="fas fa-search"></i>
                <h3>No products found</h3>
                <p>Try adjusting your filters or search criteria</p>
            </div>
        `;
        return;
    }
    
    // Use optimized rendering function from imageLoader.js if available
    if (typeof renderProductWithImageHandling === 'function') {
        products.forEach(product => {
            renderProductWithImageHandling(product, container);
        });
    } else {
        // Fallback to basic rendering
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product-card';
            productElement.dataset.id = product.id;
            
            productElement.innerHTML = `
                <div class="product-img-container">
                    <img class="product-img" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNGM0YzRjMiLz48cGF0aCBkPSJNODIgMTI1LjVDODIgMTE3LjIxNiA4OC43MTU3IDExMC41IDk3IDExMC41SDEwM0MxMTEuMjg0IDExMC41IDExOCAxMTcuMjE2IDExOCAxMjUuNVYxMjUuNUMxMTggMTMzLjc4NCAxMTEuMjg0IDE0MC41IDEwMyAxNDAuNUg5N0M4OC43MTU3IDE0MC41IDgyIDEzMy43ODQgODIgMTI1LjVWMTI1LjVaIiBmaWxsPSIjQkRCREJEIi8+PHBhdGggZD0iTTY2IDg4QzY2IDc0LjE5MzggNzcuMTkzOCA2MyA5MSA2M0gxMDlDMTIyLjgwNiA2MyAxMzQgNzQuMTkzOCAxMzQgODhWODhDMTM0IDEwMS44MDYgMTIyLjgwNiAxMTMgMTA5IDExM0g5MUM3Ny4xOTM4IDExMyA2NiAxMDEuODA2IDY2IDg4Vjg4WiIgZmlsbD0iI0JEQkRCRCIvPjxwYXRoIGQ9Ik02NSAxNDdDODEuNTY4NSAxNDcgOTUgMTMzLjU2OSA5NSAxMTdDOTUgMTAwLjQzMSA4MS41Njg1IDg3IDY1IDg3QzQ4LjQzMTUgODcgMzUgMTAwLjQzMSAzNSAxMTdDMzUgMTMzLjU2OSA0OC40MzE1IDE0NyA2NSAxNDdaIiBmaWxsPSIjQkRCREJEIi8+PHBhdGggZD0iTTEzNSAxNDdDMTUxLjU2OSAxNDcgMTY1IDEzMy41NjkgMTY1IDExN0MxNjUgMTAwLjQzMSAxNTEuNTY5IDg3IDEzNSA4N0MxMTguNDMxIDg3IDEwNSAxMDAuNDMxIDEwNSAxMTdDMTA1IDEzMy41NjkgMTE4LjQzMSAxNDcgMTM1IDE0N1oiIGZpbGw9IiNCREJEQkQiLz48L3N2Zz4=" data-src="${product.images[0]}" alt="${product.name}" onerror="handleImageError(this)">
                    <div class="product-img-placeholder">
                        <i class="fas fa-image"></i>
                    </div>
                    ${product.isNew ? '<span class="product-badge new">New</span>' : ''}
                    ${product.isSale ? '<span class="product-badge sale">Sale</span>' : ''}
                    <div class="product-actions">
                        <button class="quick-view-btn" data-id="${product.id}">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="add-to-wishlist" data-id="${product.id}">
                            <i class="far fa-heart"></i>
                        </button>
                        <button class="add-to-cart-btn" data-id="${product.id}">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-rating">
                        ${renderRatingStars(product.rating)}
                        <span class="review-count">(${product.reviewCount || 0})</span>
                    </div>
                    <div class="product-price">
                        ${product.oldPrice ? `<span class="old-price">₹${product.oldPrice}</span>` : ''}
                        <span class="current-price">₹${product.price}</span>
                    </div>
                </div>
            `;
            
            container.appendChild(productElement);
        });
    }
    
    // Initialize event listeners for product interactions
    initProductEventListeners(container);
}

// Add a function to initialize product event listeners
function initProductEventListeners(container) {
    // Add to cart buttons
    const addToCartButtons = container.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = parseInt(this.dataset.id);
            const product = getProductById(productId);
            
            if (product) {
                addToCart(product);
                showNotification(`${product.name} added to cart!`);
            }
        });
    });
    
    // Quick view buttons
    const quickViewButtons = container.querySelectorAll('.quick-view-btn');
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = parseInt(this.dataset.id);
            const product = getProductById(productId);
            
            if (product) {
                showQuickView(product);
            }
        });
    });
    
    // Wishlist buttons
    const wishlistButtons = container.querySelectorAll('.add-to-wishlist');
    wishlistButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = parseInt(this.dataset.id);
            const product = getProductById(productId);
            
            if (product) {
                addToWishlist(product);
                this.classList.toggle('active');
                this.querySelector('i').classList.toggle('far');
                this.querySelector('i').classList.toggle('fas');
                showNotification(`${product.name} ${this.classList.contains('active') ? 'added to' : 'removed from'} wishlist!`);
            }
        });
    });
}

// Add utility functions for notifications
function showNotification(message, type = 'success', duration = 3000) {
    // Check if notification container exists, if not create it
    let notificationContainer = document.querySelector('.notification-container');
    
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.className = 'notification-container';
        document.body.appendChild(notificationContainer);
        
        // Add styles if they don't exist
        if (!document.getElementById('notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                .notification-container {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    z-index: 9999;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .notification {
                    background: white;
                    color: #333;
                    padding: 15px 20px;
                    border-radius: 4px;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
                    max-width: 300px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    animation: slide-in 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }
                .notification.success {
                    border-left: 4px solid #4CAF50;
                }
                .notification.error {
                    border-left: 4px solid #F44336;
                }
                .notification.info {
                    border-left: 4px solid #2196F3;
                }
                .notification i {
                    font-size: 1.2rem;
                }
                .notification.success i {
                    color: #4CAF50;
                }
                .notification.error i {
                    color: #F44336;
                }
                .notification.info i {
                    color: #2196F3;
                }
                @keyframes slide-in {
                    0% {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    100% {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                @keyframes slide-out {
                    0% {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    100% {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    // Add icon based on type
    let icon = 'info-circle';
    if (type === 'success') icon = 'check-circle';
    if (type === 'error') icon = 'exclamation-circle';
    
    notification.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
    `;
    
    // Add to container
    notificationContainer.appendChild(notification);
    
    // Remove after duration
    setTimeout(() => {
        notification.style.animation = 'slide-out 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards';
        setTimeout(() => {
            notificationContainer.removeChild(notification);
        }, 300);
    }, duration);
}

// Add functions for cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product, quantity = 1) {
    // Check if product is already in cart
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            quantity: quantity
        });
    }
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
}

function updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    
    cartCountElements.forEach(element => {
        element.textContent = count;
    });
}

// Add wishlist functionality
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function addToWishlist(product) {
    const index = wishlist.findIndex(item => item.id === product.id);
    
    if (index !== -1) {
        // Remove if already in wishlist
        wishlist.splice(index, 1);
    } else {
        // Add to wishlist
        wishlist.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0]
        });
    }
    
    // Save wishlist to localStorage
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// Add function to show quick view modal
function showQuickView(product) {
    // Create modal if it doesn't exist
    let quickViewModal = document.getElementById('quick-view-modal');
    
    if (!quickViewModal) {
        quickViewModal = document.createElement('div');
        quickViewModal.id = 'quick-view-modal';
        quickViewModal.className = 'modal';
        document.body.appendChild(quickViewModal);
    }
    
    // Generate additional images HTML
    let additionalImagesHtml = '';
    if (product.images.length > 1) {
        additionalImagesHtml = `
            <div class="additional-images">
                ${product.images.map((img, index) => `
                    <div class="thumbnail ${index === 0 ? 'active' : ''}" data-src="${img}">
                        <img src="${img}" alt="${product.name} - Image ${index + 1}" onerror="handleImageError(this)">
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    // Generate attributes HTML
    let attributesHtml = '';
    if (product.attributes) {
        attributesHtml = `
            <div class="product-attributes">
                ${Object.entries(product.attributes).map(([key, value]) => `
                    <div class="attribute">
                        <span class="attribute-name">${key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                        <span class="attribute-value">${value}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    // Populate modal
    quickViewModal.innerHTML = `
        <div class="modal-content product-modal">
            <span class="close-modal">&times;</span>
            <div class="product-modal-content">
                <div class="product-image-gallery">
                    <div class="main-image">
                        <img src="${product.images[0]}" alt="${product.name}" onerror="handleImageError(this)">
                    </div>
                    ${additionalImagesHtml}
                </div>
                <div class="product-details">
                    <h2>${product.name}</h2>
                    <div class="product-meta">
                        <span class="product-brand">${product.brand || ''}</span>
                        <div class="product-rating">
                            ${renderRatingStars(product.rating)}
                            <span class="review-count">(${product.reviewCount || 0} reviews)</span>
                        </div>
                    </div>
                    <div class="product-price-container">
                        ${product.oldPrice ? `<span class="old-price">₹${product.oldPrice}</span>` : ''}
                        <span class="current-price">₹${product.price}</span>
                        ${product.isSale ? '<span class="discount-badge">SALE</span>' : ''}
                    </div>
                    <div class="product-description">
                        <p>${product.description}</p>
                    </div>
                    ${attributesHtml}
                    <div class="add-to-cart-container">
                        <div class="quantity-selector">
                            <button class="quantity-btn minus">-</button>
                            <input type="number" value="1" min="1" class="quantity-input">
                            <button class="quantity-btn plus">+</button>
                        </div>
                        <button class="btn add-to-cart-btn" data-id="${product.id}">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                    </div>
                    <div class="product-actions-secondary">
                        <button class="btn-outline add-to-wishlist" data-id="${product.id}">
                            <i class="far fa-heart"></i> Add to Wishlist
                        </button>
                        <button class="btn-outline share-product">
                            <i class="fas fa-share-alt"></i> Share
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Show modal
    quickViewModal.style.display = 'flex';
    setTimeout(() => {
        quickViewModal.querySelector('.modal-content').style.transform = 'translateY(0)';
        quickViewModal.querySelector('.modal-content').style.opacity = '1';
    }, 10);
    
    // Add event listeners
    const closeBtn = quickViewModal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        quickViewModal.querySelector('.modal-content').style.transform = 'translateY(-20px)';
        quickViewModal.querySelector('.modal-content').style.opacity = '0';
        setTimeout(() => {
            quickViewModal.style.display = 'none';
        }, 300);
    });
    
    // Image gallery functionality
    const thumbnails = quickViewModal.querySelectorAll('.thumbnail');
    const mainImage = quickViewModal.querySelector('.main-image img');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            // Update main image
            mainImage.src = thumb.dataset.src;
            
            // Update active state
            thumbnails.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });
    
    // Quantity selector
    const quantityInput = quickViewModal.querySelector('.quantity-input');
    const minusBtn = quickViewModal.querySelector('.quantity-btn.minus');
    const plusBtn = quickViewModal.querySelector('.quantity-btn.plus');
    
    minusBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
    
    plusBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });
    
    // Add to cart
    const addToCartBtn = quickViewModal.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        addToCart(product, quantity);
        showNotification(`${product.name} added to cart!`);
        
        // Close modal
        closeBtn.click();
    });
    
    // Add to wishlist
    const wishlistBtn = quickViewModal.querySelector('.add-to-wishlist');
    
    // Check if product is in wishlist
    const isInWishlist = wishlist.some(item => item.id === product.id);
    if (isInWishlist) {
        wishlistBtn.classList.add('active');
        wishlistBtn.querySelector('i').classList.remove('far');
        wishlistBtn.querySelector('i').classList.add('fas');
    }
    
    wishlistBtn.addEventListener('click', () => {
        addToWishlist(product);
        wishlistBtn.classList.toggle('active');
        wishlistBtn.querySelector('i').classList.toggle('far');
        wishlistBtn.querySelector('i').classList.toggle('fas');
        showNotification(`${product.name} ${wishlistBtn.classList.contains('active') ? 'added to' : 'removed from'} wishlist!`);
    });
    
    // Share functionality
    const shareBtn = quickViewModal.querySelector('.share-product');
    shareBtn.addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: product.name,
                text: product.description,
                url: window.location.href
            })
            .then(() => showNotification('Product shared successfully!'))
            .catch(() => showNotification('Failed to share product', 'error'));
        } else {
            // Fallback
            showNotification('Sharing is not supported on this browser', 'info');
        }
    });
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});

// Get products by criteria
function getProducts(criteria = {}) {
    const filteredProducts = filterProducts(criteria);
    
    // Sort products
    if (criteria.sort) {
        switch (criteria.sort) {
            case 'price-low-high':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high-low':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'name-a-z':
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-z-a':
                filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'rating':
                filteredProducts.sort((a, b) => b.rating - a.rating);
                break;
            default:
                // Default is featured
                filteredProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        }
    }
    
    return filteredProducts;
}

// Get products by ID
function getProductById(id) {
    return products.find(product => product.id === parseInt(id));
}

// Get featured products
function getFeaturedProducts() {
    return products.filter(product => product.featured);
}

// Get trending products
function getTrendingProducts() {
    return products.filter(product => product.trending);
}

// Get all categories
function getCategories() {
    return categories;
}

// Get a category by ID
function getCategoryById(id) {
    return categories.find(category => category.id === parseInt(id));
}

// Get all products
function getAllProducts() {
    return products;
}

// Get products by category
function getProductsByCategory(categoryName) {
    return products.filter(product => product.category.toLowerCase() === categoryName.toLowerCase());
}

// Get new products
function getNewProducts() {
    return products.filter(product => product.new);
}

// Get products on sale
function getProductsOnSale() {
    return products.filter(product => product.discount > 0);
}

// Get related products
function getRelatedProducts(productId) {
    const product = getProductById(productId);
    if (!product) return [];
    
    return product.relatedProducts.map(id => getProductById(id));
}

// Advanced search functionality
function searchProducts(query, filters = {}) {
    if (!query && Object.keys(filters).length === 0) {
        return products;
    }
    
    let filteredProducts = [...products];
    
    // Apply text search if query exists
    if (query) {
        const searchTerms = query.toLowerCase().split(' ');
        filteredProducts = filteredProducts.filter(product => {
            const searchableText = `${product.name} ${product.description} ${product.brand} ${product.category}`.toLowerCase();
            return searchTerms.every(term => searchableText.includes(term));
        });
    }
    
    // Apply category filter
    if (filters.category) {
        filteredProducts = filteredProducts.filter(product => 
            product.category.toLowerCase() === filters.category.toLowerCase()
        );
    }
    
    // Apply price range filter
    if (filters.minPrice !== undefined) {
        filteredProducts = filteredProducts.filter(product => 
            product.price >= filters.minPrice
        );
    }
    
    if (filters.maxPrice !== undefined) {
        filteredProducts = filteredProducts.filter(product => 
            product.price <= filters.maxPrice
        );
    }
    
    // Apply brand filter
    if (filters.brand) {
        const brands = Array.isArray(filters.brand) ? filters.brand : [filters.brand];
        filteredProducts = filteredProducts.filter(product => 
            brands.includes(product.brand)
        );
    }
    
    // Apply rating filter
    if (filters.minRating !== undefined) {
        filteredProducts = filteredProducts.filter(product => 
            product.rating >= filters.minRating
        );
    }
    
    // Apply availability filter
    if (filters.inStock !== undefined) {
        filteredProducts = filteredProducts.filter(product => 
            product.inStock === filters.inStock
        );
    }
    
    // Apply discount filter
    if (filters.onSale !== undefined && filters.onSale) {
        filteredProducts = filteredProducts.filter(product => 
            product.discount > 0
        );
    }
    
    // Apply attribute filters (color, size, etc.)
    if (filters.attributes) {
        Object.entries(filters.attributes).forEach(([key, value]) => {
            filteredProducts = filteredProducts.filter(product => {
                if (!product.attributes || !product.attributes[key]) {
                    return false;
                }
                
                if (Array.isArray(product.attributes[key])) {
                    if (Array.isArray(value)) {
                        return value.some(v => product.attributes[key].includes(v));
                    } else {
                        return product.attributes[key].includes(value);
                    }
                } else {
                    return product.attributes[key] === value;
                }
            });
        });
    }
    
    return filteredProducts;
}

// Sort products
function sortProducts(products, sortBy = 'default') {
    const sortedProducts = [...products];
    
    switch(sortBy) {
        case 'name-asc':
            return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        case 'name-desc':
            return sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        case 'price-asc':
            return sortedProducts.sort((a, b) => a.price - b.price);
        case 'price-desc':
            return sortedProducts.sort((a, b) => b.price - a.price);
        case 'rating-desc':
            return sortedProducts.sort((a, b) => b.rating - a.rating);
        case 'discount-desc':
            return sortedProducts.sort((a, b) => b.discount - a.discount);
        case 'newest':
            return sortedProducts.sort((a, b) => b.new - a.new);
        default:
            return sortedProducts;
    }
}

// Get unique brands from all products
function getAllBrands() {
    const brands = new Set(products.map(product => product.brand));
    return Array.from(brands);
}

// Get price range
function getPriceRange() {
    let minPrice = Infinity;
    let maxPrice = 0;
    
    products.forEach(product => {
        minPrice = Math.min(minPrice, product.price);
        maxPrice = Math.max(maxPrice, product.price);
    });
    
    return { minPrice, maxPrice };
}

// Get all attributes and their possible values
function getAllAttributes() {
    const attributes = {};
    
    products.forEach(product => {
        if (product.attributes) {
            Object.entries(product.attributes).forEach(([key, value]) => {
                if (!attributes[key]) {
                    attributes[key] = new Set();
                }
                
                if (Array.isArray(value)) {
                    value.forEach(v => attributes[key].add(v));
                } else {
                    attributes[key].add(value);
                }
            });
        }
    });
    
    // Convert Sets to Arrays
    Object.keys(attributes).forEach(key => {
        attributes[key] = Array.from(attributes[key]);
    });
    
    return attributes;
}

// Calculate discount price
function getDiscountedPrice(product) {
    if (!product.discount) return product.price;
    return product.price * (1 - product.discount / 100);
}

// Pagination helper
function paginateProducts(products, page = 1, perPage = 10) {
    const startIndex = (page - 1) * perPage;
    const endIndex = page * perPage;
    
    return {
        total: products.length,
        totalPages: Math.ceil(products.length / perPage),
        currentPage: page,
        products: products.slice(startIndex, endIndex)
    };
}

// Helper to get random products
function getRandomProducts(count = 4) {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getAllProducts,
        getProductById,
        getProductsByCategory,
        getFeaturedProducts,
        getNewProducts,
        getProductsOnSale,
        getRelatedProducts,
        getCategories,
        getCategoryById,
        searchProducts,
        sortProducts,
        getAllBrands,
        getPriceRange,
        getAllAttributes,
        getDiscountedPrice,
        paginateProducts,
        getRandomProducts
    };
} 