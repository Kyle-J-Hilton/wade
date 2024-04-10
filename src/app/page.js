import Image from "next/image";
import styles from "../../styles/Home.module.css";
import HomePageCard from "./components/HomePageCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get Your Legal Questions For Free.
        </p>
        <div>
          <a
            href={"https://www.kyle-j-hilton.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            Kyle James Solutions
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h1>
          WADE
        </h1>
      </div>
      <div>
      <p>
        Ask A Lawer
        </p>
      </div>

      <div className={styles.grid}>

      <HomePageCard 
        href={"/"} 
        cardName="Ask us anything!" 
        message="Get free advice from real lawers before you 
                  decide to hire one." 
      />
      <HomePageCard 
        href={"/"} 
        cardName=" Time to hire a lawer?" 
        message="If its time to hire a lawer we can connect you
            with the best one for whatever type of case you need 
            handled." 
      />
      <HomePageCard 
        href={"https://www.kyle-j-hilton.com/"} 
        cardName="Reviews" 
        message="Hear real stories from people just like 
                you who we've helped." 
      />
      <HomePageCard 
        href={"https://www.kyle-j-hilton.com/websites"} 
        cardName="Austin Wade's Story" 
        message="Learn about our founding lawer and his mission to 
                provide legal help to anyone regaurdless of their 
                financial situation." 
      />
      </div>
    </main>
  );
}
