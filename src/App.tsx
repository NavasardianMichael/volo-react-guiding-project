import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import styles from './app.module.css';
import { router } from 'routes/router';

export const App: FC = () => {
  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
