import { useState } from "react";
import logo from "../assets/images/logo.svg"//gradient-to-r import bg from "../assets/images/bg-pattern-desktop.svg";
import err from "../assets/images/icon-error.svg";
import arrow from "../assets/images/icon-arrow.svg";
import desktop from "../assets/images/hero-desktop.jpg";
import mobile from "../assets/images/hero-mobile.jpg";
import PropTypes from "prop-types";

export default function Apparel({ email, onChangeEmail, onSubmitEmail }) {
  const [error, setError] = useState(null);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();

    if (!email || !validateEmail(email)) {
      setError(`Please input a valid email`);
      return;
    }

      setError(null);
      onSubmitEmail();
    }
  
  return (
    <div className=" md:h-screen h-full w-full font-body">
      <div className="flex md:flex-row flex-col-reverse rounded-sm h-full">
        
        <div className="md:py-16 py-20 md:px-24 px-7 md:w-1/2 bg-gradient-to-r text-center md:text-start from-left-image to-left-image bg-cover bg-right">
          <div className="hidden md:block mb-9">
            <img className="w-24 " src={logo} alt="" />
          </div>

          <div>
            <h2 className="text-primary-desaturatedred md:text-8xl text-5xl tracking-widest md:tracking-wide md:text-start text-center md:font-light font-extralight uppercase mb-4">
              We&apos;re{" "}
              <span className="text-neutral-dgrayishred md:font-bold font-semibold">
                coming soon
              </span>
            </h2>
            <p className="text-primary-desaturatedred md:text-lg text-base md:font-light font-normal leading-6 mb-4">
              Hello fellow shoppers! We&apos;re currently building our new
              fashion store. Add your email below to stay up-to-date with
              announcements and our launch deals.
            </p>

            <form action="" onSubmit={handleSubmitEmail} method="get" >
              <div className={`flex items-center inpdet relative my-8 ${error ? "border-primary-softred" : "border-primary-desaturatedred"}`}>
                <div className="w-full flex ">
                  <input
                    className={`bg-transparent h-full outline-none w-full placeholder:text-primary-desaturatedred `}
                    type="text"
                    value={email}
                    onChange={onChangeEmail}
                    placeholder="Email Address"
                  />
                  {error && (<div><img className="md:mr-36 mr-24" src={err} alt="" /></div>)}
                </div>
                <button type="submit" className="btn absolute md:left-96 left-64 right-0">
                  <img className="w-4" src={arrow} alt="" />
                </button>
              </div>
                  {error && (<p className="text-primary-softred text-xs font-light -mt-8 ml-4 flex justify-start">{error}</p>)}
            </form>
          </div>
          
        </div>

        <div className="md:w-1/2">
          <div className="block md:hidden p-10">
            <img className="w-24 " src={logo} alt="" />
          </div>
          <div className="h-full hidden md:block">
            <img className="w-full h-full" src={desktop} alt="" />
          </div>
          <div className="h-full block md:hidden">
            <img className="w-full h-full" src={mobile} alt="" />
          </div>
        </div>

        
      </div>
    </div>
  );
}

Apparel.propTypes = {
  email: PropTypes.string.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onSubmitEmail: PropTypes.func.isRequired,
};
