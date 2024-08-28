import Skill from "./skill";

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML + CSS" emoji="💪" color="#ff3e00" />
      <Skill skill="JavaScript" emoji="👶" color="#f0db4f" />
      <Skill skill="Git and GitHub" emoji="👍" color="#3eb489" />
      <Skill skill="React" emoji="🐣" color="#007acc" />
    </div>
  );
}

export default SkillList;
