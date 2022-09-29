export type ValueType = string | number;
export type Watcher = (value: ValueType) => void;
export type Modifier = (oldValue: ValueType) => ValueType;

export abstract class Cell {
  abstract val: () => ValueType;
  abstract addWatcher: (watcher: Watcher) => void;
}
