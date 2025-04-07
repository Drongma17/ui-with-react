function About(){
    const name = "John Doe";
    const profession = "Full Stack Developer ";
    return (
        <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          Hello, I am {name}, a passionate {profession}, I love building web
          application that solve real user problems.
        </p>
      </section>

    );
}

export default About;