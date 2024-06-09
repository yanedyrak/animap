import { Filter } from "./filter/Filter";
export const Filters = () => {
  return (
    <div className="filters">
      Filter
      <Filter
        children="Filter"
        items={[
          {
            label: "First",
            key: "0",
          },
          {
            label: "Second",
            key: "1",
          },
        ]}
      />
    </div>
  );
};
