export default class RikoList<T> {
  private arr: T[]

  constructor(...args: T[]) {
    this.arr = [...args]
    return this
  }

  /** Clears the list entirely and returns a object of the class */

  clear(): this {
    this.arr = []
    return this
  }

  /** Returns a item searched by index */

  get(index: number): T {
    return this.arr[index]
  }

  /** Returns the list */

  getItems(): T[] {
    return this.arr
  }

  /** Returns the first item of the list */

  head(): T {
    return this.arr[0]
  }

  /** Returns the index of the list */

  indexOf(item: T): number {
    return this.arr.indexOf(item)
  }

  /** Inserts an item in the index passed */

  insertAt(index: number, item: T): this {
    this.arr = [...this.arr.slice(0, index), item, ...this.arr.slice(index)]
    return this
  }

  /** Deletes the last item */

  pop(): this {
    this.arr = [...this.arr.slice(0, -1)]
    return this
  }

  /** Pushes a new item into the list */

  push(item: T): this {
    this.arr = [...this.arr, item]
    return this
  }

  /** Removes an item by index */

  removeAt(index: number): this {
    this.arr = [...this.arr.slice(0, index), ...this.arr.slice(index + 1)]
    return this
  }

  /** Add several items to the list */

  setItems(...args: T[]): this {
    this.arr = [...this.arr, ...args]
    return this
  }

  /** Gets the last item of the list */

  tail(): T {
    return this.arr[this.arr.length - 1]
  }
}
