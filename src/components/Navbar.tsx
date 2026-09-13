
import logo from '../assets/logo-text.png'
const Navbar = () => {
    return (
        <nav className="mt-5 container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between text-gray-700">
            <div >
                <img src={logo} alt="" />
            </div>
            <ul className='flex gap-5'>
                <li><a className='text-pink-600 font-semibold' href="">Home</a></li>
                <li><a href="">Technologies</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <div>
                <button className='font-semibold'>SignIn</button>
                <button className='font-semibold mx-5 bg-pink-600 text-white px-3 py-1 rounded-2xl'>Sign up</button>
            </div>
        </nav>
    );
};

export default Navbar;