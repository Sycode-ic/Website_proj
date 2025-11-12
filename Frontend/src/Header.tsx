import { FaRegBell } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
    return (
        <header className="flex flex-row justify-between items-center p-3 gap-3">
            {/* Search bar */}
            <input
                className="flex-1 rounded-xl bg-[var(--secondary)] border border-gray-400 text-center h-6 focus outline-none"
                placeholder="Search"
            />

            {/* Icons + User */}
            <div className="flex flex-row items-center gap-4">
                <FaRegBell size={25} />
                <FaRegCircleUser size={25} />
                <p className="font-semibold text-gray-700 text-lg">User</p>
            </div>
        </header>
    );
};
export default Header;
