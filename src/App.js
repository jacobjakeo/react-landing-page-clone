import styles from './App.module.scss';
// Logo & images imports
import designmaestro from './designmaestro.png';
import dmbanner from './dmbanner.png';
// Icons imports
import lightweighticon from './iconsfolder/lightweighticon.png';
import macrosicon from './iconsfolder/macrosicon.png';
import setupicon from './iconsfolder/setupicon.png';
import shortcuticon from './iconsfolder/shortcuticon.png';
import logo from './logo-dm.svg';

export default function App() {
  return (
    <>
      <header>
        <div>
          {' '}
          {/** Navbar */}
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
          {' '}
          {/** Intro Page */}
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
          {' '}
          {/** Features Page */}
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
            {' '}
            {/** Features Page Grid */}
            <div className={styles.featuresPageGridItem1}>
              {' '}
              {/** Features Page Grid Item 1 */}
              <div className={styles.featuresPageGridItem1}>
                <img
                  src={shortcuticon}
                  alt="shortcuticon"
                  className={styles.featuresPageGridItem1}
                />
              </div>
              <h4>Shortcut to a better productivity</h4>
              <p>
                Access all macros from the Design Maestro launcher with <br />
                <b>⌘⇧D</b> or press an assigned keyboard shortcut to execute a{' '}
                <br />
                specific action immediately.
              </p>
            </div>
            <div className={styles.featuresPageGridItem2}>
              {' '}
              {/** Features Page Grid Item 2 */}
              <div className={styles.featuresPageGridItem2}>
                <img
                  src={macrosicon}
                  alt="macrosicon"
                  className={styles.featuresPageGridItem2}
                />
              </div>
              <h4>Rich collection of handy macros</h4>
              <p>
                Design Maestro was built for designers by designers. We have{' '}
                <br />
                analyzed our work and created macros that let you skip <br />
                repetitive and tiresome tasks.
              </p>
            </div>
            <div className={styles.featuresPageGridItem3}>
              {' '}
              {/** Features Page Grid Item 3 */}
              <div className={styles.featuresPageGridItem3}>
                <img
                  src={setupicon}
                  alt="setupicon"
                  className={styles.featuresPageGridItem3}
                />
              </div>
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
              {' '}
              {/** Features Page Grid Item 4 */}
              <div className={styles.featuresPageGridItem4}>
                <img
                  src={lightweighticon}
                  alt="lightweighticon"
                  className={styles.featuresPageGridItem4}
                />
              </div>
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
        <section>
          {' '}
          {/** Macros Page */}
          <div className={styles.macrosPage}>
            <h3>Macros for busy designers</h3>
            <p>
              Macros are quick actions that you can run with Design Maestro
              launcher.
              <br />
              To launch a macro you just need to choose it from the list or
              activate it <br />
              with an assigned keyboard shortcut.
            </p>
          </div>
          <div className={styles.macrosPageGrid}>
            {' '}
            {/** Macros Page Grid */}
            <div className={styles.macrosPageGridItem1}>
              {' '}
              {/** Macros Page Grid Item 1 */}
              <div className={styles.macrosPageGridContent}>
                <div className={styles.macrosPageGridShortcut}>;lorem</div>
                <div className={styles.macrosPageGridTitle}>
                  Lorem Ipsum Generator
                </div>
                <div className={styles.macrosPageGridDesc}>
                  Quickly type a “Lorem Ipsum” sentence by <br />
                  typing ;lorem.
                  <br />
                  <span className={styles.invisible}>b</span>
                </div>
                <div className={styles.macrosPageGridButton}>
                  <div className={styles.mPGWrapper}>
                    <div className={styles.mPGText}>Video Preview</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.macrosPageGridItem2}>
              {' '}
              {/** Macros Page Grid Item 2 */}
              <div className={styles.macrosPageGridContent}>
                <div className={styles.macrosPageGridShortcut}>⌃⌘⌥⇧O</div>
                <div className={styles.macrosPageGridTitle}>
                  Optimize Selected Images
                </div>
                <div className={styles.macrosPageGridDesc}>
                  Optimize selected images directly in Finder <br />
                  with tinyPNG API. <br />
                  <span className={styles.invisible}>b</span>
                </div>
                <div className={styles.macrosPageGridButton}>
                  <div className={styles.mPGWrapper}>
                    <div className={styles.mPGText}>Video Preview</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.macrosPageGridItem3}>
              {' '}
              {/** Macros Page Grid Item 3 */}
              <div className={styles.macrosPageGridContent}>
                <div className={styles.macrosPageGridShortcut}>⌃⌘⌥⇧D</div>
                <div className={styles.macrosPageGridTitle}>
                  Remove Background Images
                </div>
                <div className={styles.macrosPageGridDesc}>
                  Remove a background from selected <br />
                  images in Finder with removebg API. <br />
                  <span className={styles.invisible}>b</span>
                </div>
                <div className={styles.macrosPageGridButton}>
                  <div className={styles.mPGWrapper}>
                    <div className={styles.mPGText}>Video Preview</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.macrosPageGridItem4}>
              {' '}
              {/** Macros Page Grid Item 4 */}
              <div className={styles.macrosPageGridContent}>
                <div className={styles.macrosPageGridShortcut}>⌃⌘⌥⇧Z</div>
                <div className={styles.macrosPageGridTitle}>Color Picker</div>
                <div className={styles.macrosPageGridDesc}>
                  Copy a HEX value of a color of a pixel <br />
                  beneath a mouse cursor.
                  <br />
                  <span className={styles.invisible}>b</span>
                </div>
                <div className={styles.macrosPageGridButton}>
                  <div className={styles.mPGWrapper}>
                    <div className={styles.mPGText}>Video Preview</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.macrosPageGridItem5}>
              {' '}
              {/** Macros Page Grid Item 5 */}
              <div className={styles.macrosPageGridContent}>
                <div className={styles.macrosPageGridShortcut}>⌃⌘⌥⇧5</div>
                <div className={styles.macrosPageGridTitle}>
                  OCR Selected Area
                </div>
                <div className={styles.macrosPageGridDesc}>
                  Copy text from a selected area of a screen.
                  <br />
                  <span className={styles.invisible}>b</span>
                  <br />
                  <span className={styles.invisible}>b</span>
                </div>
                <div className={styles.macrosPageGridButton}>
                  <div className={styles.mPGWrapper}>
                    <div className={styles.mPGText}>Video Preview</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.macrosPageGridItem6}>
              {' '}
              {/** Macros Page Grid Item 6 */}
              <div className={styles.macrosPageGridContent}>
                <div className={styles.macrosPageGridShortcut}>⌃⌘⌥⇧A</div>
                <div className={styles.macrosPageGridTitle}>
                  Pick Brand Asset
                </div>
                <div className={styles.macrosPageGridDesc}>
                  Save an image URL that you can use later <br />
                  on. An image will be copied directly to your <br />
                  Clipboard.
                </div>
                <div className={styles.macrosPageGridButton}>
                  <div className={styles.mPGWrapper}>
                    <div className={styles.mPGText}>Video Preview</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.macrosPageGridItem7}>
              {' '}
              {/** Macros Page Grid Item 7 */}
              <div className={styles.macrosPageGridContent}>
                <div className={styles.macrosPageGridShortcut}>⌃⌘⌥⇧B</div>
                <div className={styles.macrosPageGridTitle}>
                  Pick Brand Color
                </div>
                <div className={styles.macrosPageGridDesc}>
                  Save a HEX value you can use later on. A <br />
                  color code will be copied directly to your <br />
                  Clipboard.
                </div>
                <div className={styles.macrosPageGridButton}>
                  <div className={styles.mPGWrapper}>
                    <div className={styles.mPGText}>Video Preview</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.macrosPageGridItem8}>
              {' '}
              {/** Macros Page Grid Item 8 */}
              <div className={styles.macrosPageGridContent}>
                <div className={styles.macrosPageGridShortcut}>;st</div>
                <div className={styles.macrosPageGridTitle}>
                  Open Starter URLs
                </div>
                <div className={styles.macrosPageGridDesc}>
                  Save a set of URLs you can launch with <br />
                  "Open Starter URLs" action. <br />
                  <span className={styles.invisible}>b</span>
                </div>
                <div className={styles.macrosPageGridButton}>
                  <div className={styles.mPGWrapper}>
                    <div className={styles.mPGText}>Video Preview</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.macrosPageGridItem9}>
              {' '}
              {/** Macros Page Grid Item 9 */}
              <div className={styles.macrosPageGridContent}>
                <div className={styles.macrosPageGridShortcut}>;nn</div>
                <div className={styles.macrosPageGridTitle}>
                  Quick Notion Note
                </div>
                <div className={styles.macrosPageGridDesc}>
                  Quickly open a previously saved "draft" <br />
                  note in Notion. <br />
                  <span className={styles.invisible}>b</span>
                </div>
                <div className={styles.macrosPageGridButton}>
                  <div className={styles.mPGWrapper}>
                    <div className={styles.mPGText}>Video Preview</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.macrosPageGridItem10}>
              {' '}
              {/** Macros Page Grid Item 10 */}
              <div className={styles.macrosPageGridContent}>
                <div className={styles.macrosPageGridShortcut}>;qs</div>
                <div className={styles.macrosPageGridTitle}>
                  Add Quick Text Snippet
                </div>
                <div className={styles.macrosPageGridDesc}>
                  Add a quick text snipped which will be saved in a Design
                  Maestro Snippets macro group. You can later use these
                  snippets.
                </div>
                <div className={styles.macrosPageGridButton}>
                  <div className={styles.mPGWrapper}>
                    <div className={styles.mPGText}>Video Preview</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.macrosPageGridItem11}>
              {' '}
              {/** Macros Page Grid Item 11 */}
              <div className={styles.macrosPageGridContent}>
                <div className={styles.macrosPageGridShortcut}>;fn</div>
                <div className={styles.macrosPageGridTitle}>
                  New Figma Project
                </div>
                <div className={styles.macrosPageGridDesc}>
                  Quickly start a new Figma project (in a browser).
                  <span className={styles.invisible}>b</span>
                  <br />
                  <span className={styles.invisible}>b</span>
                </div>
                <div className={styles.macrosPageGridButton}>
                  <div className={styles.mPGWrapper}>
                    <div className={styles.mPGText}>Video Preview</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.macrosPageGridItem12}>
              {' '}
              {/** Macros Page Grid Item 12 */}
              <div className={styles.macrosPageGridContent}>
                <div className={styles.macrosPageGridShortcut}>;wd</div>
                <div className={styles.macrosPageGridTitle}>
                  Open Webflow Dashboard
                </div>
                <div className={styles.macrosPageGridDesc}>
                  Quickly open a Webflow dashboard. <br />
                  <span className={styles.invisible}>b</span>
                  <br />
                  <span className={styles.invisible}>b</span>
                </div>
                <div className={styles.macrosPageGridButton}>
                  <div className={styles.mPGWrapper}>
                    <div className={styles.mPGText}>Video Preview</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.macrosPageGridItem13}>
              {' '}
              {/** Macros Page Grid Item 13 */}
              <div className={styles.macrosPageGridContent}>
                <div className={styles.macrosPageGridShortcut}>⌃⌘⌥⇧T</div>
                <div className={styles.macrosPageGridTitle}>
                  Translate with Deepl
                </div>
                <div className={styles.macrosPageGridDesc}>
                  Translate a text with deepl.com/translator <br />
                  (by default it will translate your clipboard <br />
                  content.)
                </div>
                <div className={styles.macrosPageGridButton}>
                  <div className={styles.mPGWrapper}>
                    <div className={styles.mPGText}>Video Preview</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.macrosPageGridItem14}>
              {' '}
              {/** Macros Page Grid Item 14 */}
              <div className={styles.macrosPageGridContent}>
                <div className={styles.macrosPageGridShortcut}>⌃⌘⌥⇧G</div>
                <div className={styles.macrosPageGridTitle}>
                  Search in Google
                </div>
                <div className={styles.macrosPageGridDesc}>
                  Search a phrase in Google (by default it <br />
                  search for a phrase from your clipboard). <br />
                  <span className={styles.invisible}>b</span>
                </div>
                <div className={styles.macrosPageGridButton}>
                  <div className={styles.mPGWrapper}>
                    <div className={styles.mPGText}>Video Preview</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.macrosPageGridItem15}>
              {' '}
              {/** Macros Page Grid Item 15 */}
              <div className={styles.macrosPageGridContent}>
                <div className={styles.macrosPageGridShortcut}>;nemail</div>
                <div className={styles.macrosPageGridTitle}>
                  New Gmail Message
                </div>
                <div className={styles.macrosPageGridDesc}>
                  Quickly create a new Gmail message.
                  <br />
                  <span className={styles.invisible}>b</span>
                  <br />
                  <span className={styles.invisible}>b</span>
                </div>
                <div className={styles.macrosPageGridButton}>
                  <div className={styles.mPGWrapper}>
                    <div className={styles.mPGText}>Video Preview</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          {' '}
          {/** Instructions Page */}
          <div className={styles.instructionsPage}>
            <h3>How does it work?</h3>
            <p>
              Macros are quick actions that you can run with Design Maestro
              launcher. To launch <br /> a macro you just need to choose it from
              the list or activate it with an assigned <br /> keyboard shortcut.
            </p>
          </div>
          <div className={styles.instructionsPageGrid}>
            {' '}
            {/** Instructions Page Grid */}
            <div className={styles.instructionsPageGridItem1}>
              {' '}
              {/** Instructions Page Grid Item 1 */}
              <div className={styles.number}>1</div>
              <h3 className={styles.instructionsPageGridTitle}>
                Install Keyboard Maestro
              </h3>
              <p className={styles.instructionsPageGridDesc}>
                Design Maestro is an extension for the <br />
                Keyboard Maestro app. First, you need to <br />
                install it on your Mac.
              </p>
            </div>
            <div className={styles.instructionsPageGridItem2}>
              {' '}
              {/** Instructions Page Grid Item 2 */}
              <div className={styles.number}>2</div>
              <h3 className={styles.instructionsPageGridTitle}>
                Install Design Maestro
              </h3>
              <p className={styles.instructionsPageGridDesc}>
                Download the Design Maestro extension <br />
                from our website and install it by double- <br />
                clicking on the file.
              </p>
            </div>
            <div className={styles.instructionsPageGridItem3}>
              {' '}
              {/** Instructions Page Grid Item 3 */}
              <div className={styles.number}>3</div>
              <h3 className={styles.instructionsPageGridTitle}>
                Start using the macros
              </h3>
              <p className={styles.instructionsPageGridDesc}>
                Launch the Design Maestro with <b>⌘⇧D</b> <br />
                and choose the macro you want to <br />
                activate.
              </p>
            </div>
          </div>
          <div className={styles.instructionsPageImg}>
            <div className={styles.instructionsPageImgWrapper}>
              <img src={dmbanner} alt="Design Maestro Banner" />
            </div>
          </div>
          <h1 className={styles.FAQHeading}>Frequently Asked Questions</h1>
          <div className={styles.parent}>
            <div className={styles.div1}>
              <div className={styles.FAQContent}>
                <div className={styles.FAQTitle}>What is Design Maestro?</div>
                <div className={styles.FAQDesc}>
                  Design Maestro is a FREE package of macros that you can use in
                  the Keyboard Maestro app for macOS. Wonder how Design Maestro
                  automations can help you? Read this article.
                </div>
              </div>
            </div>
            <div className={styles.div2}>
              <div className={styles.FAQContent}>
                <div className={styles.FAQTitle}>
                  I have an idea for automation! Where do I submit it?
                </div>
                <div className={styles.FAQDesc}>
                  If you have an idea for automation that we could implement in
                  the next versions of Design Maestro let us know in this form.
                  We’ll review it and if it will find it useful we will
                  implement it!
                </div>
              </div>
            </div>
            <div className={styles.div3}>
              <div className={styles.FAQContent}>
                <div className={styles.FAQTitle}>How do I contact you?</div>
                <div className={styles.FAQDesc}>
                  You can reach out to us via email at hello@designmaestro.io.
                </div>
              </div>
            </div>
            <div className={styles.div4}>
              <div className={styles.FAQContent}>
                <div className={styles.FAQTitle}>
                  I want to support this project. How can I do that?
                </div>
                <div className={styles.FAQDesc}>
                  Enjoying Design Maestro? We are super happy! Rate us 5{' '}
                  <span role="img" aria-label="Star">
                    ⭐️
                  </span>{' '}
                  on Gumroad. Share a link to our website with your friends.
                  Donate on Gumroad by entering your amount in the Name a fair
                  price input.
                </div>
              </div>
            </div>
            <div className={styles.div5}>
              <div className={styles.FAQContent}>
                <div className={styles.FAQTitle}>What is Keyboard Maestro?</div>
                <div className={styles.FAQDesc}>
                  Keyboard Maestro is an automation software for macOS where you
                  can automate virtually anything. Applications or websites,
                  text or images, simple or complex, on command or scheduled. If
                  you can perform it manually, Keyboard Maestro can almost
                  certainly automate it for you. Whether it is typing your email
                  address, going to Gmail or Twitter, launching Pages, or
                  duplicating a line, Keyboard Maestro can help.
                </div>
              </div>
            </div>
            <div className={styles.div6}>
              <div className={styles.FAQContent}>
                <div className={styles.FAQTitle}>
                  Can I use Keyboard Maestro for Windows or Linux?
                </div>
                <div className={styles.FAQDesc}>
                  No. Keyboard Maestro is only available for macOS.
                </div>
              </div>
            </div>
            <div className={styles.div7}>
              <div className={styles.FAQContent}>
                <div className={styles.FAQTitle}>
                  Is Keyboard Maestro a free app?
                </div>
                <div className={styles.FAQDesc}>
                  Keyboard Maestro is a paid app but there is a long free trial.
                  What is more, we also provide a special discount for Keyboard
                  Maestro that you can use: With coupon: DESIGNMAESTRO you’ll
                  get a 20% discount. By the way, we don't get any cut from your
                  purchase. We just managed to get a friendly discount from
                  Keyboard Maestro founder.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            SystemFlow Made in Webflow by Matt Wierzbicki and Adam Gospodarczyk
            <br />
            Copyright © 2023 Design Maestro
          </div>
        </section>
      </main>
    </>
  );
}
