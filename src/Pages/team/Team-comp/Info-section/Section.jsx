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
      <div className={styles.info}>
        {props.info
          ? props.info.map((info, index) => <p key={index}>{info}</p>)
          : "loregvr mjbvoubki b voiphvoin jbvkib k  mnuoibvk m bk  fkbpdifbvk cmmojf mcvdjdiuvb mnfd   f bjlf dj dfm jm dik kd vkdbvihofnev m j dfjb jke v mbibviedb f"}
      </div>
    </div>
  );
};

export default SectionTeam;
