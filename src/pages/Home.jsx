import React from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import NewsCardList from "../components/NewsCardList";
import { getNewsList } from "../api/adaptors";
import { Link } from "react-router-dom";

function Home() {
  const sportNewsEndpoint = getNewsCategoriesEndpoint("sport", 1, 6);
  const musicNewsEndpoint = getNewsCategoriesEndpoint("music", 1, 6);
  let sportData = useFetch(sportNewsEndpoint);
  let musicData = useFetch(musicNewsEndpoint);
  const adaptedSportData = getNewsList(sportData);
  const adaptedMusicData = getNewsList(musicData);

  return (
    <Layout>
      <section className="sport my-5">
        <Container>
          <h1 className="mb-5 pt-3">Sport</h1>
          <NewsCardList newsList={adaptedSportData} />
          <p>
            Vezi toate știrile legate de sport în secțiunea{" "}
            <Link to="/category/sport" className="text-secondary">
              Sport
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="music my-5">
        <Container>
          <h1 className="mb-5 pt-3">Muzică</h1>
          <NewsCardList newsList={adaptedMusicData} />
          <p>
            Vezi toate știrile legate de muzică în secțiunea{" "}
            <Link to="/category/music" className="text-secondary">
              Muzică
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="favorites my-5">
        <Container>
          <h1 className="mb-5 pt-3">Favorite</h1>
          <p>
            Vrei să îți salvezi știrile favorite pentru a le reciti mai încolo?
          </p>
          <p>
            În cadrul fiecărei știri găsești un buton prin care poți adăuga
            știrea la favorite.
          </p>
          <p className="pb-3">
            Vizitează secțiunea{" "}
            <Link to="/favorites" className="text-secondary">
              Favorite
            </Link>{" "}
            pentru a vedea știrile adăugate.
          </p>
        </Container>
      </section>
    </Layout>
  );
}

export default Home;
