import NavBar from "./NavBar";
import Header from "./Header"
import Styles from "./Styles";
import Button from "./Button";
import Notes from "./Notes";

const PatientProfile = () => {
    return (
    <div className="min-h-screen w-screen flex bg-[var(--background)]">
	    	
            <head>
                <title>Patient Profile</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </head>
            
            <NavBar/>

            <div className="flex flex-col w-screen">
                
                
                <div className="">
                    <Header/>
                    <h2 className="pl-5 text-2xl font-semibold">
                    Patient Profile
                    </h2>
                </div>

                
                <main className="flex flex-col pl-3 gap-4 pr-5 pb-5">
                    <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr_2fr] gap-3">
                        {/* Profile */}
                        <div className="flex flex-col justify-center items-center bg-[var(--background)] border-3 border-[var(--secondary)] rounded-2xl p-2.5 shadow-sm">
                            {/* picture here */}
                            <img src="Placeholder.jpg" className="w-30 h-30 bg-gray-700 rounded-xl border-3 border-[var(--primary)] object-cover">
                            </img>

                            <h2 className="pt-2 text-xl font-semibold"> Name </h2>
                            <p className="text-sm">Age</p>
                            <Button text="Update" navigationLink=""></Button>
                        </div>

                        {/* General Info */}
                        <div className={Styles.divStyle}>
                            <h2 className={Styles.h2Style}>General Information</h2> <hr></hr>
                                <div className="p-2 h-[30vh] overflow-y-auto scrollbar-custom">
                                    <table className="w-full h-full">
                                        <tr>
                                            <th>Name</th>
                                            <td>Om Shanti Limpin</td>
                                        
                                        </tr>
                                        
                                        <tr>
                                            <th>Address</th>
                                            <td>25</td>
                                        </tr>

                                        <tr>
                                            <th>Contact Number</th>
                                            <td>25</td>
                                        </tr>

                                        <tr>
                                            <th>Date of Birth</th>
                                            <td>25</td>
                                        </tr>
                                        
                                        <tr>
                                            <th>Sex</th>
                                            <td>25</td>
                                        </tr>

                                        <tr>
                                            <th>Blood Type</th>
                                            <td>25</td>
                                        </tr>

                                        <tr>
                                            <th>Allergies</th>
                                            <td>25</td>
                                        </tr>

                                        
                                        <tr>
                                            <th>Emergency Contact</th>
                                            <td>25</td>
                                        </tr>
                                    </table>
                                </div>
                        </div>

                        {/* Anamnesis */}
                        <div className={Styles.divStyle}>
                            <h2 className={Styles.h2Style}>Anamnesis</h2> <hr></hr>
                            <div className="p-2 h-[30vh] overflow-y-auto scrollbar-custom">
                                    <table className="w-full h-full">
                                        <tr>
                                            <th>Chief Complaint</th>
                                            <td>Persistent cough for 2 weeks.</td>
                                        
                                        </tr>
                                        
                                        <tr>
                                            <th>History of Present Illness</th>
                                            <td>Onset: 2 weeks ago; Severity: moderate</td>
                                        </tr>

                                        <tr>
                                            <th>Past Medical History</th>
                                            <td>History of asthma; Appendectomy at age 20;</td>
                                        </tr>

                                        <tr>
                                            <th>Family History</th>
                                            <td>Mother has UTI</td>
                                        </tr>
                                    
                                    </table>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row gap-3">
                        {/* Notes */}
                        <div className="bg-[var(--background)] border-3 border-[var(--secondary)] rounded-2xl p-2.5 shadow-sm w-1/4">
                            <h2 className={Styles.h2Style}>Notes</h2> <hr></hr>
                            <Notes/>
                        </div>

                        {/* Prescription */}
                        <div className={Styles.divStyle}>
                            <h2 className={Styles.h2Style}>Prescription</h2> <hr></hr>
                            <div className="p-2 h-40 overflow-y-auto scrollbar-custom">
                                <button className="border-gray-700 border-1 bg-[var(--background)] p-1 m-1 rounded-lg w-full text-gray-600" >Add Prescription</button>
                                    <table className="w-full">
                                        <tr>
                                            <th>Prescription</th>
                                            <th>Date</th>                                        
                                        </tr>
                                        
                                        <tr>
                                            <td>Antibiotic</td>
                                            <td>November 13, 2025</td>
                                        </tr>
                                    
                                    </table>
                        </div>
                        </div>
                        
                    </div>
                </main>
                

            </div>

    </div>
    );
}

export default PatientProfile;