export type ValueType = string | number;
type Watcher<ValueType> = (value: ValueType) => void;

export class ValueCell {
  private currentValue: ValueType;
  private watchers: Watcher<ValueType>[] = [];

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

  public addWatcher(watcher: Watcher<ValueType>) {
    this.watchers.push(watcher);
  }
}
