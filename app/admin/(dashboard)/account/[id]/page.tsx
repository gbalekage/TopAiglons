"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Loader2, MessageCircleIcon, Save } from "lucide-react";

type User = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  image: string;
};

const Page = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`/api/user/${id}`);
        setUser(response.data);
      } catch (err: any) {
        setError(err.response?.data?.error || "Error fetching user");
      } finally {
        setLoading(false);
      }
    };

    if (id) getUser();
  }, [id]);

  const handleImageUpload = async () => {
    if (!imageFile) return;
    setUploadingImage(true);

    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const res = await axios.post(`/api/user/${id}/upload-image`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setUser((prev) => (prev ? { ...prev, image: res.data.imageUrl } : prev));
      setImageFile(null);
      setPreviewImage(null);
    } catch (err) {
      alert("Image upload failed.");
    } finally {
      setUploadingImage(false);
    }
  };

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="animate-spin" />
        <span className="ml-2">Loading user...</span>
      </div>
    );

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="mt-24 grid max-w-3xl gap-4 px-4 mx-auto lg:grid-cols-2 lg:gap-6 xl:gap-10">
      {/* User Info Section */}
      <div className="space-y-4 lg:col-span-2">
        <div className="flex items-center space-x-4">
          {/* Clickable Avatar */}
          <div className="relative w-12 h-12">
            <Avatar className="w-full h-full">
              <img
                src={previewImage || user?.image}
                alt="Avatar"
                className="rounded-full border w-full h-full object-cover"
              />
            </Avatar>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setImageFile(file);
                  setPreviewImage(URL.createObjectURL(file));
                }
              }}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl font-bold">{user?.name}</h1>
            <p className="text-gray-500 dark:text-gray-400">{user?.email}</p>
          </div>
        </div>

        <p className="text-gray-500 dark:text-gray-400 flex items-center gap-1">
          <span className="font-bold">Address:</span>
          <span>{user?.address}</span>
        </p>

        {imageFile && (
          <div>
            <Button
              size={"sm"}
              onClick={handleImageUpload}
              disabled={uploadingImage}
            >
              {uploadingImage ? (
                <div>
                  <Loader2 className="animate-spin" />
                </div>
              ) : (
                <Save />
              )}
            </Button>
          </div>
        )}
      </div>

      {/* Contact Edit Section */}
      <div>
        <Card>
          <CardContent className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={user?.name} readOnly />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" value={user?.phone} readOnly />
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <Button disabled>Save</Button>
            <Button variant="outline" disabled>
              Edit More
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Recent Activity</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="flex items-center space-x-4 py-4">
              <CalendarIcon className="w-6 h-6" />
              <div className="grid grid-rows-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Scheduled a meeting
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  2 hours ago
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center space-x-4 py-4">
              <MessageCircleIcon className="w-6 h-6" />
              <div className="grid grid-rows-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Sent a message
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  1 day ago
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Security Section */}
      <div className="space-y-4 lg:col-span-2">
        <h2 className="text-2xl font-bold">Security</h2>
        <Button variant="outline">Update Password</Button>
      </div>
    </div>
  );
};

export default Page;
