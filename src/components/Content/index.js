import Footer from "../Footer";
import "./Content.css";
import main from "../../main.jpg"

export default function Content() {
  return (
    <div id="content-main">
      <img id="content-image" src={main} alt="stock electronics circuit" />

      <div id="content-about">
        <h1>about</h1>
        <p>Hey there. 👋</p>
        <p>
          My name is Alex. I've been working in software development for a while
          now.
        </p>
        <p>
          I am currently working on the digital team at Masonite International.
          🚪
        </p>
        <p>
          <a href="https://github.com/abrackx">
            You can check out my github here.
          </a>
        </p>
      </div>
      <br />

      <div id="content-skills">
        <h1>skills</h1>
        <p>
          My current languages are Java and JavaScript. I have been branching
          out into Rust as well.
        </p>
        <p>
          I do a lot of work on backend systems. I have worked on projects using
          these frameworks or tools:
        </p>
        <ul>
          <li>Spring Boot</li>
          <li>JPA</li>
          <li>Hibernate</li>
          <li>Apache Kafka</li>
          <li>Spring Batch</li>
          <li>MSSQL</li>
          <li>MariaDB</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
          <li>React</li>
          <li>Express</li>
          <li>Google Cloud</li>
        </ul>
        <p>
          I know a good bit about databases. Ask me how to improve your indexes.
        </p>
        <p>
          In 2020 I started working on 3d printers. I have an ender 3 v2 with a
          bl touch hooked up to octoprint.
        </p>
        <p>
          I have built a few keyboards. I am currently switching between an
          Iris, Kyria and YMDK96. #ergolife
        </p>
      </div>
      <br />

      <div id="content-contact">
        <h1>contact</h1>
        <p>
          Feel free to reach out to me via email at alex@brahts.dev or connect
          with me on LinkedIn{" "}
          <a href="https://www.linkedin.com/in/alex-brackx-5a07b6144/">here.</a>
        </p>
      </div>
      <Footer />
    </div>
  );
}
