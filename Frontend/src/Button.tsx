import {useNavigate } from "react-router-dom";

interface ButtonProps{
    text:string;
    navigationLink:string;
}

const Button: React.FC<ButtonProps> = ({text, navigationLink}) => {
const navigate = useNavigate();
return (
	<button onClick={() => navigate(`${navigationLink}`)} 
      className="bg-[var(--primary)] text-white p-2 rounded-full mt-2 text-sm w-60 hover:bg-[#4c5d81] transition">

        {text}
	</button>
	);  
};
export default Button;


// button:hover{
//     background-color: white;
//     color: #E06B80;
//     padding: 10px;
//     border-color: #FFC69D;
//     box-shadow: #E06B80;
// }

// button{
//     background-color: #E06B80;
//     color:white;
//     padding: 10px;
//     border-color: #FFC69D;
// }