import {Cell, ValueType, Watcher} from './Cell';

export class ValueCell implements Cell {
  private currentValue: ValueType;
  private watchers: Watcher[] = [];

  constructor(initialValue: ValueType) {
    this.currentValue = initialValue;
  }

  public val() {
    return this.currentValue;
  }

  public update(fn: (oldValue: ValueType) => ValueType) {
    const oldValue = this.currentValue;
    const newValue = fn(oldValue);
    if (oldValue === newValue) return;
    this.currentValue = newValue;
    this.watchers.forEach(watcher => watcher(newValue));
  }

  public addWatcher(watcher) {
    this.watchers.push(watcher);
  }
}
