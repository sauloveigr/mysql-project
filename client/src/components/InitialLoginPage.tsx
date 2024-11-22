import { Link } from "react-router-dom";
import Char from "../assets/char.png";
import { WrapperSection } from "./atoms/WrapperSection";

const InitialLoginPage = () => {
  return (
    <WrapperSection>
      <article className="grid relative gap-8">
        <div className="w-[1080px] h-[320px] bg-white/70 absolute origin-center rotate-45 -left-80" />
        <div className="grid gap-20 w-full z-10">
          <img src={Char} />
          <div className="flex justify-center gap-4">
            <button className="bg-primary-blue text-white rounded-full px-5 py-2 outline-none font-semibold shadow-lg">
              Sign In
            </button>
            <Link to="/register">
              <button className="bg-white text-primary-blue rounded-full px-5 py-2 outline-none font-semibold shadow-lg">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
        <button className="text-primary-blue">Skip &#8594;</button>
      </article>
    </WrapperSection>
  );
};

export default InitialLoginPage;
