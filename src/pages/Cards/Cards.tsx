import "./Cards.css";
export default function Cards() {
  return (
    <div className="d-container">
      <div className="d-flex">
        <div className="d-width-card">
          <h2>My Perfil Profissional</h2>
          <p>
            Hi word, I am develop web. Usually I'm study a litle English and
            languagens programation. start at 8:00Am, some
          </p>
          <div className="d-button-flex">
            <a href="">git-hub</a>
          </div>
        </div>
        <div className="d-width-card">
          <h2>Kelliton Santana</h2>
          <p>
            Habilidades: <br></br>- CSS <br></br>- HTML <br></br>- JavaScript{" "}
            <br></br>- ReactJS <br></br>- Sass / Scss / Less <br></br>- NodeJS{" "}
            <br></br>- Git <br></br>- Figma
            <br></br>
            <br></br>
            Front-end com habilidades em CSS, HTML, JavaScript, React.JS, Sass,
            etc. Atualmente no 3 ano do ensino médio técnico, cursando
            informática.
          </p>
          <div className="d-button-flex">
            <a href="https://github.com/ProgrammerKelliton" target={"__black"}>
              git-hub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
