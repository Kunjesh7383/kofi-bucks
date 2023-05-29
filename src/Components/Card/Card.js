import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Item from "../../Atoms/Item";
import './Card.css'

const Card = () => {

  const Info = useRecoilValue(Item);
  const [num, changeNum] = useState(Info.price);
  const [numOfItem, setNumOfItem] = useState(0)
  const [price, setPrice] = useState(0)
  var orderNumber = 1 
  const addToTable = () => {  
    if (price == 0) {
      toast("Add some item")
    }
    else {

      const table = document.getElementById('table')
      var row = table.insertRow(1);

      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);

      // Add some text to the new cells:
      cell1.innerHTML = Info.name
      cell2.innerHTML = Info.price
      cell3.innerHTML = numOfItem
      cell4.innerHTML = price
      cell5.innerHTML = orderNumber
      orderNumber++

    }
  }

  const less = () => {
    setNumOfItem(numOfItem - 1)
    setPrice(parseInt(numOfItem, 10) * parseInt(Info.price, 10) - parseInt(Info.price))
  }
  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={Info ? Info.img : ""}
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest"></h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
              {Info ? Info.name : ""}
            </h1>
            <p class="leading-relaxed">
              {Info ? Info.desc : ""}
            </p>
            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              Price : {Info ? Info.price : ""}

            </div>
            <div class="inline-flex items-center mt-2">

              {(numOfItem <= 0) ? <button
                class="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 12H4"
                  />
                </svg>
              </button> : <button onClick={less}
                class="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 12H4"
                  />
                </svg>
              </button>}




              <div class="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                {numOfItem}
              </div>
              <button onClick={() => {
                setNumOfItem(numOfItem + 1)
                setPrice((parseInt(numOfItem, 10) * parseInt(Info.price, 10)) + parseInt(Info.price))
              }}

                class="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              <div className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 mx-4 px-4 border border-blue-500 hover:border-transparent rounded" >{price}</div>
              <button onClick={addToTable} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Order Now
              </button>
            </div>
            <br />
            <br />
            <table className="table" id="table">
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Bill</th>
                <th>Order no.</th>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        
        theme="dark"
      />    </section>
  );
};

export default Card;
