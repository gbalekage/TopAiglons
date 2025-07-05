"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { DataTable } from "@/components/users/data-table";

const UsersList = [
  {
    id: 1,
    name: "John Doe",
    phone: "+1234567890",
    address: "123 Main St",
    role: "User",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "+0987654321",
    address: "456 Elm St",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Alice Johnson",
    phone: "+1122334455",
    address: "789 Oak St",
    role: "User",
    status: "Active",
  },
  {
    id: 4,
    name: "Bob Brown",
    phone: "+2233445566",
    address: "321 Pine St",
    role: "Moderator",
    status: "Active",
  },
  {
    id: 5,
    name: "Charlie White",
    phone: "+3344556677",
    address: "654 Maple St",
    role: "User",
    status: "Inactive",
  },
  {
    id: 6,
    name: "Diana Green",
    phone: "+4455667788",
    address: "987 Cedar St",
    role: "Admin",
    status: "Active",
  },
  {
    id: 7,
    name: "Ethan Blue",
    phone: "+5566778899",
    address: "159 Spruce St",
    role: "User",
    status: "Active",
  },
  {
    id: 8,
    name: "Fiona Black",
    phone: "+6677889900",
    address: "753 Birch St",
    role: "Moderator",
    status: "Inactive",
  },
  {
    id: 9,
    name: "George Yellow",
    phone: "+7788990011",
    address: "852 Willow St",
    role: "User",
    status: "Active",
  },
  {
    id: 10,
    name: "Hannah Purple",
    phone: "+8899001122",
    address: "963 Cherry St",
    role: "Admin",
    status: "Active",
  },
];

const Page = () => {
  const [search, setSearch] = useState("");

  const filteredUsers = UsersList.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-lg font-semibold">Users List</h1>
        <div className="w-full sm:w-auto">
          <Input
            placeholder="Rechercher..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <DataTable data={filteredUsers} />
    </section>
  );
};

export default Page;
