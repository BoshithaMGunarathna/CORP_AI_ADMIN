import React from "react";

function CountCard({ data }) {
  // const data = [
  //   { value: 10, name: "Today Invoice Count" },
  //   { value: 4, name: "Dealer Count" },
  //   { value: 5, name: "Supplier Count" },
  //   { value: 15, name: "Today Invoice Count" },
  // ];
  return (
    <div className="w-full">
      <div className="card-grid gap-3">
        {data?.map((card, index) => (
          <Card key={index} value={card.value} name={card.name} />
        ))}
      </div>
    </div>
  );
}

const Card = ({ name, value }) => {
  return (
    <div className="card rounded-none">
      <div className="container1">
        <h2>
          <b>{value}</b>
        </h2>
        <div className="title">{name}</div>
      </div>
    </div>
  );
};

export default CountCard;
