import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img
              className={styles.avatar}
              src="https://github.com/GabrielFernella.png"
              alt="avatar"
            />
            <div className={styles.authorInfo}>
              <strong>Gabriel Fernella</strong>
              <span>Web Developer</span>
            </div>
          </div>

          <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
            Publicado há 1h
          </time>
        </header>

        <div className={styles.content}>
          <p> Lorem, ipsum dolor sit amet consectetur </p>
          <p>
            veritatis incidunt eveniet facere fugiat quisquam, quae optio iste soluta harum, amet
          </p>
          <p>
            <a href="">Jaine.seding </a>
          </p>
          <p>itaque voluptate? Quidem quam consectetur quis voluptate?</p>
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu Feedback</strong>

          <textarea placeholder="Deixe um comentário"></textarea>

          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>
    </>
  );
}
