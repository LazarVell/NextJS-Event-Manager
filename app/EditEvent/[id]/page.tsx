import EditEventForm from "@/Components/EditEventForm";
import React from "react";

interface EditEventProps {
  params: {
    id: string;
  };
}

const getEventById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/events/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch event");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const EditEvent: React.FC<EditEventProps> = async ({ params }) => {
  const { id } = params;
  const { event } = await getEventById(id);
  const { title, date, description, location } = event;

  return (
    <EditEventForm
      id={id}
      title={title}
      description={description}
      date={date}
      location={location}
    />
  );
};

export default EditEvent;
