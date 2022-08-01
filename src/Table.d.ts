type Cell<T> = {
  data: T,
  index: number
}

type Column<T> = {
  name: keyof T
  label: string
  customRender: (data: Cell<T>) => JSX.Element
}

type Table<T> = {
  data: T[],
  columns: Column<T>[]
}
