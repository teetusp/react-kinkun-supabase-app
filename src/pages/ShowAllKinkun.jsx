import React from "react";
import food from "./../assets/food.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "./../lib/supabaseClient";

export default function ShowAllKinkun() {
  const [kinkuns, setKinkuns] = useState([]);

  useEffect(() => {
    try {
      const fetchKinkuns = async () => {
        const { data, error } = await supabase
          .from("kinkun_tb")
          .select("*")
          .order("created_at ", { ascending: false });

        if (error) {
          alert("เกิดข้อผิดพลาดในการดึงข้อมูล กรุณาลองใหม่");
          console.log("Fetch Error", error);
        } else {
          setKinkuns(data);
        }
      };
      fetchKinkuns();
    } catch (ex) {
      alert("เกิดข้อผิดพลาดในการดึงข้อมูล กรุณาลองใหม่");
      console.log("Fetch Error", ex);
    }
  }, []);

  return (
    <div>
      <div className="10/12 mx-auto border-gray-300 p-6 shadow-md my-10 rounded-lg">
        <h1 className="text-2xl font-bold text-center text-bold text-blue-700">
          Kinkun APP (Supabase)
        </h1>

        <h1 className="text-2xl font-bold text-center text-blue-700">
          ข้อมูลบันทึกการกิน
        </h1>
        <img src={food} alt="อาหาร" className="block mx-auto w-30 mt-5" />

        <div className="mt-8 flex justify-end mb-4">
          <Link
            to="/addkinkun"
            className="bg-blue-700 p-3 rounded hover:bg-blue-800 text-white"
          >
            เพิ่มการกิน
          </Link>
        </div>

        <table className="w-full border border-gray-700 text-sm">
          <thead>
            <tr className="bg-gray-400">
              <th className="border border-gray-700 p-2">รูป</th>
              <th className="border border-gray-700 p-2">กินอะไร</th>
              <th className="border border-gray-700 p-2">กินที่ไหน</th>
              <th className="border border-gray-700 p-2">กินไปเท่าไร</th>
              <th className="border border-gray-700 p-2">วันที่เท่าไร</th>
              <th className="border border-gray-700 p-2">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {kinkuns.map((kinkun) => (
              <tr key={kinkun.id}>
                <td className="border border-gray-700 p-2 text-center">
                  {
                    kinkun.food_image_url == '' || kinkun.food_image_url == null 
                    ? '-' 
                    : <img src={kinkun.food_image_url} alt="รูปอาหาร" className="w-20 mx-auto" />
                  }
                </td>
                <td className="border border-gray-700 p-2">{kinkun.food_name}</td>
                <td className="border border-gray-700 p-2">{kinkun.food_where}</td>
                <td className="border border-gray-700 p-2">{kinkun.food_pay}</td>
                <td className="border border-gray-700 p-2">{new Date(kinkun.created_at).toLocaleDateString('th-TH')}</td>
                <td className="border border-gray-700 p-2">แก้ไข | ลบ</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}
