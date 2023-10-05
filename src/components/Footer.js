import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex justify-center">
        <div className="m-8">
          <h1 className="font-bold">Copy right</h1>
          <p className="text-gray-500 my-4 mr-4">
            @ 2023 created by Krishna 🥘SNAP MEAL{" "}
          </p>
        </div>
        <div className="m-8">
          <h1 className="font-bold">Company</h1>
          <p className="text-gray-500 my-4 mr-4">About</p>
          <p className="text-gray-500 my-4 mr-4">Careers</p>
          <p className="text-gray-500 my-4 mr-4">Team</p>
        </div>
        <div className="m-8">
          <div className="mb-6">
            <h1 className="font-bold">contact us</h1>
            <p className="text-gray-500 my-4 mr-4">Help & Support</p>
            <p className="text-gray-500 my-4 mr-4">Partner with us</p>
            <p className="text-gray-500 my-4 mr-4">Ride with Us</p>
          </div>
          <div>
            <h1 className="font-bold">Legal</h1>
            <p className="text-gray-500 my-4 mr-4">Help & Support</p>
            <p className="text-gray-500 my-4 mr-4">Partner with us</p>
            <p className="text-gray-500 my-4 mr-4">Ride with Us</p>
          </div>
        </div>
        <div className="m-8">
          <h1 className="font-bold">We deliver to</h1>
          <p className="text-gray-500 my-4 mr-4">Bengalore</p>
          <p className="text-gray-500 my-4 mr-4">Gurgan</p>
          <p className="text-gray-500 my-4 mr-4">Hyderabad</p>
          <p className="text-gray-500 my-4 mr-4">Delhi</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
