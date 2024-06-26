import React from 'react'

function Table() {
  return (
    <>
      

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-green-900 dark:text-green-900">
        <thead className="text-xs text-white uppercase bg-transparent border-b border-green-400 dark:text-white">
            <tr>
                <th scope="col" className="text-black font-extrabold px-6 py-3 bg-transparent">
                    Product name
                </th>
                <th scope="col" className="text-black font-extrabold px-6 py-3">
                    Color
                </th>
                <th scope="col" className="text-black font-extrabold px-6 py-3 bg-transparent">
                    Category
                </th>
                <th scope="col" className="text-black font-extrabold px-6 py-3">
                    Price
                </th>
                <th scope="col" className="text-black font-extrabold px-6 py-3 bg-transparent">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-transparent border-b border-green-400">
                <th scope="row" className="px-6 py-4 font-medium bg-transparent text-green-50 whitespace-nowrap dark:text-green-900">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4 bg-transparent">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4 bg-transparent">
                    <a href="#" className="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-transparent border-b border-green-400">
                <th scope="row" className="px-6 py-4 font-medium bg-transparent text-green-50 whitespace-nowrap dark:text-green-900">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4 bg-transparent">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
                <td className="px-6 py-4 bg-transparent">
                    <a href="#" className="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-transparent border-b border-green-400">
                <th scope="row" className="px-6 py-4 font-medium bg-transparent text-green-50 whitespace-nowrap dark:text-green-900">
                    Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4 bg-transparent">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
                <td className="px-6 py-4 bg-transparent">
                    <a href="#" className="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-transparent border-b border-green-400">
                <th scope="row" className="px-6 py-4 font-medium bg-transparent text-green-50 whitespace-nowrap dark:text-green-900">
                    Google Pixel Phone
                </th>
                <td className="px-6 py-4">
                    Gray
                </td>
                <td className="px-6 py-4 bg-transparent">
                    Phone
                </td>
                <td className="px-6 py-4">
                    $799
                </td>
                <td className="px-6 py-4 bg-transparent">
                    <a href="#" className="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            
            <tr className="bg-transparent border-b border-green-400">
                <th scope="row" className="px-6 py-4 font-medium bg-transparent text-green-50 whitespace-nowrap dark:text-green-900">
                    Apple Watch 5
                </th>
                <td className="px-6 py-4">
                    Red
                </td>
                <td className="px-6 py-4 bg-transparent">
                    Werables
                </td>
                <td className="px-6 py-4">
                    $999
                </td>
                <td className="px-6 py-4 bg-transparent">
                    <a href="#" className="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-transparent border-b border-green-400">
                <th scope="row" className="px-6 py-4 font-medium bg-transparent text-green-50 whitespace-nowrap dark:text-green-900">
                    Google Pixel Phone
                </th>
                <td className="px-6 py-4">
                    Gray
                </td>
                <td className="px-6 py-4 bg-transparent">
                    Phone
                </td>
                <td className="px-6 py-4">
                    $799
                </td>
                <td className="px-6 py-4 bg-transparent">
                    <a href="#" className="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
                {/* duplicate again for length only */}
        </tbody>
    </table>
</div>

    </>
  )
}

export default Table
