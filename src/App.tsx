import { FC } from 'react';
import { ThemeContextProvider } from 'contexts/theme/Provider';
import { StoreProvider } from 'store/main';
import { Router } from 'routes/RouterProvider';
import styles from './app.module.css';

export const App: FC = () => {
  return (
    <div className={styles.app}>
      <ThemeContextProvider>
        <StoreProvider>
          <Router />
        </StoreProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
