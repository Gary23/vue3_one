// 定义接口
export interface personInter {
  id: string,
  name: string,
  age: number
}
// 自定义类型 persons, 是一个数组，数组里面的元素是 personInter 类型
export type persons = Array<personInter>