import Button from "./Button";


const Login = () => {
return (
	<div className="min-h-screen flex bg-white">
	<title> Log in </title>
	{/* Sidebar */}
	<aside className="w-56 bg-[var(--primary)] flex flex-col items-center py-10">
		<div className="w-20 h-20 bg-gray-300 rounded-full mb-10"></div>

		<nav className="flex flex-col items-center gap-4 w-full text-center text-black font-medium">
		<button className="py-2 bg-[var(--background)] shadow rounded p-10">Doctor</button>
		<button className="py-2 text-white hover:bg-gray-300 hover:text-black p-10 rounded">Patient</button>
		</nav>
	</aside>

	{/* Center Div */}
	<main className="flex-1 flex flex-col justify-center items-center">
		<h1 className="text-4xl font-bold">Lorem Ipsum</h1>
		<h2 className="text-sm text-gray-600 mt-1">Welcome to Lorem Ipsum</h2>

		<div className="mt-6 w-80 flex flex-col gap-3 items-center">
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

		<Button text = "Log in" navigationLink = "/dashboard"/>
		</div>

		
	</main>

	</div>


	);
};
export default Login;