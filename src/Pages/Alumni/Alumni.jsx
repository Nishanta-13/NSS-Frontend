import styles from "./Team.module.scss";
import Heading from "../../components/shared/Heading/Heading";
// import SectionTeam from "./Team-comp/Info-section/Section";
// import data from "../../db/team";
// import focus from "../../db/team-focus";
import Alum24 from "../../db/Alumni24.json"
import Alum25 from "../../db/Alumni25.json"

import TeamCard from "./Team-comp/Card/TeamCard";
import Header from "../../components/shared/Title-page/Header";

const Team = () => {
  return (
    <div className={styles.Team}>
      <Header
        title="ALUMNI"
        backgroundImage={
          "https://res.cloudinary.com/sahincloudinary/image/upload/f_auto,q_auto/v1/nss_events/team/iqydnjgf00cynldupcic"
        }
      />
      <Heading title="BATCH 2025" />

      <div className={styles.CardContainer}>
        {Alum25.map((item) => {
          return (
            <TeamCard
              key={item.id}
              designation={item.designation}
              name={item.name}
              imageUrl={item.image}
              facebook={item.facebook_profile_link}
              instagram={item.instagram_profile_link}
              linkedin={item.linkedIn_profile_link}
            />
          );
        })}
      </div>
  
      <Heading title="BATCH 2024" />

      <div className={styles.CardContainer}>
        {Alum24.map((item) => {
          return (
            <TeamCard
              key={item.id}
              designation={item.designation}
              name={item.name}
              imageUrl={item.image}
              facebook={item.facebook_profile_link}
              instagram={item.instagram_profile_link}
              linkedin={item.linkedIn_profile_link}
            />
          );
        })}
      </div>
     
    </div>
  );
};
export default Team;
