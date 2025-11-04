import React from "react";
import food from "./../assets/food.png";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SweetAlert from "sweetalert2";

export default function Home() {
  const navigate = useNavigate();
  const [secureCode, setSecureCode] = useState("");

  const handleAccessAppClick = () => {
    if (secureCode === "") {
      SweetAlert.fire({
        icon: "warning",
        iconColor: "#E30707",
        title: "กรุณาป้อนรหัสเข้าใช้งาน",
        showConfirmButton: true,
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#3085D6",
      });
      return;
    }

    if (secureCode.toUpperCase() === "SAU") {
      navigate("/showallkinkun");
    } else {
      SweetAlert.fire({
        icon: "warning",
        iconColor: "#E30707",
        title: "รหัสเข้าใช้งานไม่ถูกต้อง",
        showConfirmButton: true,
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#3085D6",
      });
    }
  };

  return (
    <div>
      <div className="10/12 mx-auto border-gray-300 p-6 shadow-md my-10 rounded-lg">
        <h1 className="text-2xl font-bold text-center text-bold text-blue-700">
          Kinkun APP (Supabase)
        </h1>

        <h1 className="text-2xl font-bold text-center text-blue-700">
          บันทึกการกิน
        </h1>
        <img src={food} alt="อาหาร" className="block mx-auto w-30 mt-5" />

        <input
          type="text"
          placeholder="Enter secure code"
          value={secureCode}
          onChange={(e) => setSecureCode(e.target.value)}
          className="w-full p-3 border border-gray-400 rounded-md  mt-5"
        />
        <button
          onClick={handleAccessAppClick}
          className="w-full bg-blue-700 p-3 rounded-md text-white mt-5 cursor-pointer"
        >
          เข้าใช้งาน
        </button>

        <div className="mt-5 flex justify-center gap-5">
          <a href="#">
            <FaFacebook className="text-2xl text-gray-500 hover:text-red-700" />
          </a>
          <a href="#">
            <FaSquareXTwitter className="text-2xl text-gray-500 hover:text-red-700" />
          </a>
          <a href="#">
            <FaGithub className="text-2xl text-gray-500 hover:text-red-700" />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
