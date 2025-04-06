import PropTypes from "prop-types";

function ProfileCard({ name, age, isMember, hobbies, onHobbyClick }) {
 

  return (
    <div className="profile-card">
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h3>Status: {isMember ? "Active Member" : "Guest"}</h3>
      <h3>Hobbies</h3>
      <ul>
        {hobbies.map((hobby, index) => {
        return  <li key={index}  onClick={()=> onHobbyClick(hobby)}>{hobby}  </li>
        })}
      </ul>
    </div>
  );
}

ProfileCard.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isMember: PropTypes.bool.isRequired,
  hobbies: PropTypes.arrayOf(PropTypes.string)
};

export default ProfileCard;
