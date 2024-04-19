import React from "react";

const Table = () => {
  const divStyle = {
    color: "blue",
    vishal: "red",
  };

  return (
    <div class="p-3">
      <table class="table-auto border-collapse  h-6 w-full  ">
        <tr class=" h-14 ml-20 ">
          <th class="  ">
            Name
            <span class="mx-2">
              <i class="fa-solid fa-sort"></i>
            </span>
          </th>
          <th class="  ">
            Sale Price
            <span class="mx-2">
              <i class="fa-solid fa-sort"></i>
            </span>
          </th>
          <th class="  ">
            Building Size
            <span class="mx-2">
              <i class="fa-solid fa-sort"></i>
            </span>
          </th>
          <th class=" ">
            Land Size
            <span class="mx-2">
              <i class="fa-solid fa-sort"></i>
            </span>
          </th>
          <th th class="  ">
            $/SF
            <span class="mx-2">
              <i class="fa-solid fa-sort"></i>
            </span>
          </th>
          <th class="  ">
            Type
            <span class="mx-2">
              <i class="fa-solid fa-sort"></i>
            </span>
          </th>
          <th class=" ">
            Date Sold
            <span class="mx-2">
              <i class="fa-solid fa-sort"></i>
            </span>
          </th>
          <th class=" ml-8 ">Actions</th>
        </tr>
        <tr class="h-14 m-6">
          <td class=" text-cyan-500">112 Ocean Avenue</td>
          <td class=" text-vishal-400">$40,000.00</td>
          <td class=" text-vishal-400">3000SF</td>
          <td class=" text-vishal-400">2000SF</td>
          <td class=" text-vishal-400">$13.33</td>
          <td class=" text-vishal-400">Multi-Family</td>
          <td class=" text-vishal-400">3/2/2023</td>
          <td class="flex justify-around mt-2 w-28">
            <i class="fa-solid fa-eye text-blue-500"></i>
            <i class="fa-solid fa-chart-simple text-green-500"></i>
            <i class="fa-solid fa-trash text-red-400"></i>
          </td>
        </tr>

        <tr class="h-14 ">
          <td class="text-cyan-500">112 Ocean Avenue</td>
          <td class=" text-vishal-400">$40,000.00</td>
          <td class=" text-vishal-400">3000SF</td>
          <td class=" text-vishal-400">2000SF</td>
          <td class=" text-vishal-400">$13.33</td>
          <td class=" text-vishal-400">Multi-Family</td>
          <td class=" text-vishal-400">3/2/2023</td>
          <td class="flex justify-around mt-2  w-28">
            <i class="fa-solid fa-eye text-blue-500"></i>
            <i class="fa-solid fa-chart-simple text-green-500"></i>
            <i class="fa-solid fa-trash text-red-400"></i>
          </td>
        </tr>

        <tr class="h-14 ">
          <td class="text-cyan-500">1127 Wilshire Boulevard</td>
          <td class=" text-vishal-400">$73,000.00</td>
          <td class=" text-vishal-400">1000SF</td>
          <td class=" text-vishal-400">7000SF</td>
          <td class=" text-vishal-400">$13.33</td>
          <td class=" text-vishal-400">Office</td>
          <td class=" text-vishal-400">7/2/2023</td>
          <td class="flex justify-around mt-2  w-28">
            <i class="fa-solid fa-eye text-blue-500"></i>
            <i class="fa-solid fa-chart-simple text-green-500"></i>
            <i class="fa-solid fa-trash text-red-400"></i>
          </td>
        </tr>
        <tr class="h-14 ">
          <td class="text-cyan-500">112 Ocean Avenue</td>
          <td class=" text-vishal-400">$40,000.00</td>
          <td class=" text-vishal-400">3000SF</td>
          <td class=" text-vishal-400">2000SF</td>
          <td class=" text-vishal-400">$13.33</td>
          <td class=" text-vishal-400">Multi-Family</td>
          <td class=" text-vishal-400">3/2/2023</td>
          <td class="flex justify-around mt-2  w-28">
            <i class="fa-solid fa-eye text-blue-500"></i>
            <i class="fa-solid fa-chart-simple text-green-500"></i>
            <i class="fa-solid fa-trash text-red-400"></i>
          </td>
        </tr>

        <tr class="h-14 ">
          <td class="text-cyan-500">1127 Wilshire Boulevard</td>
          <td class=" text-vishal-400">$73,000.00</td>
          <td class=" text-vishal-400">1000SF</td>
          <td class=" text-vishal-400">7000SF</td>
          <td class=" text-vishal-400">$13.33</td>
          <td class=" text-vishal-400">Office</td>
          <td class=" text-vishal-400">7/2/2023</td>
          <td class="flex justify-around mt-2  w-28">
            <i class="fa-solid fa-eye text-blue-500"></i>
            <i class="fa-solid fa-chart-simple text-green-500"></i>
            <i class="fa-solid fa-trash text-red-400"></i>
          </td>
        </tr>
        <tr class="h-14 ">
          <td class="text-cyan-500">112 Ocean Avenue</td>
          <td class=" text-vishal-400">$40,000.00</td>
          <td class=" text-vishal-400">3000SF</td>
          <td class=" text-vishal-400">2000SF</td>
          <td class=" text-vishal-400">$13.33</td>
          <td class=" text-vishal-400">Multi-Family</td>
          <td class=" text-vishal-400">3/2/2023</td>
          <td class="flex justify-around mt-2  w-28">
            <i class="fa-solid fa-eye text-blue-500"></i>
            <i class="fa-solid fa-chart-simple text-green-500"></i>
            <i class="fa-solid fa-trash text-red-400"></i>
          </td>
        </tr>

        <tr class="h-14 ">
          <td class="text-cyan-500">1127 Wilshire Boulevard</td>
          <td class=" text-vishal-400">$73,000.00</td>
          <td class=" text-vishal-400">1000SF</td>
          <td class=" text-vishal-400">7000SF</td>
          <td class=" text-vishal-400">$13.33</td>
          <td class=" text-vishal-400">Office</td>
          <td class=" text-vishal-400">7/2/2023</td>
          <td class="flex justify-around mt-2  w-28">
            <i class="fa-solid fa-eye text-blue-500"></i>
            <i class="fa-solid fa-chart-simple text-green-500"></i>
            <i class="fa-solid fa-trash text-red-400" ></i>
          </td>
        </tr>
        <tr class="h-14 ">
          <td class="text-cyan-500">112 Ocean Avenue</td>
          <td class=" text-vishal-400">$40,000.00</td>
          <td class=" text-vishal-400">3000SF</td>
          <td class=" text-vishal-400">2000SF</td>
          <td class=" text-vishal-400">$13.33</td>
          <td class=" text-vishal-400">Multi-Family</td>
          <td class=" text-vishal-400">3/2/2023</td>
          <td class="flex justify-around mt-2  w-28">
            <i class="fa-solid fa-eye text-blue-500"></i>
            <i class="fa-solid fa-chart-simple text-green-500"></i>
            <i class="fa-solid fa-trash text-red-400"></i>
          </td>
        </tr>

        <tr class="h-14 ">
          <td class="text-cyan-500">1127 Wilshire Boulevard</td>
          <td class=" text-vishal-400">$73,000.00</td>
          <td class=" text-vishal-400">1000SF</td>
          <td class=" text-vishal-400">7000SF</td>
          <td class=" text-vishal-400">$13.33</td>
          <td class=" text-vishal-400">Office</td>
          <td class=" text-vishal-400">7/2/2023</td>
          <td class="flex justify-around mt-2  w-28">
            <i class="fa-solid fa-eye text-blue-500"></i>
            <i class="fa-solid fa-chart-simple text-green-500"></i>
            <i class="fa-solid fa-trash text-red-400"></i>
          </td>
        </tr>
        <tr class="h-14 ">
          <td class="text-cyan-500">112 Ocean Avenue</td>
          <td class=" text-vishal-400">$40,000.00</td>
          <td class=" text-vishal-400">3000SF</td>
          <td class=" text-vishal-400">2000SF</td>
          <td class=" text-vishal-400">$13.33</td>
          <td class=" text-vishal-400">Multi-Family</td>
          <td class=" text-vishal-400">3/2/2023</td>
          <td class="flex justify-around mt-2  w-28">
            <i class="fa-solid fa-eye text-blue-500"></i>
            <i class="fa-solid fa-chart-simple text-green-500"></i>
            <i class="fa-solid fa-trash text-red-400"></i>
          </td>
        </tr>

        <tr class="h-14 ">
          <td class="text-cyan-500">1127 Wilshire Boulevard</td>
          <td class=" text-vishal-400">$73,000.00</td>
          <td class=" text-vishal-400">1000SF</td>
          <td class=" text-vishal-400">7000SF</td>
          <td class=" text-vishal-400">$13.33</td>
          <td class=" text-vishal-400">Office</td>
          <td class=" text-vishal-400">7/2/2023</td>
          <td class="flex justify-around mt-2  w-28">
            <i class="fa-solid fa-eye text-blue-500"></i>
            <i class="fa-solid fa-chart-simple text-green-500"></i>
            <i class="fa-solid fa-trash text-red-400"></i>
          </td>
        </tr>
        <tr class="h-14 ">
          <td class="text-cyan-500">112 Ocean Avenue</td>
          <td class=" text-vishal-400">$40,000.00</td>
          <td class=" text-vishal-400">3000SF</td>
          <td class=" text-vishal-400">2000SF</td>
          <td class=" text-vishal-400">$13.33</td>
          <td class=" text-vishal-400">Multi-Family</td>
          <td class=" text-vishal-400">3/2/2023</td>
          <td class="flex justify-around mt-2  w-28">
            <i class="fa-solid fa-eye text-blue-500"></i>
            <i class="fa-solid fa-chart-simple text-green-500"></i>
            <i class="fa-solid fa-trash text-red-400"></i>
          </td>
        </tr>

        <tr class="h-14 ">
          <td class="text-cyan-500 ">1127 Wilshire Boulevard</td>
          <td class=" text-vishal-400">$73,000.00</td>
          <td class=" text-vishal-400">1000SF</td>
          <td class=" text-vishal-400">7000SF</td>
          <td class=" text-vishal-400">$13.33</td>
          <td class=" text-vishal-400">Office</td>
          <td class=" text-vishal-400">7/2/2023</td>
          <td class="flex justify-around mt-2  w-28">
            <i class="fa-solid fa-eye text-blue-500"></i>
            <i class="fa-solid fa-chart-simple text-green-500"></i>
            <i class="fa-solid fa-trash text-red-400"></i>
          </td>
        </tr>
      </table>

          <div class="mt-4 flex justify-between w-1/4 ml-auto mr-auto">
            <p class="textEndStyle">Previous</p>
            <button class="bg-gray-500 w-8">1</button>
            <button class="btnStyleSec">2</button>
            <button class="btnStyleSec">3</button>
            <button class="">4</button>
            <p class="textEndStyle">Next</p>
          </div>
        
        <div class="col-md-4"></div>
      
    </div>
  );
};

export default Table;
