const Title = ({ title, titleAccent }) => {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{titleAccent}</span>
      </h2>
    </div>
  );
};
export default Title;
