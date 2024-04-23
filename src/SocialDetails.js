import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ordinals = {
  1: "First",
  2: "Second",
  3: "Third",
  4: "Fourth",
  5: "Fifth",
  6: "Sixth",
};

export default function SocialDetails({ compId }) {
  console.log(compId);
  const [socialMedia, setsocialMedia] = useState(null);

  useEffect(() => {
    const fetchSocialMedia = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/social-media/${compId}`
        );
        setsocialMedia(response.data);
      } catch (error) {
        console.error("Error fetching company:", error);
      }
    };

    fetchSocialMedia();
  }, [compId]);

  const posts = (count) => {
    let checkList = [];
    for (let i = 1; i <= count; i++) {
      checkList.push(ordinals[i]);
    }
    return checkList;
  };

  return (
    <div>
      {socialMedia !== null ? (
        <ul>
          {socialMedia.map((item) => (
            <li key={item.platform_id}>
              <h3>{item.platform_name}</h3>
              <ul>
                {posts(
                  item.frequency + item.optional_frequency
                ).map((post) => {
                  return (
                    <li key={item.platform_id + post}>
                      <label>
                        <input
                          type="checkbox"
                         // checked={isChecked}
                          // onChange={handleCheckboxChange}
                        />
                        <p>{post} Post</p>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
