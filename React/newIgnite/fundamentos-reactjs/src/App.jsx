import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';
import './global.css';

export default function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius asperiores reiciendis
            quam explicabo. Vel corrupti, consequuntur maxime velit, illum voluptatibus est deserunt
            assumenda, culpa accusamus ex esse quasi necessitatibus maiores?
          </Post>
        </main>
      </div>
    </div>
  );
}
