import {ValueCell, ValueType, Watcher} from './ValueCell';

export class FormulaCell {
  private myCell: ValueCell;

  constructor(upstreamCell: ValueCell, fn: (value: ValueType) => ValueType) {
    this.myCell = new ValueCell(fn(upstreamCell.val()));
    upstreamCell.addWatcher(newUpstreamValue =>
      this.myCell.update(() => fn(newUpstreamValue))
    );
  }

  public val() {
    return this.myCell.val();
  }

  public addWatcher(watcher: Watcher) {
    return this.myCell.addWatcher(watcher);
  }
}
