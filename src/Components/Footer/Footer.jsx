import { Link } from "react-router-dom";
import { Armchair, Facebook, Twitter, Instagram, Youtube, Banknote, CreditCard } from "lucide-react";

const Footer = () => {
    return (
        <footer>
            <div className="footer_top bg-white max-h-[343px] w-full border-t border-b border-[#e1e3e5] pt-[80px] pb-[60px]">
                <div className="lg:container mx-auto">
                    <div className="grid grid-cols-4">
                        <div>
                            {/* logo wrapper  */}
                            <div className="logo_wrapper mb-7">
                                <Link to='/' className="text-3xl text-black font-inter font-medium capitalize flex items-center gap-2">
                                    <Armchair size='2rem' color="#029fae" /> comforty
                                </Link>
                            </div>

                            <p className="text-base text-[#272343] font-inter font-normal mb-4 max-w-[350px]">
                                Comforty</p>

                            <div className="footer_social flex items-center gap-3">
                                <Link className="p-3 rounded-full border-[#007580] inline-block border-[1px]">
                                    <Facebook size='1.5rem' color="#007580" />
                                </Link>
                                <Link className="p-3 inline-block">
                                    <Twitter size='1.5rem' color="#007580" />
                                </Link>
                                <Link className="p-3 inline-block">
                                    <Instagram size='1.5rem' color="#007580" />
                                </Link>
                                <Link className="p-3 inline-block">
                                    <Youtube size='1.5rem' color="#007580" />
                                </Link>
                            </div>
                        </div>

                        <div className="footer_wrapper">
                            <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">category</h3>
                            <ul className="space-y-2 mt-4">
                                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize">sofa</Link></li>
                                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize">armchair</Link></li>
                                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize">wing chair</Link></li>
                                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize">desk chair</Link></li>
                                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize">wooden chair</Link></li>
                                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize">park bench</Link></li>
                            </ul>
                        </div>

                        <div className="footer_wrapper">
                            <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">support</h3>
                            <ul className="space-y-2 mt-4">
                                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize">help & support</Link></li>
                                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize">tearms & condition</Link></li>
                                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize">privacy policy</Link></li>
                                <li><Link className="text-base text-[#272343] font-inter font-normal capitalize">help</Link></li>
                            </ul>
                        </div>

                        <div className="newsletter">
                            <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">Contact Us</h3>
                            <form action="#" className="max-w-[424px] w-full flex items-center gap-2">
                                <input
                                    type="email"
                                    placeholder="Your Email.."
                                    className="max-w-[285px] w-full h-[46px] border-[#e1e3e5] border-[1px] rounded-lg pl-2 placeholder-gray-600"
                                />
                                <button
                                    type="submit"
                                    className="text-base text-white font-semibold capitalize w-[127px] h-[46px] bg-[#007580] rounded-lg cursor-pointer"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer_bottom bg-white w-full h-[75px] flex items-center justify-center">
                <div className="lg:container mx-auto">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-base text-[#9a9caa] font-normal font-inter">
                                © 2025 Designed & Developed by <span className="text-[#272343]">Ntombekhaya Mkaba</span>
                            </p>
                        </div>
                        <div className="flex items-center gap-3.5">
                            <p className="flex items-center gap-2 text-[#9a9caa] text-xl">
                                Bank Note <Banknote size='2rem' />
                            </p>
                            <p className="flex items-center gap-2 text-[#9a9caa] text-xl">
                                Credit Card <CreditCard size='2rem' />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
