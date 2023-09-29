import { Fragment } from "react";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";

import styles from "./ErrorBoundary.module.css";
import { Home } from "react-feather";

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
      <button
        className="home-btn"
        onClick={() => {
          navigate("/");
        }}
      >
        <div className="feather-icon">
          <Home size={18} />
        </div>
        <span>Take me home</span>
      </button>
    </div>
  );
}
