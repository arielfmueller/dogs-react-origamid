import React from "react";
import Head from "../Helper/Head";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";
import useFetch from "../../Hooks/useFetch";
import { STATS_GET } from "../../api";
const UserStatsGraphs = React.lazy(() => import("./UserStatsGraphs"));

const UserStats = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const token = window.localStorage.getItem("token");
      const { url, options } = STATS_GET(token);
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data && data.length === 0) return <p>Sem dados para mostrar ainda.</p>
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Statistics" />
        <UserStatsGraphs data={data}/>
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
