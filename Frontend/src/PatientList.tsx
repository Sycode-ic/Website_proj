import NavBar from "./NavBar";
import Header from './Header';

const PatientList = () => {
return (
	<div className="min-h-screen w-full flex bg-[var(--background)]">
        
        <title>Patient List</title>
        
        <NavBar />
        
        <div className="flex flex-col w-full">
            <Header />
            <h2 className="pl-5 text-2xl font-semibold">Patient List</h2>
            
            {/* Filter */}
            <div className="flex justify-between items-center w-full pl-7 pr-7">
                <div className="w-2/4 shrink-0">
                    <div className="grid sm:grid-cols-[2fr_1fr_2fr_1fr_2fr] items-center">
                        <h2 className="text-gray-900 text-lg font-bold">FILTER</h2>
                        <h2 className="p-1 text-gray-700 text-sm">Name:</h2>
                        <input className="p-1 focus:outline-none text-sm text-gray-700 bg-gray-300 rounded-lg" />
                        <h2 className="pl-3 p-1 text-gray-700 text-sm">Status:</h2>
                        <input className="p-1 focus:outline-none text-sm text-gray-700 bg-gray-300 rounded-lg" />
                    </div>
                </div>
                
                    <button className="bg-[var(--primary)] text-white text-sm rounded-lg px-3 py-1 ml-auto">Add New</button>
            </div>

            {/* Table */}
            <main className="flex px-4 pb-5 pt-2 gap-3 overflow-x-auto">
                <div className="flex flex-col gap-3 w-full">
                    <div className="h-[75vh] bg-gray-200 border-3 border-[var(--secondary)] rounded-2xl p-2.5 shadow-sm overflow-y-auto scrollbar-custom">
                        <table className="w-full">
                            <tr className="sticky top-0 bg-gray-200">
                                    <th>Name</th>
                                    <th>Gender</th>                                        
                                    <th>Age</th>                                        
                                    <th>Diagnosis</th>                                        
                                    <th>Phone Number</th>                                        
                                    <th>Status</th>                                        
                                </tr>
                                
                                <tr>
                                    <td>Om Shanti Limpin</td>
                                    <td>Female</td>
                                    <td>18</td>
                                    <td>Cancer</td>
                                    <td>09123355890</td>
                                    <td>Urgent</td>
                                </tr>

                                <tr>
                                    <td>Om Shanti Limpin</td>
                                    <td>Female</td>
                                    <td>18</td>
                                    <td>Cancer</td>
                                    <td>09123355890</td>
                                    <td>Urgent</td>
                                </tr>

                                <tr>
                                    <td>Om Shanti Limpin</td>
                                    <td>Female</td>
                                    <td>18</td>
                                    <td>Cancer</td>
                                    <td>09123355890</td>
                                    <td>Urgent</td>
                                </tr>

                                <tr>
                                    <td>Om Shanti Limpin</td>
                                    <td>Female</td>
                                    <td>18</td>
                                    <td>Cancer</td>
                                    <td>09123355890</td>
                                    <td>Urgent</td>
                                </tr>

                                <tr>
                                    <td>Om Shanti Limpin</td>
                                    <td>Female</td>
                                    <td>18</td>
                                    <td>Cancer</td>
                                    <td>09123355890</td>
                                    <td>Urgent</td>
                                </tr>

                                <tr>
                                    <td>Om Shanti Limpin</td>
                                    <td>Female</td>
                                    <td>18</td>
                                    <td>Cancer</td>
                                    <td>09123355890</td>
                                    <td>Urgent</td>
                                </tr>

                                <tr>
                                    <td>Om Shanti Limpin</td>
                                    <td>Female</td>
                                    <td>18</td>
                                    <td>Cancer</td>
                                    <td>09123355890</td>
                                    <td>Urgent</td>
                                </tr>

                                <tr>
                                    <td>Om Shanti Limpin</td>
                                    <td>Female</td>
                                    <td>18</td>
                                    <td>Cancer</td>
                                    <td>09123355890</td>
                                    <td>Urgent</td>
                                </tr>

                                <tr>
                                    <td>Om Shanti Limpin</td>
                                    <td>Female</td>
                                    <td>18</td>
                                    <td>Cancer</td>
                                    <td>09123355890</td>
                                    <td>Urgent</td>
                                </tr>

                                <tr>
                                    <td>Om Shanti Limpin</td>
                                    <td>Female</td>
                                    <td>18</td>
                                    <td>Cancer</td>
                                    <td>09123355890</td>
                                    <td>Urgent</td>
                                </tr>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    </div>

	);
};
export default PatientList;