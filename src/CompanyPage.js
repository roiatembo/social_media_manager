import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SocialDetails from "./SocialDetails";

export function CompanyPage() {
  let { companyID } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/companies/${companyID}`);
        setCompany(response.data[0]);
      } catch (error) {
        console.error('Error fetching company:', error);
      }
    };

    fetchCompany();
  }, [companyID]);

  return (
    <div>
      {company ? (
        <div>
        <h2>{company.name}</h2>
        <SocialDetails key={company.id} companyId={company.id}/>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  )
}
