import React from 'react'

function Table() {
  return (
    <>
       
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-green-900 dark:text-green-900">
        <thead className="text-xs text-white uppercase bg-transparent border-b border-green-400 dark:text-white">
            <tr>
                <th scope="col" className="text-black font-extrabold px-6 py-3 bg-transparent">
                    Email
                </th>
                <th scope="col" className="text-black font-extrabold px-6 py-3">
                    Name
                </th>
                <th scope="col" className="text-black font-extrabold px-6 py-3 bg-transparent">
                    Password
                </th>
                <th scope="col" className="text-black font-extrabold px-6 py-3">
                    Amount
                </th>
                <th scope="col" className="text-black font-extrabold px-6 py-3 bg-transparent">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-transparent border-b border-green-400">
                <th scope="row" className="px-6 py-4 font-medium bg-transparent text-green-50 whitespace-nowrap dark:text-green-900">
                    crenuka055@rku.ac.in
                </th>
                <td className="px-6 py-4">
                    bro
                </td>
                <td className="px-6 py-4 bg-transparent">
                    123
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
                    hello@gmai.com
                </th>
                <td className="px-6 py-4">
                    hello
                </td>
                <td className="px-6 py-4 bg-transparent">
                    monster@123$
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
                    ajit123@gmail.com
                </th>
                <td className="px-6 py-4">
                    ajit
                </td>
                <td className="px-6 py-4 bg-transparent">
                    Leavmealone11234
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
                    filetheghost@gmail.com
                </th>
                <td className="px-6 py-4">
                    chetan
                </td>
                <td className="px-6 py-4 bg-transparent">
                    Leavmealone!@#$%2003#$%%
                </td>
                <td className="px-6 py-4">
                    $799
                </td>
                <td className="px-6 py-4 bg-transparent">
                    <a href="#" className="font-medium text-white hover:underline">Edit</a>
                </td>
            </tr>
          
        </tbody>
  </table>
</div>
    </>
  )
}

export default Table
