// function Contact(props){
//     const sum = props.num +1;
//     return (
//         <section id="contact" className="contact-section">
//         <h2>Contact Me </h2>
//         <h2>Phone No: {props.number}</h2>
//         <h2>age : {props.age}</h2>
//         <h2>Address : {props.address}</h2>
//         <h2>Status : {props.isMember ? "Active Member": "Guest"}</h2>
//         <p>
//           if you would like to get touch, feel free to connect with me at{" "}
//           <a href="mailto"></a>ngawangyeshifreedom@gmail.com{" "}
//         </p>
//       </section>
//     );
// }

function Contact({number, age, address, isMember}){

    return (
        <section id="contact" className="contact-section">
        <h2>Contact Me </h2>
        <h2>Phone No: {number}</h2>
        <h2>age : {age}</h2>
        <h2>Address : {address}</h2>
        <h2>Status : {isMember ? "Active Member": "Guest"}</h2>
        <p>
          if you would like to get touch, feel free to connect with me at{" "}
          <a href="mailto"></a>ngawangyeshifreedom@gmail.com{" "}
        </p>
      </section>
    );
}

export default Contact;