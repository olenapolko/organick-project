import { useState, useEffect } from "react";
import { TeamCard } from "../teamCard/TeamCard";
import { getAllExperts } from "../../fetches/fetches"; 

import "./Team.scss";

export function Team() {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    getAllExperts().then((result) => {
      setExperts(result.data);
    });
  }, []);

  return (
    <section className="team">
      <div className="team__container">
        <div className="team__text">
          <p className="team__subtitle">Team</p>
          <h1 className="team__title">Our Organic Experts</h1>
          <p className="team__para">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley.
          </p>
        </div>
        <div className="team__content">
          {experts.map((expert) => (
            <TeamCard
              key={expert.id}
              imageUrl={expert.imagePath} 
              name={expert.expertName}
              occupation={expert.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
