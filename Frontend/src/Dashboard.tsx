import NavBar from "./NavBar";
import Styles from "./Styles";
import Schedule from './Schedule';
import Header from './Header';	

const Dashboard = () => {
return (
	<div className="min-h-screen w-full flex bg-[var(--background)]">
		

			<title>Dashboard</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

		<NavBar/>
		<div className="flex flex-col w-full">
				
			<div>
				<Header/>
			</div>

			<main className="grid grid-cols-1 sm:grid-cols-2 pl-4 pr-5 pb-5 gap-3">	
				<div className="flex flex-col gap-3">
					{/* Incoming Patient History */}
					<div className={Styles.divStyle}>
						<h2 className={Styles.h2Style}>Incoming Patient History</h2><hr></hr>
							<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3">
								<div className={Styles.smallboxes}>
								<span className="text-2xl font-bold text-gray-800">35</span>
								<span className="text-sm text-gray-500">Consultation</span>
								</div>

								<div className={Styles.smallboxes}>
								<span className="text-2xl font-bold text-gray-800">35</span>
								<span className="text-sm text-gray-500">In Progress</span>
								</div>
						
								<div className={Styles.smallboxes}>
								<span className="text-2xl font-bold text-gray-800">35</span>
								<span className="text-sm text-gray-500">Pending</span>
								</div>
							</div>
					</div>

					{/* Booking Rate */}
					<div className={Styles.divStyle}>
						<div>
							<h2 className={Styles.h2Style}>Booking Rate</h2><hr></hr>
							<div className="grid grid-cols-1 pt-3">
								<div className="grid grid-cols-[1fr_3fr] p-1.5 bg-[var(--secondary)] rounded-lg">
									<div className="flex flex-col items-left justify-left p-3 rounded-lg">
										<span className="text-2xl font-bold text-gray-800">35</span>
										<span className="text-sm text-gray-500">In Progress</span>
									</div>

									<div>
										
									</div>
								</div>
							</div>
						</div>

					</div>

					{/* Schedule */}
					<div className={Styles.divStyle}>
						<div>
							<h2 className={Styles.h2Style}>Schedule</h2><hr></hr>
							{/* <Schedule locale = "en-US"/> */}
						</div>
					</div>
				</div>

			
				<div className="flex flex-col gap-3 ">
					{/* Notifications */}
					<div className="bg-[var(--background)] border-3 border-[var(--secondary)] rounded-2xl p-2.5 shadow-sm w-full">
						<div>
							<h2 className={Styles.h2Style}>Notifications</h2><hr className="pb-1"></hr>
							<div className="flex flex-col gap-2">
								<div className="h-[33vh] overflow-y-auto overflow-x-hidden scrollbar-custom">
									<div className="p-1">
										<div className="flex flex-col items-left justify-left bg-[var(--secondary)] p-3 rounded-lg overflow-hidden">
											<span className="text-md font-bold text-gray-800">Preview</span>
											<span className="text-xs text-gray-500 pl-5">Notifications</span>
										</div>
									</div>

									<div className="p-1">
										<div className="flex flex-col items-left justify-left bg-[var(--secondary)] p-3 rounded-lg overflow-hidden">
											<span className="text-md font-bold text-gray-800">Preview</span>
											<span className="text-xs text-gray-500 pl-5">Notifications</span>
										</div>
									</div>

									<div className="p-1">
										<div className="flex flex-col items-left justify-left bg-[var(--secondary)] p-3 rounded-lg overflow-hidden">
											<span className="text-md font-bold text-gray-800">Preview</span>
											<span className="text-xs text-gray-500 pl-5">Notifications</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Patients Today */}
					<div className="bg-[var(--background)] border-3 border-[var(--secondary)] rounded-2xl p-2.5 shadow-sm w-full">
						<div className="overflow-y-auto scrollbar-custom">
							<h2 className={Styles.h2Style}>Patients Today</h2><hr className="pb-1"></hr>
							<div className="h-[33vh] overflow-y-auto scrollbar-custom">
								<div className="flex flex-row p-1 justify-center items-center text-center">
									<div className="w-1/10">
										<h2 className="flex justify-center items-center p-1">8 AM</h2>
									</div>
									<div className="flex items-center w-full bg-[var(--secondary)] rounded-lg p-2">
										<div className="bg-[var(--background)] rounded-full w-10 h-10"></div>
										<h2 className="p-2 font-bold">Penelope Eckart</h2>
									</div>
								</div>
								
								<div className="flex flex-row p-1 justify-center items-center text-center">
									<div className="w-1/10">
										<h2 className="flex justify-center items-center p-1">8 AM</h2>
									</div>
									<div className="flex items-center w-full bg-[var(--secondary)] rounded-lg p-2">
										<div className="bg-[var(--background)] rounded-full w-10 h-10"></div>
										<h2 className="p-2 font-bold">Penelope Eckart</h2>
									</div>
								</div>
								
								<div className="flex flex-row p-1 justify-center items-center text-center">
									<div className="w-1/10">
										<h2 className="flex justify-center items-center p-1">8 AM</h2>
									</div>
									<div className="flex items-center w-full bg-[var(--secondary)] rounded-lg p-2">
										<div className="bg-[var(--background)] rounded-full w-10 h-10"></div>
										<h2 className="p-2 font-bold">Penelope Eckart</h2>
									</div>
								</div>
								
								<div className="flex flex-row p-1 justify-center items-center text-center">
									<div className="w-1/10">
										<h2 className="flex justify-center items-center p-1">8 AM</h2>
									</div>
									<div className="flex items-center w-full bg-[var(--secondary)] rounded-lg p-2">
										<div className="bg-[var(--background)] rounded-full w-10 h-10"></div>
										<h2 className="p-2 font-bold">Penelope Eckart</h2>
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
	);
};
export default Dashboard;