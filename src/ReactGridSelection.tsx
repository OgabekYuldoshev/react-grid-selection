import React, { useState } from "react";

const ReactGridSelection = () => {
  const [grid] = useState<[number, number]>([10, 10]);

  console.log([...Array(grid[0]).keys()]);

  return (
    <div>
      <div>
        {[...Array(grid[0]).keys()].map((rowIndex) => {
          return [...Array(grid[1]).keys()].map((colIndex) => {
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
              >{`(${rowIndex}, ${colIndex})`}</div>
            );
          });
        })}
      </div>
    </div>
  );
};

export default ReactGridSelection;
