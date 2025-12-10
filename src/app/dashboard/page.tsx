"use client";

import { useProtectedRoute } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";

export default function DashboardPage() {
  useProtectedRoute();

  const user = typeof window !== "undefined" 
    ? JSON.parse(localStorage.getItem("user") || "{}") 
    : { name: "", email: "" };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-cyan-50 p-8">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-2xl">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-indigo-500 to-cyan-500 text-white">
                    {user.name?.[0]?.toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-3xl">Halo, {user.name || "User"}!</CardTitle>
                  <p className="text-lg text-gray-600">{user.email}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={logout}>
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="text-center py-10">
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8">
              <p className="text-2xl font-bold text-green-800">
                Fullstack Go + Next.js + Go sudah terhubung 100%
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}