import Greeting from "../components/Greetings";
import Experience from "../components/Experience";
import WorkExperince from "../components/WorkExperience";
import AboutMe from "../components/AboutMe";

export default function Home() {
  
  return (
    <div>
        <Greeting />
        <AboutMe/>
        <Experience />
        <WorkExperince/>
    </div>
  )
}
