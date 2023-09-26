import Avatar from "@/components/Avatar";
import TypeWriter from "@/components/TypeWriter";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="pure-g w-100">
        <div className="pure-u-1 pure-u-md-1-2 d-flex justify-content-end">
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
          </div>
        </div>
        <div className="pure-u-1 pure-u-md-1-2">
          <Avatar classNames="avatar" />
        </div>
      </div>
    </div>
  );
}
