import TeamCard from "../Card/TeamCard";
import styles from "./Section.module.scss";

const SectionTeam = (props) => {
  return (
    <div className={styles.section}>
      <TeamCard
        designation={props.designation}
        name={props.name}
        imageUrl={props.imageUrl}
        facebook={props.facebook}
        instagram={props.instagram}
        linkedin={props.linkedin}
      />
     
    </div>
  );
};

export default SectionTeam;
