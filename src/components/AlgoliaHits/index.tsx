import { useHits } from "react-instantsearch-hooks";

export default function AlgoliaHits({ hitComponent }: { hitComponent: any }) {
  const { hits } = useHits();
  const Hit = hitComponent;

  return (
    <div className="ais-Hits">
      <ol className="ais-Hits-list">
        {hits.map((hit) => (
          <li key={hit.objectID} className="ais-Hits-item">
            <Hit hit={hit} />
          </li>
        ))}
      </ol>
    </div>
  );
}
