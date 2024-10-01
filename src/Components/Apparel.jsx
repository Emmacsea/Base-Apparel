import { useState } from "react";
import logo from "../assets/images/logo.svg"//gradient-to-r import bg from "../assets/images/bg-pattern-desktop.svg";
import err from "../assets/images/icon-error.svg";
import arrow from "../assets/images/icon-arrow.svg";
import img from "../assets/images/hero-desktop.jpg";
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
    <div className=" h-screen w-full font-body">
      <div className="flex flex-row rounded-sm  h-full">
        
        <div className="py-16 px-24 w-1/2 bg-gradient-to-r from-left-image to-left-image bg-cover bg-right">
          <div className="mb-9">
            <img className="w-24" src={logo} alt="" />
          </div>

          <div>
            <h2 className="text-primary-desaturatedred text-8xl font-light uppercase mb-4">
              We&apos;re{" "}
              <span className="text-neutral-dgrayishred font-bold">
                coming soon
              </span>
            </h2>
            <p className="text-primary-desaturatedred text-lg font-light leading-6 mb-4">
              Hello fellow shoppers! We&apos;re currently building our new
              fashion store. Add your email below to stay up-to-date with
              announcements and our launch deals.
            </p>

            <form action="" onSubmit={handleSubmitEmail} method="get">
              <div className={`flex items-center inpdet relative my-8 ${error ? "border-primary-softred" : "border-primary-desaturatedred"}`}>
                <div className="w-full flex ">
                  <input
                    className={`bg-transparent h-full outline-none w-full placeholder:text-primary-desaturatedred `}
                    type="text"
                    value={email}
                    onChange={onChangeEmail}
                    placeholder="Email Address"
                  />
                  {error && (<div><img className="mr-36" src={err} alt="" /></div>)}
                </div>
                <button type="submit" className="btn absolute left-96 right-0">
                  <img className="w-4" src={arrow} alt="" />
                </button>
              </div>
                  {error && (<p className="text-primary-softred text-xs font-light -mt-8 ml-4">{error}</p>)}
            </form>
          </div>
          
        </div>

        <div className="w-1/2">
          <div className="h-full">
            <img className="w-full h-full" src={img} alt="" />
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
