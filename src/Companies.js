import { useEffect, useState} from "react";
import axios from "axios";
import CompanyBox from "./CompanyBox";

export function Companies () {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:5000/api/companies');
            setCompanies(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
  
      return (
        <div className="company-container">
          <ul>
            {companies.map(company => (
                <li><CompanyBox key={company.id} company={company} /></li>
            ))}
            </ul>
        </div>
      )
       
}