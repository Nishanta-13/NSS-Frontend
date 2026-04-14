// TeamCard.jsx (updated)
import { Icon } from "@iconify/react";
import styles from "./TeamCard.module.scss";

const TeamCard = (props) => {
  return (
    <div className={styles.Card}>
      <div className={styles.imageWrapper}>
        <img
          src={
            props.imageUrl
              ? props.imageUrl
              : "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=1024x1024&w=is&k=20&c=er-yFBCv5wYO_curZ-MILgW0ECSjt0DDg5OlwpsAgZM="
          }
          alt={`${props.name} - ${props.designation}`}
        />
      </div>
      
      <div className={styles.content}>
        <div className={styles.designation}>{props.designation}</div>
        <h3 className={styles.name}>{props.name}</h3>
        
        <div className={styles.socials}>
          {props.facebook && (
            <a target="_blank" rel="noopener noreferrer" href={props.facebook}>
              <Icon icon="logos:facebook" />
            </a>
          )}
          {props.instagram && (
            <a target="_blank" rel="noopener noreferrer" href={props.instagram}>
              <Icon icon="skill-icons:instagram" />
            </a>
          )}
          {props.linkedin && (
            <a target="_blank" rel="noopener noreferrer" href={props.linkedin}>
              <Icon icon="skill-icons:linkedin" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;