import "./App.css";

export default function App() {
  return (
    <main className="container">
      <header className="header">
        <h1>Hi, I’m Haley 👋</h1>
        <p>Aspiring web developer and creative at heart.</p>
      </header>

      <section className="card">
        <h2>
          <span className="education-emoji">🎓</span> Education
        </h2>

        <p>
          Bachelor’s in Business Analytics and Information Systems with a concentration in Cybersecurity ;
        </p>
        <p>
          Certification in Computer Programming attained from St.Petersburg College
        </p>
      </section>

      <section className="card">
        <h2>💻 My Journey</h2>
          <p>
  I’m currently a Web Developer Intern at SPC Collaborative Labs, where
  I work on front-end UI design and functionality. Through this
  experience, I’ve been building a solid understanding of version
  control using GitHub and collaborating on real-world projects. 

  I originally started my college journey pursuing architecture, but over time I realized it wasn’t the right fit for me. Once I transitioned into Business Analytics and Information Systems, everything clicked. I quickly discovered how much I enjoy working with technology and problem-solving, and it’s something I’ve become genuinely passionate about.
</p>
      </section>

      <section className="card">
         <h2>Skills</h2>
        <p></p>
        <p>
          I’m actively working on expanding my programming skills by building
          projects and continuing to learn new technologies. Every day I actively try to work on my own project(s)!
        </p>

        <div className="skill"> JavaScript </div>
        <div className="skill"> TypeScript </div>
        <div className="skill"> CSS </div>
        <div className="skill"> HTML </div>
        <div className="skill"> SQL </div>
        <div className="skill"> Python </div>
      </section>

      <section className="card">
        <h2>🌱 A Bit More About Me...🤹</h2>
        <p>
          I like to think of myself as a jack of all trades — master of none...
          for now.
        </p>

        <ul>
          <li>I love creating things through coding, gardening, and sewing.</li>
          <li>I taught myself how to sew and enjoy small creative projects.</li>
          <li>I grow my own plants and love watching things develop from nothing.</li>
          <li>
            I spend a lot of time outdoors, especially at the beach or parks,
            with my dogs and family.
          </li>
           <li>
            I don't know how my dogs changed the cursor.
          </li>
        </ul>
      </section>
    </main>
  );
}