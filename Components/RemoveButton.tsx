"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

interface RemoveButtonProps {
  id: string;
}

const RemoveButton: React.FC<RemoveButtonProps> = ({ id }) => {
  const router = useRouter();
  const removeEvent = async () => {
    const confirmed = confirm("Are you sure you wish to delete this topic?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/events?id=${id}`, {
        method: "DELETE",
      });
      router.refresh();
    }
  };

  return (
    <button onClick={removeEvent} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveButton;
