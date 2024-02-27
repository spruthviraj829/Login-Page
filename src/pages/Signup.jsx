// import Template from "./components/Auth/Template";
import signupImg from "../assets/signup.png"
import Templet from "../components/Templet";

function Signup({ setIsLoggedIn }) {
  return (
    <Templet
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Signup;
