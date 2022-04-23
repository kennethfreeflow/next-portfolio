import type { NextPage } from "next";
import Layout from "../layouts/Layout";
import searchClient from "../lib/algolia";
import { InstantSearch } from "react-instantsearch-hooks";
import { POSTS } from "../constants/indices";
import AlgoliaSearchBox from "../components/AlgoliaSearchBox";
import AlgoliaHits from "../components/AlgoliaHits";
import AlgoliaPostHit from "../components/AlgoliaPostHit";

const Home: NextPage = () => {
  return (
    <Layout>
      <InstantSearch searchClient={searchClient} indexName={POSTS}>
        <AlgoliaSearchBox />
        <AlgoliaHits hitComponent={AlgoliaPostHit} />
      </InstantSearch>
    </Layout>
  );
};

export default Home;
