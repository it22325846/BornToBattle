import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from 'axios';

function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:8020/events");
      const eventData = response.data.existingEvents.map(event => ({
        title: event.topic,
        start: event.time,
        // Assuming each event lasts for one hour
        end: new Date(new Date(event.time).getTime() + (60 * 60 * 1000)).toISOString(),
        allDay: false // Assuming events have specific start and end times
      }));
      setEvents(eventData);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleDateSelect = (selectInfo) => {
    const title = prompt("Enter event title:");

    if (title) {
      const start = selectInfo.startStr;
      // Assuming each event lasts for one hour
      const end = new Date(new Date(selectInfo.startStr).getTime() + (60 * 60 * 1000)).toISOString();

      const newEvent = {
        title: title,
        start: start,
        end: end,
        allDay: false,
      };

      setEvents([...events, newEvent]);
    }
  };

  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'?`)) {
      const filteredEvents = events.filter((event) => event !== clickInfo.event);
      setEvents(filteredEvents);
    }
  };

  return (
    <div style={{ color: "white" }}>
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridDay"
        height="80vh"
        selectable={true}
        select={handleDateSelect}
        events={events}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "timeGridDay",
        }}
        eventClick={handleEventClick} // Assign the eventClick handler
        slotMinTime="08:00:00" // Set the minimum time to 8 am
        slotMaxTime="23:00:00" // Set the maximum time to 11 pm
        // Custom CSS for FullCalendar
        eventDisplay="block" // Display events as block elements
        eventBackgroundColor="black" // Background color of events
        eventTextColor="white" // Text color of events
        slotLabelFormat={{
          hour: "numeric",
          minute: "2-digit",
          hour12: false
        }} // Format for time labels on slots
        slotLabelInterval={{ hours: 1 }} // Interval for time labels on slots
        slotWidth="300px" // Set width of each time slot
        slotLabelStyle={{ fontSize: "14px", color: "white" }} // Style for time labels
      />
    </div>
  );
}

export default Calendar;
