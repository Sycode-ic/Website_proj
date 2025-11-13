import { useNavigate } from "react-router-dom";


const Register = () => {
    const navigate = useNavigate();
return (
    <div className="min-h-screen flex">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Register </title>
    </head>
    {/* Sidebar */}
    
    <aside className="w-56 bg-[var(--primary)] flex flex-col items-center">
        <div className="w-20 h-20 bg-gray-300 rounded-full mb-10 relative top-5"></div>
        
        <nav className="flex flex-col items-center justify-center  my-35 gap-4 w-full text-center text-black font-medium">
        <button onClick ={() => navigate("..")} className="py-2 text-white hover:bg-gray-300 hover:text-black p-10 rounded">Doctor</button>
        <button className="py-2 bg-[var(--background)] shadow rounded p-10">Patient</button>
        </nav>
    </aside>

    {/* Center Div */}
    <main className="flex-1 flex flex-col justify-center items-center bg-[var(--background)]">
        <h1 className="text-4xl font-bold">Lorem ipsum</h1>
        <h2 className="text-sm text-gray-600 mt-1 mb-6">
          Welcome to Lorem Ipsum
        </h2>

        {/* Form Container */}
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-2 gap-3 w-[480px]">
            <input
              type="text"
              placeholder="Full Name"
              className="border bg-gray-100 text-black p-2 rounded-md"
            />
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Sex"
                className="border bg-gray-100 text-black p-2 rounded-md w-1/2"
              />
              <input
                type="text"
                placeholder="Blood Type"
                className="border bg-gray-100 text-black p-2 rounded-md w-1/2"
              />
            </div>

            <input
              type="text"
              placeholder="Address"
              className="border bg-gray-100 text-black p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Known Allergies"
              className="border bg-gray-100 text-black p-2 rounded-md"
            />

            <input
              type="text"
              placeholder="Contact Number"
              className="border bg-gray-100 text-black p-2 rounded-md"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="border bg-gray-100 text-black p-2 rounded-md"
            />

            <input
              type="date"
              placeholder="Date of Birth"
              className="border bg-gray-100 text-black p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Emergency Contact"
              className="border bg-gray-100 text-black p-2 rounded-md"
            />
          </div>

          {/* Button */}
          <div className="mt-6 w-[480px] flex justify-center">
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-[var(--primary)] text-white py-2 px-25 rounded-full hover:bg-[#4c5d81] transition">
              Register
            </button>
          </div>
        </div>
      </main>

    </div>


    );
};
export default Register;