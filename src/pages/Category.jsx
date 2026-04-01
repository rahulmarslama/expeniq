import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useEffect } from "react";


import { useCategories } from '../hooks/useCategories';
import { useAuth } from 'oidc-react';

const Category = ()=>{
  const { categories, loading, error } = useCategories();
  const auth = useAuth();

  if (!auth.userData) {
    return <div>Loading authentication...</div>;
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Categories</h1>
          <p className="mt-2">Manage and track your recent categories</p>
        </div>

        {error && <div className="text-red-500">Error: {error}</div>}
        {loading && <div>Loading...</div>}

        <div className="rounded-lg shadow-lg overflow-hidden border">
          <Table>
            <TableCaption>A list of your categories.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">SN</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Icon</TableHead>
                <TableHead>Created Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((userData, index) => (
                <TableRow key={userData.id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>{userData.name}</TableCell>
                  <TableCell>{userData.icon}</TableCell>
                  <TableCell>{userData.createdAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Category;