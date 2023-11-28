import React from "react";
import PageTitle from "@/src/components/pageTitle";
import { Link } from "@nextui-org/react";

function EventsPage() {
  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title="Events" />
        <Link href="/admin/events/new-event" className="bg-primary text-white px-5 py-2 rounded-sm">Create Event</Link>
      </div>
    </div>
  );
}

export default EventsPage;
