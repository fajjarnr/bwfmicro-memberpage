import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [footer, seFooter] = useState(() => "");

  // const submit = (e) => {
  //   window.open(
  //     `${process.env.NEXT_PUBLIC_MEMBER_URL}/register?email=${footer}`
  //   );
  // };

  return (
    <footer className="container mx-auto">
      <div className="flex justify-between">
        <div className="w-1/6">
          <h6 className="text-white">Company</h6>
          <ul className="mt-4">
            <li className="mt-2">
              <Link
                to="#"
                className="text-white hover:text-teal-500 hover:underline"
              >
                API Developer
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to="#"
                className="text-white hover:text-teal-500 hover:underline"
              >
                Career
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to="#"
                className="text-white hover:text-teal-500 hover:underline"
              >
                Our Story
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to="#"
                className="text-white hover:text-teal-500 hover:underline"
              >
                New Soon
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/6">
          <h6 className="text-white">Student</h6>
          <ul className="mt-4">
            <li className="mt-2">
              <Link
                to="#"
                className="text-white hover:text-teal-500 hover:underline"
              >
                Get Scholarship
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to="#"
                className="text-white hover:text-teal-500 hover:underline"
              >
                Our Pathskill
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to="#"
                className="text-white hover:text-teal-500 hover:underline"
              >
                All Features
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to="#"
                className="text-white hover:text-teal-500 hover:underline"
              >
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/6">
          <h6 className="text-white">Touch Us</h6>
          <p className="mt-4 text-white leading-">
            Micro Center <br />
            Alleysi block x No.12 <br />
            Jakarta Selatan, Indonesia <br />
            +21 2020 5555
          </p>
        </div>
        <div className="w-2/6">
          <h6 className="text-white">Promotions</h6>
          <p className="mt-4 text-white">Submit your email for new update</p>
          <form>
            <input
              type="text"
              className="bg-white focus:outline-none border-0 px-6 py-3 mt-6"
              placeholder="your email address"
              value={footer}
              onChange={(event) => seFooter(event.target.value)}
            />
            <button className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3">
              Daftar Now
            </button>
          </form>
        </div>
      </div>
      <div className="border-t pt-8 mt-8 text-gray-800 text-center">
        <p className="text-white">
          2021 Copyright Micro by BuildWith Fajar. All Right Reserved
        </p>
      </div>
    </footer>
  );
}