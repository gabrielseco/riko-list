import RikoList from "../src/riko-list"

describe("Riko test", () => {
  it("Riko is instantiable", () => {
    expect(new RikoList<string>()).toBeInstanceOf(RikoList)
  })

  it("should clear the array", () => {
    const riko = new RikoList<string>("1", "2", "3", "4")
    expect(riko.getItems().length).toBe(4)
    expect(riko.clear().getItems().length).toBe(0)
  })

  it("should copy a given array", () => {
    const riko = new RikoList<number>()
    const numbers = [1, 2, 3, 4]

    riko.copy(numbers)

    expect(riko.getItems()).toEqual(numbers)
  })

  it("should work like extensions", () => {
    const riko = new RikoList<string>()
    expect(riko.push("1").insertAt(2, "2").getItems()).toEqual(["1", "2"])
  })

  it("should get a item by index and return undefined", () => {
    const riko = new RikoList<string>()
    expect(riko.get(0)).toBeUndefined()
  })

  it("should get a item by index and return undefined", () => {
    const riko = new RikoList<string>("1", "2", "3")
    expect(riko.get(1)).toBe("2")
  })

  it("should getItems of the array", () => {
    const riko = new RikoList<string>()
    expect(riko.getItems().length).toBe(0)
  })

  it("should return undefined if there are no elements in the array", () => {
    const riko = new RikoList<string>()
    expect(riko.head()).toBeUndefined()
  })

  it("should return the first element of the array", () => {
    const riko = new RikoList<string>("1", "2")
    expect(riko.head()).toBe("1")
  })

  it("should return the index of the arr", () => {
    const riko = new RikoList<string>("1", "2", "3", "4")
    expect(riko.indexOf("1")).toBe(0)
  })

  it("should return -1 if the element is not find in the array", () => {
    const riko = new RikoList<string>("1", "2", "3", "4")
    expect(riko.indexOf("5")).toBe(-1)
  })

  it("should insert an item in the index that I want", () => {
    const riko = new RikoList<string>("1", "2", "3", "4")
    const arr = riko.insertAt(1, "1.5")
    expect(arr.get(1)).toBe("1.5")
  })

  it("should test the length of the array", () => {
    const riko = new RikoList<string>("1", "2", "3", "4")
    const count = riko.length

    expect(count).toBe(4)
  })

  it("should delete the last element of the array", () => {
    const riko = new RikoList<string>("1", "2", "3", "4")
    const arr = riko.pop()
    expect(arr.get(3)).toBeUndefined()
  })

  it("should add an item to the array", () => {
    const riko = new RikoList<string>()
    const item = "first item"
    const arr = riko.push(item)
    expect(arr.get(0)).toBe(item)
  })

  it("should remove an item of the array", () => {
    const riko = new RikoList<string>("1", "2", "3", "4")
    expect(riko.getItems().length).toBe(4)
    expect(riko.removeAt(1).get(1)).toBe("3")
    expect(riko.getItems().length).toBe(3)
  })

  it("should set items only an array type", () => {
    const riko = new RikoList<string>()
    expect(riko.getItems().length).toBe(0)
    expect(riko.setItems(...["1", "2", "3", "4"]).getItems().length).toBe(4)
  })

  it("should return undefined if there are no elements in the array", () => {
    const riko = new RikoList<string>()
    expect(riko.tail()).toBeUndefined()
  })

  it("should return the last element if there are elements in the array", () => {
    const riko = new RikoList<string>("1", "2")
    expect(riko.tail()).toBe("2")
  })
})
