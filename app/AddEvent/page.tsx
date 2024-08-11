"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const AddEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!title || !description) {
      alert("All fields are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/events", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, date, description, location }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create an event!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Event Name"
      />

      <input
        onChange={(e) => setDate(e.target.value)}
        value={date}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Event Date"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Event Description"
      />

      <input
        onChange={(e) => setLocation(e.target.value)}
        value={location}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Event Location"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold  text-white py-3 px-6 w-fit "
      >
        Add Event
      </button>
    </form>
  );
};

export default AddEvent;
