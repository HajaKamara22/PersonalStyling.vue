<template>
    <div class="calendar-container">
      <div class="calendar-header">
        <h2>October 2024</h2>
      </div>
      <div class="calendar">
        <div class="day-name" v-for="day in daysOfWeek" :key="day">{{ day }}</div>
        <div class="calendar-day" v-for="(day, index) in days" :key="index">
          <div class="day-number">{{ day.date }}</div>
          <ul class="events">
            <li v-for="(event, idx) in day.events" :key="idx">{{ event }}</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        daysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        days: [
          { date: "", events: [] }, // Empty start (Sunday)
          { date: "", events: [] }, // Empty (Monday)
          { date: 1, events: [] }, // Tuesday
          { date: 2, events: [] }, // Wednesday
          { date: 3, events: [] }, // Thursday
          { date: 4, events: ["Fashion Business Seminar"] }, // Friday
          { date: 5, events: [] }, // Saturday
          { date: 6, events: [] }, // Sunday
          { date: 7, events: ["Fashion Influencers Meetup"] }, // Monday
          { date: 8, events: [] }, // Tuesday
          { date: 9, events: ["Styling Workshop"] }, // Wednesday
          { date: 10, events: [] }, // Thursday
          { date: 11, events: [] }, // Friday
          { date: 12, events: ["Sustainable Fashion Webinar"] }, // Saturday
          { date: 13, events: [] }, // Sunday
          { date: 14, events: [] }, // Monday
          { date: 15, events: [] }, // Tuesday
          { date: 16, events: ["Designer Showroom Tour"] }, // Wednesday
          { date: 17, events: [] }, // Thursday
          { date: 18, events: [] }, // Friday
          { date: 19, events: ["Fashion & Mental Health Panel"] }, // Saturday
          { date: 20, events: [] }, // Sunday
          { date: 21, events: [] }, // Monday
          { date: 22, events: [] }, // Tuesday
          { date: 23, events: [] }, // Wednesday
          { date: 24, events: ["Personal Branding Workshop"] }, // Thursday
          { date: 25, events: [] }, // Friday
          { date: 26, events: ["Styling for the Workplace"] }, // Saturday
          { date: 27, events: [] }, // Sunday
          { date: 28, events: [] }, // Monday
          { date: 29, events: [] }, // Tuesday
          { date: 30, events: [] }, // Wednesday
          { date: 31, events: ["Halloween Fashion Show"] }, // Thursday
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .calendar-container {
    border: 5px solid beige;
    padding: 10px;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
  }
  
  .calendar-header {
    text-align: center;
    margin-bottom: 10px;
  }
  
  .calendar {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 10px;
  }
  
  .day-name {
    font-weight: bold;
    text-align: center;
    padding: 10px;
    background-color: #f0f0f0;
  }
  
  .calendar-day {
    border: 1px solid black;
    padding: 10px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
  }
  
  .day-number {
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .events {
    list-style-type: none;
    padding: 0;
  }
  </style>