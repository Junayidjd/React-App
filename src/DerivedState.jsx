import React, { useState } from "react";

const DerivedState = () => {
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bof", age: 55 },
    { name: "Charlie", age: 35 },
    { name: "Junaid", age: 24 },
  ]);

  console.log(users); // Derived state count of users
  const userCount = users.length;

  const averageAge =
    users.reduce((accum, currElem) => accum + currElem.age, 0) / userCount;

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-4">
          Users List
        </h1>
        <p className="text-xl text-gray-300 mb-6">Total Users: {userCount}</p>
        <ul className="space-y-3">
          {users.map((user, index) => (
            <li
              key={index}
              className="bg-gray-700 p-4 rounded-lg shadow-sm hover:bg-gray-600 transition duration-200"
            >
              <span className="font-semibold">{user.name}</span> -{" "}
              <span>{user.age} years old</span>
            </li>
          ))}

          <span className="font-semibold"><p className="bg-gray-700 p-4 rounded-lg shadow-sm hover:bg-gray-600 transition duration-200">total Average {averageAge}</p></span>
        </ul>
      </div>
    </>
  );
};

export default DerivedState;
