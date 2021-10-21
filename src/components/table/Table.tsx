import React from 'react';
import { TBlockPayload } from '../../store/reducers/dataReducer';
import styles from './Table.module.scss';

export const Table: React.FC<{ data: TBlockPayload }> = ({ data }) => {
  const titles = Object.keys(data[0]);

  return (
    <div className={styles.table}>
      <h3 className={styles.table__title}>Tezos blocks</h3>
      <div className={styles.table__head}>
        {titles.map((el) => (
          <div className={styles.table__cell}>{el}</div>
        ))}
      </div>
      <div className={styles.table__body}>
        {data.map((el) => {
          return (
            <div className={styles.table__row}>
              {Object.values(el).map((cell: any) => (
                <div className={styles.table__cell}>{cell} </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};
