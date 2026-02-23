import Header from './components/Header';
import Filters from './components/Filters';
import Results from './components/Results';
import Details from './components/Details';

export default function App()
{
  return (
    <>
      <Header />

     <div
      style={{
        display: 'flex',
        border: '1px solid black'
      }}
    >
        <Filters />
        <Results />
        <Details />

      </div>
    </>
  );
}