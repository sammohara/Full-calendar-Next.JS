import Head from 'next/head';

import FullCalendar from '@fullcalendar/react';
// import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Full Calendar Next JS POC</title>
      </Head>

      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </div>
  );
}
