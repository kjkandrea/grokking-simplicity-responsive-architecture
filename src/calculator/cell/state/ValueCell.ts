export type ValueType = string;
type Watcher<T> = (value: T) => void;

export class ValueCell<T extends ValueType = ValueType> {
  private currentValue: T;
  private watchers: Watcher<T>[] = [];

  constructor(initialValue: T) {
    this.currentValue = initialValue;
  }

  public val() {
    return this.currentValue;
  }

  public update(fn: (oldValue: T) => T) {
    const oldValue = this.currentValue;
    const newValue = fn(oldValue);
    if (oldValue === newValue) return;
    this.currentValue = newValue;
    this.watchers.forEach(watcher => watcher(newValue));
  }

  public addWatcher(watcher: Watcher<T>) {
    this.watchers.push(watcher);
  }
}
