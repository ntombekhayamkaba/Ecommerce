import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ShoppingCart, Heart} from "lucide-react";

const Product = () => {

    const [active, setActive] = useState({
        id: 0,
        product: 'all'
    });

    const productTitle = [
        {
            id: 0,
            title: "all",
            product: 'all'
        },
        {
            id: 1,
            title: "newest",
            product: 'newest'
        },
        {
            id: 2,
            title: "trending",
            product: 'trending'
        },
        {
            id: 3,
            title: "best seller",
            product: 'best_seller'
        },
    ];



    const products = [
        {
            title: 'library stool',
            status: 'New',
            price: 'R4578.50',
            image: '/src/assets/products/product_1.png',
            currentPrice: 'R3573.07',
            product: 'newest',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'R4578.50',
            image: '/src/assets/products/product_2.png',
            product: 'newest',
        },
        {
            title: 'library stool',
            status: 'New',
            price: 'R4578.50',
            image: '/src/assets/products/product_3.png',
            currentPrice: 'R3573.07',
            product: 'newest',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'R4578.50',
            image: '/src/assets/products/product_4.png',
            product: 'newest',
        },

        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'R4578.50',
            image: '/src/assets/products/product_5.png',
            product: 'trending',
        },
        {
            title: 'library stool',
            status: 'New',
            price: '4578.50',
            image: '/src/assets/products/product_6.png',
            currentPrice: '3573.07',
            product: 'trending',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'R4578.50',
            image: '/src/assets/products/product_7.png',
            product: 'trending',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'R4578.50',
            image: '/src/assets/products/product_8.png',
            product: 'trending',
        },
        {
            title: 'library stool',
            status: 'New',
            price: 'R4578.50',
            image: '/src/assets/products/product_1.png',
            currentPrice: 'R3573.07',
            product: 'best_seller',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: '4578.50',
            image: '/src/assets/products/product_2.png',
            product: 'best_seller',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'R4578.50',
            image: '/src/assets/products/product_3.png',
            product: 'best_seller',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'R4578.50',
            image: '/src/assets/products/product_5.png',
            product: 'best_seller',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'R4578.50',
            image: '/src/assets/products/product_6.png',
            product: 'featured',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'R4578.50',
            image: '/src/assets/products/product_7.png',
            product: 'featured',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'R4578.50',
            image: '/src/assets/products/product_8.png',
            product: 'featured',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'R4578.50',
            image: '/src/assets/products/product_1.png',
            product: 'featured',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'R4578.50',
            image: '/src/assets/products/product_2.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'R4578.50',
            image: '/src/assets/products/product_3.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'R4578.50',
            image: '/src/assets/products/product_4.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'R4578.50',
            image: '/src/assets/products/product_5.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'R4578.50',
            image: '/src/assets/products/product_6.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'R4578.50',
            image: '/src/assets/products/product_7.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'R4578.50',
            image: '/src/assets/products/product_8.png',
            product: 'all',
        },
        {
            title: 'library stool Chair',
            status: 'Sales',
            price: 'R4578.50',
            image: '/src/assets/products/product_1.png',
            product: 'all',
        },


    ];


    const productFilter = products.filter(product => product.product === active?.product);
    console.log(productFilter);


    return (
        <div className="lg:container mx-auto">
            <div className="flex flex-col items-center justify-center">
                <SectionTitle title={'our product'} textAlign={'center'} mb={'mb-5'}></SectionTitle>


                <div className="flex items-center justify-center gap-6 mb-11">
                    {
                        productTitle?.map((title, indx) => (
                            <button key={title?.id}

                                onClick={() => setActive({
                                    id: title?.id,
                                    product: title?.product
                                })}
                                className={`text-base font-black uppercase font-inter cursor-pointer ${active?.id === indx ? 'text-[#272343]' : 'text-[#9a9caa]'
                                    }`}>
                                {title?.title}
                            </button>
                        ))
                    }
                </div>
            </div>


            <div className="grid grid-cols-4 items-center gap-6">
                {

                    productFilter?.map((product, index) => (
                        <div key={index} className="p-4">
                            <div className="feature_image mb-4 relative">
                                <img className="w-full max-h-[312px] rounded-lg object-cover" src={product?.image} alt={product?.title} />
                                {
                                    product?.status && (
                                        <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg">
                                            <button className="text-sm font-inter font-normal">{product?.status}</button>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="flex items-center justify-between mb-4">
    <h4 className="text-base text-[#007580] capitalize font-inter font-normal">{product?.title}</h4>
    <div className="flex gap-2">
        <span className="bg-[#007580] h-[44px] w-[44px] rounded-lg flex items-center justify-center">
            <Heart size="1.5rem" color="#fff" />
        </span>
    </div>
</div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;