import Header from "./NavBar";
import Button from "./Button";

const Projects = () =>{
    return(
        <div>
            <Header/>
            <main className="m-10">
                <h1 className="text-5xl font-serif">Projects:</h1>
                <Button text="Go to home" navigationLink=".."/>
            </main>
        </div>
    )
};
export default Projects 