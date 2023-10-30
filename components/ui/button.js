import Link from "next/link";
import styless from "./button.module.css";

function Button(props) {
  if (props.link) {
    return (
      <Link className={styless.btn} href={props.link}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={styless.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
