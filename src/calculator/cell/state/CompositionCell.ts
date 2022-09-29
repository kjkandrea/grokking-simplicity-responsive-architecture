import {ValueCell} from './ValueCell';
import {ValueType} from './Cell';

export class CompositionCell {
  private myCell: ValueCell;

  constructor(
    upstreamCells: ValueCell[],
    modifier: (value: ValueType[]) => ValueType
  ) {
    const getValues = (upstreamCells: ValueCell[]) =>
      upstreamCells.map(upstreamCell => upstreamCell.val());
    this.myCell = new ValueCell(modifier(getValues(upstreamCells)));
    upstreamCells.forEach(upstreamCell =>
      upstreamCell.addWatcher(() =>
        this.myCell.update(() => modifier(getValues(upstreamCells)))
      )
    );
  }

  public val() {
    return this.myCell.val();
  }

  public addWatcher(watcher) {
    return this.myCell.addWatcher(watcher);
  }
}
