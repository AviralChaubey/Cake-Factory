// src/data/products.js

import Waffle from '../assets/images/wafflestrawberry.jpg';
import Chocolate from '../assets/images/chocolate.jpg';
import Strawberry from '../assets/images/strawberrypancake.jpg';
import Berry from '../assets/images/blueberry.png';
import Vanilla from '../assets/images/vanilla.png';
import Lemon from '../assets/images/lemon.png';
import Caramel from '../assets/images/caramel.png';
import Blueberry from '../assets/images/blueberry.png';
import Butterscotch from '../assets/images/butterscotch.png';

export const products = [
    {
        id: 1,
        name: "Waffles",
        price: 300,
        image: Waffle,
        description: "Delicious waffles topped with fresh strawberries and cream",
        category: "Breakfast",
        inStock: true
    },
    {
        id: 2,
        name: "Chocolate Cake",
        price: 600,
        image: Chocolate,
        description: "Rich chocolate cake with chocolate ganache and decorative toppings",
        category: "Cakes",
        inStock: true
    },
    {
        id: 3,
        name: "Strawberry Pancakes",
        price: 550,
        image: Strawberry,
        description: "Light and fluffy strawberry pancakes with real fruit pieces",
        category: "Breakfast",
        inStock: true
    },
    {
        id: 4,
        name: "Berry Waffles",
        price: 450,
        image: Berry,
        description: "Mixed berry waffle delight with fresh seasonal berries",
        category: "Breakfast",
        inStock: true
    },
    {
        id: 5,
        name: "Vanilla Cake",
        price: 500,
        image: Vanilla,
        description: "Classic vanilla cake with creamy vanilla frosting",
        category: "Cakes",
        inStock: true
    },
    {
        id: 6,
        name: "Lemon Cake",
        price: 520,
        image: Lemon,
        description: "Zesty lemon cake with lemon curd filling and frosting",
        category: "Cakes",
        inStock: true
    },
    {
        id: 7,
        name: "Caramel Cake",
        price: 580,
        image: Caramel,
        description: "Sweet caramel cake with caramel drizzle and decorations",
        category: "Cakes",
        inStock: true
    },
    {
        id: 8,
        name: "Blueberry Cake",
        price: 540,
        image: Blueberry,
        description: "Refreshing blueberry cake with fresh blueberries",
        category: "Cakes",
        inStock: true
    },
    {
        id: 9,
        name: "Butterscotch Cake",
        price: 560,
        image: Butterscotch,
        description: "Delectable butterscotch cake with butterscotch chunks",
        category: "Cakes",
        inStock: true
    }
];

export default products;
