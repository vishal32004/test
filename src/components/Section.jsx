export default function Section({ children, className = "" }) {
  return (
    <section className={className}>
      <div className="container py-5">{children}</div>
    </section>
  );
}
