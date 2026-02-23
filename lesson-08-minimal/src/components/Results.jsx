// Results.jsx
import ResultsItem from './ResultsItem';
import { resources } from '../data/resources';

export default function Results()
{
  return (
    <div
      style={{
        width: '45%',
        border: '1px solid black'
      }}
    >
      <div>Results</div>
      {resources.map((r) => (
        <ResultsItem
          key={r.id}
          title={r.title}
          category={r.category}
          summary={r.summary}
          location={r.location}
        >
          {'I am the child'}
        </ResultsItem>
      ))}
      
      </div>
  );
}