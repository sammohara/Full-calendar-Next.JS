import Head from 'next/head';

// import FullCalendar from '@fullcalendar/react';
// import interactionPlugin from '@fullcalendar/interaction';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
import Calendar from '../components/calendar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Full Calendar Next JS POC</title>
      </Head>
      Hi
      <Calendar />
    </div>
  );
}
