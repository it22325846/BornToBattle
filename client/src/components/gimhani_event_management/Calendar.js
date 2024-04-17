import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
  const [events, setEvents] = useState([]); // State to store events

  // Function to handle the selection of time range on the calendar
  const handleDateSelect = (selectInfo) => {
    const title = prompt("Enter event title:"); // Prompt user to enter event title

    if (title) {
      const start = selectInfo.startStr; // Start time of the selected range
      const end = selectInfo.endStr; // End time of the selected range

      const newEvent = {
        title: title,
        start: start,
        end: end,
        allDay: selectInfo.allDay,
      };

      setEvents([...events, newEvent]); // Add new event to the events array
    }
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"timeGridDay"}
        height={"90vh"}
        selectable={true} // Enable selection on the calendar
        select={handleDateSelect} // Callback function for handling selection
        events={events} // Pass the events data to the calendar
      />
    </div>
  );
}

export default Calendar;
