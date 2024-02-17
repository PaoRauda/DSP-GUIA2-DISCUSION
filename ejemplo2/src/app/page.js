import styles from "./page.module.css";

const Equipos = ({equipos}) => {
  return (
    <div className={styles.container_list}>
      <h2 className={styles.title}>Equipos de futbol</h2>
      {equipos.map((equipo) => (
        <div key={equipo.id}>
          <h3 className={styles.nameclub}>{equipo.nombre}</h3>
          <ul>
            {equipo.plantilla.map((jugador) => (
              <li className={styles.container_list} key={jugador.id}>
                <strong>{jugador.nombre}</strong>
                <p>Altura: {jugador.Altura}m <br></br> Peso: {jugador.Peso}kg</p>
                <img src={jugador.Url} alt="Imagen Jugador" className={styles.imagen}/>
              </li>
            ))}
            </ul>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const equiposData = [
    {"id":1,
    "nombre":"Real Madrid",
    "plantilla":[
      {"id":1,"nombre":"Eden Hazard","Altura":"1.75","Peso":"74kg", "Url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Eden_Hazard_at_Baku_before_2019_UEFA_Europe_League_Final.jpg/220px-Eden_Hazard_at_Baku_before_2019_UEFA_Europe_League_Final.jpg"},
      {"id":2,"nombre":"Gonzalo García","Altura":"1.82","Peso":"74kg","Url":"https://img.a.transfermarkt.technology/portrait/header/935230-1701294395.jpg?lm=1"},
      {"id":3,"nombre":"Karim Benzema","Altura":"1.85","Peso":"81kg","Url":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Karim_Benzema_wearing_Real_Madrid_home_kit_2021-2022.jpg/488px-Karim_Benzema_wearing_Real_Madrid_home_kit_2021-2022.jpg"},
    ]},
    {"id":2,
    "nombre":"Barcelona",
    "plantilla":[
      {"id":1,"nombre":"Marc-André ter Stegen","Altura":"1.75","Peso":"74kg", "Url":"https://www.directvsports.com/__export/1702038985462/sites/dsports/img/2023/12/08/20231208_093624013_38kv3puida1r1e2abncyc8duh.jpg_1301049368.jpg"},
      {"id":2,"nombre":"Iñigo Martinez","Altura":"1.82","Peso":"74kg", "Url":"https://pbs.twimg.com/profile_images/1676673383688294407/ZCG2fM-H_400x400.jpg"},
      {"id":3,"nombre":"Gavi","Altura":"1.85","Peso":"81kg", "Url":"https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/GAVI-min.jpg"},
    ]},
    {"id": 3,
      "nombre": "Atlético de Madrid",
      "plantilla": [
          {"id": 1, "nombre": "Jan Oblak", "Altura": "1.88", "Peso": "87kg", "Url": "https://img.a.transfermarkt.technology/portrait/big/121483-1698851834.jpg?lm=1"},
          {"id": 2, "nombre": "Koke", "Altura": "1.76", "Peso": "73kg", "Url": "https://s.hs-data.com/bilder/spieler/gross/154352.jpg"},
          {"id": 3, "nombre": "Luis Suárez", "Altura": "1.82", "Peso": "86kg", "Url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Luis_Su%C3%A1rez_2018.jpg/220px-Luis_Su%C3%A1rez_2018.jpg"}
      ]}
  ];

  return(
    <main className={styles.main}>
      <div>
        <h1>Mi Aplicación de Fútbol</h1>
        <Equipos equipos={equiposData}/>
      </div>
    </main>
  );
}
