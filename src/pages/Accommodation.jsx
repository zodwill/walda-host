import React from "react";
import ResponsiveAppBar from "../components/NavBar"; // Keep this if it's custom
import house1 from "../assets/house01.jpg";
import house2 from "../assets/house02.jpg";
import house3 from "../assets/house03.jpg";
import house4 from "../assets/house04.jpg";
import house5 from "../assets/house05.jpg";
import house6 from "../assets/house06.jpg";
import house7 from "../assets/house07.jpg";
import house8 from "../assets/house08.jpg";
import house9 from "../assets/house09.jpg";
import hostel1 from "../assets/hostel01.jpg";
import hostel2 from "../assets/hostel02.jpg";
import hostel3 from "../assets/hostel03.jpg";
import hostel4 from "../assets/hostel04.jpg";
import hostel6 from "../assets/hostel06.jpg";
import hostel7 from "../assets/hostel07.jpg";
import dining1 from "../assets/dining01.jpg";
import dining2 from "../assets/dining02.jpg";
import dining3 from "../assets/dining03.jpg";
import dining4 from "../assets/dining04.jpg";

const visitorsHostelImages = [
  house1,
  house2,
  house3,
  house4,
  house5,
  house6,
  house7,
  house8,
  house9,
];
const hostelRoomsImages = [
  hostel1,
  hostel2,
  hostel3,
  hostel4,
  hostel6,
  hostel7,
];
const diningAreaImages = [dining1, dining2, dining3, dining4];

function MasonryGallery({ title, images }) {
  return (
    <div className="mb-16">
      <h2 className="text-yellow-300 text-2xl font-semibold mb-4 tracking-wide">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`${title} ${idx + 1}`}
            className="w-full rounded-xl shadow-lg transition-transform duration-150 hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
}

function Accommodation() {
  return (
    <>
      <ResponsiveAppBar />

      <div className="px-4 md:px-16 py-8 bg-gradient-to-br from-[#1a1d23] via-[#242B2E] to-[#564f7a] min-h-screen text-white font-sans">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-yellow-300 tracking-wider drop-shadow-lg">
          <b>Accommodation</b>
        </h1>
        <div className="mt-16 mb-8 bg-[#242B2Ec0] backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-10 max-w-xl text-white">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">
            <b>Visitor Hostel Accommodation</b>
          </h2>
          <p className="mb-2">
            In one room,{" "}
            <span className="font-semibold">
              <b>two persons</b>
            </span>{" "}
            will be accommodated.
          </p>
          <p className="mb-2">
            <b>Cost:</b> 6 days × 500 = 3,000
          </p>
          <p className="mb-2">
            <b>Food</b> (Breakfast, Lunch, Dinner): 400 × 6 = 2,400
          </p>
          <p className="text-xl font-bold mt-4">
            <b>Total: ₹5,400</b>{" "}
            <span className="font-normal text-sm">
              (amount directly added for offline students)
            </span>
          </p>
          <br />
          <p>
            <b>NOTE :</b> The visitor hostel has{" "}
            <span className="font-semibold text-red-300">
              limited capacity.
            </span>{" "}
            Accommodation will be allocated on a{" "}
            <span className="font-semibold text-yellow-200">
              first-come, first-served basis or based on designation priority
            </span>
            . For the remaining participants, suitable arrangements will be made
            in the boys’ and girls’ hostels.
          </p>
        </div>

        <MasonryGallery title="Visitors Hostel" images={visitorsHostelImages} />
        <MasonryGallery title="Hostel Rooms" images={hostelRoomsImages} />
        <MasonryGallery title="Dining Area" images={diningAreaImages} />
      </div>
    </>
  );
}

export default Accommodation;
