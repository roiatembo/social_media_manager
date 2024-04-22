import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SocialDetails({ companyID }) {
  let { companyId } = useParams();
  console.log(companyId)
  const [socialMedia, setsocialMedia] = useState(null);

  useEffect(() => {
    const fetchSocialMedia = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/social-media/2`
        );
        setsocialMedia(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching company:", error);
      }
    };

    fetchSocialMedia();
  }, [companyId]);

  return (
    <div className="social-details">
      <h2>Social Details</h2>
    </div>
  );
}
