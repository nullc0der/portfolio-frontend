import { Fragment } from "react";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import { Home } from "react-feather";

import Button from "@/components/Button";
import styles from "./ErrorBoundary.module.css";

export default function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {isRouteErrorResponse(error) ? (
        <Fragment>
          <h1>{error.status}</h1>
          <p>{error.statusText}</p>
        </Fragment>
      ) : (
        <p>Unknown error occurred</p>
      )}
      <Button
        classNames="home-btn"
        onClick={() => {
          navigate("/");
        }}
      >
        <Home size={16} className="feather-icon" />
        <span>Take me home</span>
      </Button>
    </div>
  );
}
