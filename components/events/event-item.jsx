import styless from "./event-item.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatedAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={styless.item}>
      <img src={"/" + image} alt={title}></img>
      <div className={styless.content}>
        <div className={styless.summary}>
          <h2>{title}</h2>
          <div className={styless.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={styless.address}>
            <AddressIcon />
            <address>{formatedAddress}</address>
          </div>
        </div>
        <div className={styless.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>{" "}
            <span className={styless.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
