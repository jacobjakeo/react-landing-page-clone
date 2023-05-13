import styles from './App.module.scss';
import designmaestro from './designmaestro.png';
import logo from './logo-dm.svg';

export default function App() {
  return (
    <>
      <header>
        <div>
          <nav className={styles.navbarContainer}>
            <div className={styles.navbarLogo}>
              <img className={styles.navbarLogo} alt="logo" src={logo} />
            </div>
            <ul className={styles.navbarLinks}>
              <li>
                <a href="/#">Features</a>
              </li>
              <li>
                <a href="/#">Macros</a>
              </li>
              <li>
                <a href="/#">FAQ</a>
              </li>
            </ul>
            <div className={styles.navbarButton}>
              <button className={styles.buttons}>Get Design Maestro</button>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <section>
          <div className={styles.introPage}>
            <h1>
              Boost your design
              <br />
              productivity
            </h1>
            <div className={styles.introPageText}>
              <p>
                Design Maestro is a <b>free</b> extension for Keyboard Maestro
                app. It lets you
                <br />
                automate tasks that you repeat hundreds of times each day.
              </p>
            </div>
            <div className={styles.introPageButton}>
              <button className={styles.buttons}>Get Design Maestro</button>
            </div>
            <div className={styles.introPageImage}>
              <img src={designmaestro} alt="designmaestro" />
            </div>
          </div>
        </section>
        <section>
          <div className={styles.featuresPage}>
            <h3>Don't repeat yourself</h3>
            <p>
              Each day, you waste time on repetitive tasks: navigating, typing,
              searching,
              <br /> copying. "But it takes just 10 seconds" you'd say. Just
              multiply this by hundreds of <br /> times and you have hours
              wasted during a month! But here's the good news: it <br /> doesn't
              have to look like this.
            </p>
          </div>
          <div className={styles.featuresPageGrid}>
            <div className={styles.featuresPageGridItem1}>
              <h4>Shortcut to a better productivity</h4>
              <p>
                Access all macros from the Design Maestro launcher with <br />
                <b>⌘⇧D</b> or press an assigned keyboard shortcut to execute a{' '}
                <br />
                specific action immediately.
              </p>
            </div>
            <div className={styles.featuresPageGridItem2}>
              <h4>Rich collection of handy macros</h4>
              <p>
                Design Maestro was built for designers by designers. We have{' '}
                <br />
                analyzed our work and created macros that let you skip <br />
                repetitive and tiresome tasks.
              </p>
            </div>
            <div className={styles.featuresPageGridItem3}>
              <h4>Easy setup</h4>
              <p>
                We have created a simple onboarding experience where you can{' '}
                <br />
                set up everything yourself. Additionally, we provide tutorials
                to <br />
                guide you step by step!
              </p>
            </div>
            <div className={styles.featuresPageGridItem4}>
              <h4>Lightweight, secure and fast</h4>
              <p>
                The Design Maestro extension weighs less than 1 MB and <br />
                works really fast. It is also completely secure because all{' '}
                <br />
                your data is kept in your local storage.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
