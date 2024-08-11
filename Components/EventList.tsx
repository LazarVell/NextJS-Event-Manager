"use client";

import React, { useEffect, useState } from "react";
import RemoveButton from "./RemoveButton";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { useSession } from "next-auth/react";

interface Event {
  _id: string;
  date: string;
  title: string;
  description: string;
  location: string;
  users: string[];
}

const getEvents = async () => {
  try {
    //cache no store will prevent NextJS from caching previous fetch values
    const res = await fetch("http://localhost:3000/api/events", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch Events");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading Events: ", error);
  }
};

const EventList = () => {
  const [events, setEvents] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchData = async () => {
      const { events } = await getEvents();
      setEvents(events);
    };

    fetchData();
  }, []);

  const signUp = async (id: string) => {
    if (!session?.user?.name) return; // Ensure user is logged in and has a name

    try {
      const res = await fetch(`http://localhost:3000/api/events/signUp/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: session.user.name,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to sign up.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {events.map((event: Event, index: number) => (
        <div
          key={index}
          className="p-4 border boder-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl">{event.title}</h2>
            <div>
              <p className="font-bold">Date: </p>
              <p>{event.date}</p>
            </div>

            <div>
              <p className="font-bold">Description:</p>
              <p>{event.description}</p>
            </div>
            <div>
              <p className="font-bold">Location:</p>
              <p>{event.location}</p>
            </div>
            <div>
              <p className="font-bold">Who is coming:</p>
              <div className="flex">
                {event.users.map((user: string, index: number) => (
                  <p key={index}>{user}&nbsp;</p>
                ))}
              </div>
            </div>
          </div>

          {session && (
            <div className="flex flex-col">
              <div className="flex gap-2 justify-between">
                <RemoveButton id={event._id} />
                <Link href={`/EditEvent/${event._id}`}>
                  <HiPencilAlt size={24} />
                </Link>
              </div>
              {!event.users.includes(session.user!.name!) ? ( // Check if the user is not already in the array
                <button
                  onClick={() => signUp(event._id)}
                  className="bg-green-500 text-white font-bold px-6 py-2"
                >
                  Sign up
                </button>
              ) : (
                <div className="bg-blue-500 text-white font-bold px-6 py-2">
                  Signed up!
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default EventList;
