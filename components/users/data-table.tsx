"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

type User = {
  id: number;
  name: string;
  phone: string;
  address: string;
  role: string;
  status: string;
};

export function DataTable({ data }: { data: User[] }) {
  return (
    <Table className="border">
      <TableHeader>
        <TableRow className="bg-muted/50">
          <TableHead>#</TableHead>
          <TableHead>Nom</TableHead>
          <TableHead>Téléphone</TableHead>
          <TableHead>Adresse</TableHead>
          <TableHead>Rôle</TableHead>
          <TableHead>Statut</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="cursor-pointer">
        {data.length > 0 ? (
          data.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.address}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell className="flex gap-4">
                <Button size="sm" variant="outline">
                  Détails
                </Button>
                <Button size="sm" variant="destructive">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={7} className="text-center">
              Aucun utilisateur trouvé.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
