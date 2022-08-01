import * as React from 'react';
import styles from './sass/Table.module.sass'
import skull from './images/craneo.png'

export const TableData = <T, >({data, columns}: Table<T>) => {

  if (!columns || !data) return <div>No data</div>

  return <div className={styles.table}>
    <img src={skull} />
    {columns.map(item => <div key={String(item.name)}>{item.label}</div>)}
  </div>
};
