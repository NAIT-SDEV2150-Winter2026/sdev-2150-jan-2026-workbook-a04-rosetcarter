export default function Filters()
{
  return (
    <div
      style={{
        width: '25%',
        border: '1px solid black'
      }}
    >
      <div>Filters</div>

      <input type="text" placeholder="search" />

      <div>
        <button>All</button>
        <button>Academic</button>
        <button>Wellness</button>
        <button>Financial</button>
      </div>

      <div>
        <label>
          <input type="checkbox" />
          Open now
        </label>
      </div>

      <div>
        <label>
          <input type="checkbox" />
          Virtual
        </label>
      </div>
    </div>
  );
}