import "./Feature.css";

export default function FeatureItem({ icon, heading, content }) {
  return (
    <div className="feature-content">
      <div style={{ paddingTop: "1rem", paddingBottom: "1rem", color: "#764b9a" }}>
        {icon}
        <h2>{heading}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}
