import React, { useCallback, useEffect, useState } from "react";
import clsx from "clsx";

import "./style.css";

export interface ReactGridSelectionProps {
  hasFooter?: boolean;
  grid: [number, number];
  maxGrid?: [number, number];
  onSelected?(value: [number, number]): void;
  onChange?(value: [number, number]): void;
}

const ReactGridSelection: React.FC<ReactGridSelectionProps> = ({
  hasFooter = false,
  grid = [5, 5],
  maxGrid,
  onSelected,
  onChange,
}) => {
  const [initalGrid, setInitialGrid] = useState<[number, number]>(grid);
  const [selection, setSelection] = useState<[number, number]>([1, 1]);

  useEffect(() => {
    if (maxGrid) {
      const sRow = selection[0];
      const sCell = selection[1];

      let iRow = initalGrid[0];
      let iCell = initalGrid[1];

      if (sRow > iRow - 1 && iRow < maxGrid[0]) {
        setInitialGrid([++iRow, iCell]);
      } else if (sRow < iRow - 1 && iRow > grid[0]) {
        setInitialGrid([--iRow, iCell]);
      }

      if (sCell > iCell - 1 && sCell < maxGrid[1]) {
        setInitialGrid([iRow, ++iCell]);
      } else if (sCell < iCell - 1 && iCell > grid[1]) {
        setInitialGrid([iRow, --iCell]);
      }
    }
  }, [selection, maxGrid]);

  const handleEnter = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const element = event.currentTarget;
      const row = +element.getAttribute("data-grid-row") + 1;
      const cell = +element.getAttribute("data-grid-cell") + 1;
      onChange && onChange([row, cell]);
      setSelection([row, cell]);
    },
    [initalGrid]
  );

  return (
    <div className="react-grid-selection">
      <div className="react-grid-selection-wrapper">
        {[...Array(initalGrid[0]).keys()].map((rowIndex) => (
          <div key={rowIndex} className="react-grid-selection-row">
            {[...Array(initalGrid[1]).keys()].map((cellIndex) => {
              return (
                <div
                  className="react-grid-selection-cell-wrapper"
                  key={cellIndex}
                  data-grid-row={rowIndex}
                  data-grid-cell={cellIndex}
                  onMouseEnter={handleEnter}
                  onClick={() => onSelected && onSelected(selection)}
                >
                  <div
                    className={clsx(
                      "react-grid-selection-cell",
                      selection[0] > rowIndex &&
                        selection[1] > cellIndex &&
                        "react-grid-selection-cell-selected"
                    )}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {hasFooter && (
        <div className="react-grid-selection-footer">
          <span>
            {selection[0]}x{selection[1]}
          </span>
        </div>
      )}
    </div>
  );
};

export default ReactGridSelection;
