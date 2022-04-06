import { GetStaticProps } from "next";

export default function Home({ repositories, date }) {
  return (
    <div>
      <h1>Repos:</h1>
      <h3>{date}</h3>
      <ul>
        {repositories.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://api.github.com/users/CaioMartins98/repos");
  const data = await res.json();

  const repoNames = data.map((item) => item.name);

  return {
    props: {
      repositories: repoNames,
      date: new Date().toISOString(),
    },
    revalidate: 60 * 60 * 4, //4 horas
  };
};
