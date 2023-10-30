import EventItem from "./event-item";
import styles from "./event-list.module.css";

function EventList(props) {
  return (
    <ul className={styles.list}>
      {props.items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          image={event.image}
          location={event.location}
          date={event.date}
        />
      ))}
    </ul>
  );
}

export default EventList;
