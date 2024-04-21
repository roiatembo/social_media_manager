export default function CompanyBox({ company }) {
  return (
    <div className="company-box">
      <h2>{company.name}</h2>
      <p>
        <i>Tasks Overview</i>
      </p>
    </div>
  );
}
