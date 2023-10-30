import Link from "next/link";
import styless from "./main-header.module.css";

function MainHeader() {
  return (
    <header className={styless.header}>
      <div className={styless.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={styless.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
