import { useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
                <li key={company.id}>
                  <Link to={"/company/"+company.id}><CompanyBox key={company.id} company={company} /></Link>
                </li>
            ))}
            </ul>
        </div>
      )
       
}