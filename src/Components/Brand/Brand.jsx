const Brand = () => {
    const brands = [
        { id: 1, image: "/src/assets/brands/absa.png" },
        { id: 2, image: "/src/assets/brands/fnb.webp" },
        { id: 3, image: "/src/assets/brands/OZOW.png" },
        { id: 4, image: "/src/assets/brands/payjustnow.png" },
        { id: 5, image: "/src/assets/brands/paypal_2014_logo.png" },
        { id: 6, image: "/src/assets/brands/standard bank.jpg" },
        { id: 7, image: "/src/assets/brands/old mutual.jpg" },
    ];

    return (
        <div className="lg:container mx-auto py-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 items-center justify-center gap-6">
                {brands?.map((brand) => (
                    <div key={brand?.id} className="brand_item">
                        <img className="w-24 h-16 object-contain mx-auto" src={brand?.image} alt="brand" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Brand;
