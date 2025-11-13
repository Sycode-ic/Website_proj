import { useNavigate } from "react-router-dom";
import Button from "./Button";

// still not final ToT im sorry


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
        
        <nav className="flex flex-col items-center justify-center gap-4 w-full text-center text-black font-medium">
        <button onClick ={() => navigate("..")} className="py-2 text-white hover:bg-gray-300 hover:text-black p-10 rounded">Doctor</button>
        <button className="py-2 bg-[var(--background)] shadow rounded p-10">Patient</button>
        </nav>
    </aside>

    {/* Center Div */}
    <main className="flex-1 flex flex-col justify-center items-center bg-[var(--background)]">
        <h1 className="text-4xl font-bold">Lorem Ipsum</h1>
        <h2 className="text-sm text-gray-600 mt-1">Welcome to Lorem Ipsum</h2>

        <div className="flex flex-col justify-center items-center">
            <div className="mt-6 flex flex-row gap-3 items-center">
            <input
                type="text"
                placeholder="ID"
                className="border bg-gray-100 text-black p-2 rounded-xl w-full"
            />

            <div className=" flex flex-row gap-3 items-center">
            <input
                type="password"
                placeholder="Password"
                className="border bg-gray-100 text-black p-2 rounded-xl w-full"
            />
            <input
                type="password"
                placeholder="Password"
                className="border bg-gray-100 text-black p-2 rounded-xl w-full"
            />
            </div>
            </div>

            <div className="mt-3 w-120 flex flex-row gap-3 items-center">
            <input
                type="text"
                placeholder="ID"
                className="border bg-gray-100 text-black p-2 rounded-xl w-full"
            />
            <input
                type="password"
                placeholder="Password"
                className="border bg-gray-100 text-black p-2 rounded-xl w-full"
            />
            </div>

            <div className="mt-4 w-full flex justify-center">
                <Button text = "Log in" navigationLink = "/dashboard"/>
            </div>
        </div>
        
        

    </main>

    </div>


    );
};
export default Register;