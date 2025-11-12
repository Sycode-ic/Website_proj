import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { PiUserListBold } from "react-icons/pi";
import { FaRegCalendar } from "react-icons/fa";
import { ImProfile } from "react-icons/im";


const NavBar = () => {
    return(
    <aside className="w-25 bg-[var(--primary)] flex flex-col items-center rounded-r-2xl">
		<div className="relative top-5 w-15 h-15 bg-gray-300 rounded-full mb-15"></div>

		<nav className="flex flex-col items-center gap-19 w-full text-center justify-center text-black font-medium pt-10">
		
		<Link to="/dashboard">
			<MdOutlineDashboard color="white" size={30}/>
		</Link>

		<Link to="/patientlist">
			<PiUserListBold  color="white" size={30}/>
		</Link>
		
		
		<Link to="/schedule">
			<FaRegCalendar color="white" size={30}/>
		</Link>

		<Link to="/patientprofile">
			<ImProfile color="white" size={30}/>
		</Link>
		</nav>
	
	</aside>
    )
};
export default NavBar;