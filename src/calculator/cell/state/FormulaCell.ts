import {ValueCell} from './ValueCell';
import {Modifier} from './Cell';

export class FormulaCell {
  private myCell: ValueCell;

  constructor(upstreamCell: ValueCell, modifier: Modifier) {
    this.myCell = new ValueCell(modifier(upstreamCell.val()));
    upstreamCell.addWatcher(newUpstreamValue =>
      this.myCell.update(() => modifier(newUpstreamValue))
    );
  }

  public val() {
    return this.myCell.val();
  }

  public addWatcher(watcher) {
    return this.myCell.addWatcher(watcher);
  }
}
