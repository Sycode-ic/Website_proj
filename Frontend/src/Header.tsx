import { FaRegBell } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";


const Header = () => {
    return (
    <header className="flex flex-row justify-left items-left p-3 gap-3">
        <input className="w-4/5 rounded-xl bg-[var(--secondary)] border-1 border-gray-400 text-center h-7" placeholder="Search"></input>
        <div className= "flex flex-row gap-5 w-1/5">
            <FaRegBell className="icon" size={25}/> <FaRegCircleUser className="icon" size={25}/>
            <p className="font-semibold text-gray-700 text-lg">User</p>
        </div>
    </header>
    )
};
export default Header;