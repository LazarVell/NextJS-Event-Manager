"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

interface EditEventFormProps {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
}

const EditEventForm: React.FC<EditEventFormProps> = ({
  id,
  title,
  date,
  description,
  location,
}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDate, setNewDate] = useState(date);
  const [newDescription, setNewDescription] = useState(description);
  const [newLocation, setNewLocation] = useState(location);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/events/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newTitle,
          newDate,
          newDescription,
          newLocation,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update Event.");
      }

      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Event Name"
      />

      <input
        onChange={(e) => setNewDate(e.target.value)}
        value={newDate}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Event Name"
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Event Description"
      />

      <input
        onChange={(e) => setNewLocation(e.target.value)}
        value={newLocation}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Event Name"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold  text-white py-3 px-6 w-fit "
      >
        Update Event
      </button>
    </form>
  );
};

export default EditEventForm;
