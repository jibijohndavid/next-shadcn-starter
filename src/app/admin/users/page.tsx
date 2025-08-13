"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/datatable";
import { DataTableColumnHeader } from "@/components/datatable/data-table-column-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

// Sample user data type
type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user" | "moderator";
  status: "active" | "inactive" | "pending";
  createdAt: string;
  lastLogin: string | null;
  avatar?: string;
};

// Sample data
const sampleUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "admin",
    status: "active",
    createdAt: "2024-01-15",
    lastLogin: "2024-08-12",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "user",
    status: "active",
    createdAt: "2024-02-20",
    lastLogin: "2024-08-11",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    role: "moderator",
    status: "inactive",
    createdAt: "2024-03-10",
    lastLogin: "2024-07-25",
  },
  {
    id: "4",
    name: "Alice Brown",
    email: "alice.brown@example.com",
    role: "user",
    status: "pending",
    createdAt: "2024-08-01",
    lastLogin: null,
  },
  {
    id: "5",
    name: "Charlie Wilson",
    email: "charlie.wilson@example.com",
    role: "user",
    status: "active",
    createdAt: "2024-01-05",
    lastLogin: "2024-08-10",
  },
  {
    id: "6",
    name: "Diana Prince",
    email: "diana.prince@example.com",
    role: "admin",
    status: "active",
    createdAt: "2024-04-15",
    lastLogin: "2024-08-12",
  },
  {
    id: "7",
    name: "Edward Clark",
    email: "edward.clark@example.com",
    role: "user",
    status: "inactive",
    createdAt: "2024-05-20",
    lastLogin: "2024-06-15",
  },
  {
    id: "8",
    name: "Fiona Davis",
    email: "fiona.davis@example.com",
    role: "moderator",
    status: "active",
    createdAt: "2024-06-10",
    lastLogin: "2024-08-09",
  },
  {
    id: "9",
    name: "George Miller",
    email: "george.miller@example.com",
    role: "user",
    status: "pending",
    createdAt: "2024-07-25",
    lastLogin: null,
  },
  {
    id: "10",
    name: "Helen Taylor",
    email: "helen.taylor@example.com",
    role: "user",
    status: "active",
    createdAt: "2024-02-14",
    lastLogin: "2024-08-08",
  },
  {
    id: "11",
    name: "Ian Anderson",
    email: "ian.anderson@example.com",
    role: "admin",
    status: "active",
    createdAt: "2024-03-05",
    lastLogin: "2024-08-11",
  },
  {
    id: "12",
    name: "Julia Roberts",
    email: "julia.roberts@example.com",
    role: "user",
    status: "inactive",
    createdAt: "2024-04-30",
    lastLogin: "2024-05-15",
  },
];

// Column definitions with sorting and hiding options
const columns: ColumnDef<User>[] = [
  {
    accessorKey: "avatar",
    header: "Avatar",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <Avatar className="h-8 w-8">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
      );
    },
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("name")}</div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "role",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Role" />
    ),
    cell: ({ row }) => {
      const role = row.getValue("role") as string;
      return (
        <Badge
          variant={
            role === "admin"
              ? "default"
              : role === "moderator"
              ? "secondary"
              : "outline"
          }
        >
          {role}
        </Badge>
      );
    },
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge
          variant={
            status === "active"
              ? "default"
              : status === "inactive"
              ? "destructive"
              : "secondary"
          }
        >
          {status}
        </Badge>
      );
    },
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created" />
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      return <div>{date.toLocaleDateString()}</div>;
    },
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "lastLogin",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last Login" />
    ),
    cell: ({ row }) => {
      const lastLogin = row.getValue("lastLogin") as string | null;
      return (
        <div>
          {lastLogin ? new Date(lastLogin).toLocaleDateString() : "Never"}
        </div>
      );
    },
    enableSorting: false,
    enableHiding: true,
  },
];

export default function UsersPage() {
  const actions = (
    <Button size="sm">
      <Plus />
      Add User
    </Button>
  );

  return (
    <DataTable
      columns={columns}
      data={sampleUsers}
      title="Users Management"
      actions={actions}
    />
  );
}
