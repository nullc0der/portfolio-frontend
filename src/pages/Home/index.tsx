import * as classnames from "classnames";

import Avatar from "@/components/Avatar";
import TypeWriter from "@/components/TypeWriter";
import RotateToText from "@/components/RotateToText";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={classnames(styles.container, "container", "mx-auto")}>
      <div className="pure-g w-100">
        <div className="pure-u-1 pure-u-md-1-2 d-flex">
          <div className="info-texts">
            <TypeWriter
              lines={[
                'print("Hello, World!")',
                'console.log("Hello, World!")',
                'println("Hello, World!")',
                'System.out.println("Hello, World!");',
              ]}
              classNames="hello-world"
            />
            <h1 className="title">I am</h1>
            <RotateToText text="Prasanta Kakati" />
            <TypeWriter
              lines={["Full Stack Developer"]}
              infinite={false}
              classNames="position"
            />
          </div>
        </div>
        <div className="pure-u-1 pure-u-md-1-2 d-flex justify-content-center">
          <Avatar classNames="avatar" />
        </div>
      </div>
    </div>
  );
}
