import "./descriptionCard.scss";

function DescriptionCard() {
  return (
    <div className="descriptionCard">
      <span className="descriptionTitle">Why does this webpage exist...</span>
      <span className="descriptionCopy"> This website serves as a launching pad for my web development learning journey. As I explore new techniques and practice different skills, you'll see them reflected here.</span>
      <span className="descriptionCopy"> The current card-based layout is just the beginning—I may experiment with other designs in the future to keep my creative options open. This format felt like a natural starting point, but it's not set in stone...</span>
    </div>
  );
}

export default DescriptionCard;
