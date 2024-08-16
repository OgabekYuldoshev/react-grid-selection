import React, { useCallback, useState } from "react";
import clsx from 'clsx';

import "./style.css"

export interface ReactGridSelectionProps {
  hasFooter?: boolean;
  grid: [number, number],
  onSelected?(value: [number, number]): void
  onChange?(value: [number, number]): void

}

const ReactGridSelection: React.FC<ReactGridSelectionProps> = ({
  hasFooter = false,
  grid = [5, 5],
  onSelected,
  onChange
}) => {
  const [initalGrid] = useState<[number, number]>(grid);
  const [selection, setSelection] = useState<[number, number]>([1, 1])

  const handleEnter = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const element = event.currentTarget
    const row = +element.getAttribute("data-grid-row") + 1
    const cell = +element.getAttribute("data-grid-cell") + 1
    onChange && onChange([row, cell])
    setSelection([row, cell])
  }, [initalGrid])

  return (
    <div className="react-grid-selection">
      <div className="react-grid-selection-wrapper">
        {[...Array(initalGrid[0]).keys()].map((rowIndex) =>
        (
          <div key={rowIndex} className="react-grid-selection-row">
            {[...Array(initalGrid[1]).keys()].map((cellIndex) => {
              return (
                <div
                  className="react-grid-selection-cell-wrapper"
                  key={cellIndex}
                  data-grid-row={rowIndex}
                  data-grid-cell={cellIndex}
                  onMouseEnter={handleEnter}
                  onClick={() => onSelected && onSelected(selection)}>
                  <div
                    className={clsx(
                      "react-grid-selection-cell",
                      (selection[0] > rowIndex && selection[1] > cellIndex) && "react-grid-selection-cell-selected"
                    )}

                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {
        hasFooter && (
          <div className="react-grid-selection-footer">
            <span>{selection[0]}x{selection[1]}</span>
          </div>
        )
      }

    </div>
  );
};

export default ReactGridSelection;
