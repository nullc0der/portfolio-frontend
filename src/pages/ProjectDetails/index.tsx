import classnames from "classnames";

import Skill from "@/components/Skill";
import styles from "./ProjectDetails.module.css";

export default function ProjectDetails() {
  return (
    <div className={classnames(styles.container, "page-container")}>
      <h1>Project Name</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus rem
        libero consequuntur deleniti veniam quis possimus molestias quaerat nemo
        amet voluptatibus reiciendis, beatae itaque? Laborum illum assumenda
        quod saepe excepturi? Rem consequatur similique quidem asperiores aut
        dolore dolor dolorum quia quasi tempora cupiditate alias rerum ad
        repellat, commodi, quos in iste aperiam. Expedita necessitatibus
        quisquam a incidunt minima nostrum temporibus? Architecto deleniti fuga
        officiis et distinctio sequi dolor consectetur, quae voluptas
        praesentium ducimus sed consequatur earum amet a consequuntur cumque
        mollitia porro id, ipsa ullam molestias, quia molestiae. Hic, qui! Ipsa
        consequuntur, aliquid id quos quam officia incidunt molestias,
        voluptatum et possimus magnam! Ut, repellat. Deserunt, perspiciatis
        atque. Adipisci eaque eveniet deserunt quasi molestias! Pariatur facere
        quia dolor neque consequuntur! Minus fuga asperiores doloremque, numquam
        quibusdam cum dicta sapiente, eos possimus vitae corporis eaque
        voluptas, nam pariatur laborum impedit provident dolores quod ipsam
        architecto quos. Illum facilis itaque dolor maiores.
      </p>
      <div className="d-flex flex-col skills">
        <h3>Skills Used</h3>
        <div className="d-flex align-items-center">
          <Skill changeIconOnHover={false} />
        </div>
      </div>
      <div className="d-flex flex-col gallery">
        <h4>Project Gallery</h4>
        <img src="https://place-hold.it/300" />
      </div>
    </div>
  );
}
