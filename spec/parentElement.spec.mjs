import {parentElement} from "../index.mjs"

const element1 = {
  dataSet: {
    class: "element1"
  }
}
const element2 = {
  dataSet: {
    class: "element2"
  },
  parentNode: element1
}
const element3 = {parentNode: element2}
const element4 = {parentNode: element3}

describe("parentElement", () => {
  it("returns a nested element", () => {
    const result = parentElement({element: element4, callback: ({element}) => element.dataSet?.class == "element2"})

    expect(result).toEqual(element2)
  })

  it("returns a directly nested element", () => {
    const result = parentElement({element: element3, callback: ({element}) => element.dataSet?.class == "element2"})

    expect(result).toEqual(element2)
  })
})
