import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userApi from "../api/userApi";

var NewComponent = () => {
  const [APIData, setAPIData] = useState([]);
  
  useEffect(() => {
      userApi.getUsers()
      .then((response) => {
          setAPIData(response.data);
      })
  }, []);

  const getData = () => {
    userApi.getUsers()
      .then((response) => {
          setAPIData(response.data);
      })
  }

  const deleteItem = (id) => {
    userApi.delete(id)
    .then(() => {
      getData();
    })

  }

  return (
    <div className="overflow-x-auto m-4 relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              ID
            </th>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              First Name
            </th>
            <th scope="col" className="py-3 px-6">
              Last Name
            </th>
            <th scope="col" className="py-3 px-6">
              Phone Number
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {APIData.map(item => 
            <tr key={item.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.id}
              </th>
              <td className="py-4 px-6">
                {item.email}
              </td>
              <td className="py-4 px-6">
                {item.firstName}
              </td>
              <td className="py-4 px-6">
                {item.lastName}
              </td>
              <td className="py-4 px-6">
                {item.phoneNumber}
              </td>
              <td className="py-4 px-6">
                <Link to={`/update/${item.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                <a href="" onClick={() => {deleteItem(item.id)}} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
              </td>
            </tr>
          )}

        </tbody>
      </table>
    </div>
  );
}

export default NewComponent;
