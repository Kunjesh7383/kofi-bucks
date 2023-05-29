import React, { useState } from "react";
import { useRecoilState } from "recoil";
import Item from "../../Atoms/Item";
import { useNavigate } from "react-router-dom";
const Order = () => {
  const [info, setInfo] = useRecoilState(Item);
  const navigate = useNavigate();
  const [element, setElement] = useState([
    {
      id: "1",
      name: "Hot coffee",
      price: "40",
      desc: "Hot coffee is a popular beverage made by brewing roasted coffee beans with hot water. It's typically served hot and enjoyed for its rich, bold flavor and stimulating effects on the body.",
      img: "https://storage.googleapis.com/pai-images/973035c2acbd4edbb4575c881152848f.jpeg",
    },
    {
      id: "2",
      name: "Cold coffee",
      price: "50",
      desc: "Cold coffee, also known as iced coffee, is a refreshing beverage made by brewing coffee with hot water and then serving it over ice. It's perfect for hot weather and a popular choice for coffee lovers.",
      img: "https://cdn.midjourney.com/92a3a774-e7ec-4815-87f6-c23f5a019d90/0_0.png",
    },
    {
      id: "3",
      name: "Tea",
      price: "20",
      desc :"Tea is a popular beverage made by steeping dried leaves or herbs in hot water. It's enjoyed for its soothing and calming effects, as well as its variety of flavors and health benefits.",
      img: "https://storage.googleapis.com/pai-images/bebf6ca389614b83bdbdeb0750e6ae36.jpeg",
    },
    {
      id: "4",
      name: "Green tea",
      price: "25",
      desc : "Green tea is a type of tea made from unoxidized leaves and is popular for its health benefits. It's rich in antioxidants and has a light, refreshing taste with a slight bitterness.",
      img: "https://cdn.discordapp.com/attachments/933565701162168371/1078655101603958784/Mehmed_tea_cf241c44-e75e-4b36-aacc-e4abee823f31.png",
    },
    
  ]);
  var handleCardClick = (hello) => {
    setInfo(hello);
    if (info) {
      navigate("/order/item-order");
    }
  };
  return (
    <>
      <div className="flex ">
        {element.map((element) => {
          return (
            <div class="w-full bg-white shadow rounded mx-5">
              <div class="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center">
                <img
                  src={element.img || ""}
                  style={{ width: "100%", height: "280px " }}
                  alt=""
                />
              </div>
              <div class="p-4 flex flex-col items-center">
                <br />
                <br />
                <br />
                <br />
                <h1 class="text-gray-800 text-center mt-1">
                  {element.name || ""}
                </h1>
                <p class="text-center text-gray-800 mt-1">
                  {element.price || ""}
                </p>

                {/* <Link to='item-order'> */}

                <button
                  onClick={() => handleCardClick(element || "")}
                  class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
                >
                  Add to order
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </button>
                {/* </Link> */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Order;
