export default function SectionHeader({
  para,
  heading,
  description,
  customClass,
}) {
  return (
    <div className={customClass}>
      <div className="heading-info">
        <p className="para">{para}</p>
        <h2>{heading}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}
