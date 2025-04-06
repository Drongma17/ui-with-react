function MagicProfile({ name, birthday, gendle }) {
  const magicps = [
    { name: "Yeshi", birthday: "May-25", gendle: "male" },
    { name: "Dawa", birthday: "Jun-25", gendle: "male" },
    { name: "Pema", birthday: "May-28", gendle: "male" },
    { name: "Kunsang", birthday: "Dec-12", gendle: "female" },
  ];
  return (
    <section id="magicprofile" className="contact-section">
      {magicps.map((magic, index) => (
        <div key={index} className="project-item">
            <ul>
                <li><h3>{magic.name}         {magic.birthday}       {magic.gendle}</h3> </li>
            </ul>
        </div>
      ))}
    </section>
  );
}

export default MagicProfile;
