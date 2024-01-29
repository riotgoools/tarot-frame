import Head from 'next/head'
import './global.css';
import styles from './styles.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Tarot Frame" />
        <meta property="og:image" content="https://elle-tarot-frame.vercel.app/0.png" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://elle-tarot-frame.vercel.app/0.png" />
        <meta property="fc:frame:button:1" content="Pull Card" />
        <meta property="fc:frame:post_url" content="https://elle-tarot-frame.vercel.app/api/post" />
        
      </Head>
      
      <div className={styles['tarot-container']}>
     <div className={styles['tarot-card']}>
        Single Card Reading<br /><br />1. Focus and Draw:
        Concentrate on your question, shuffle, and draw a single card.<br /><br />
        2. Observe and Relate:
        Note card imagery and keywords, connect them to your question, and trust your instincts.
    </div>
    <div className={styles['tarot-card']}>
      <div className="card-image">
        <img src="cards/0.png" alt="Tarot Card" />
      </div>
      <div className="card-keywords">
        <div>The Fool</div><br />
        <div>Upright:<br /> Beginnings, spontaneity</div><br />
        <div>Reversed:<br /> Recklessness, irresponsibility</div>
      </div>
    </div>  
    <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/1.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>The Magician</div><br />
          <div>Upright:<br /> Manifestation, power</div><br />
          <div>Reversed:<br /> Manipulation, untapped potential</div>
        </div>
      </div>    
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/2.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>The High Priestess</div><br />
          <div>Upright:<br /> Intuition, mystery</div><br />
          <div>Reversed:<br /> Hidden agendas, lack of insight</div>
        </div>
      </div>
      
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/3.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>The Empress</div><br />
          <div>Upright:<br /> Nurturing, abundance</div><br />
          <div>Reversed:<br /> Dependency, neglect</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/4.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>The Emperor</div><br />
          <div>Upright:<br /> Authority, structure</div><br />
          <div>Reversed:<br /> Domineering, lack of control</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/5.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>The Hierophant</div><br />
          <div>Upright:<br /> Tradition, spirituality</div><br />
          <div>Reversed:<br /> Rebellion, nonconformity</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/6.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>The Lovers</div><br />
          <div>Upright:<br /> Connection, choice</div><br />
          <div>Reversed:<br /> Disharmony, indecision</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/7.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>The Chariot</div><br />
          <div>Upright:<br /> Determination, victory</div><br />
          <div>Reversed:<br /> Lack of direction, inner conflict</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/8.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Strength</div><br />
          <div>Upright:<br /> Courage, inner strength</div><br />
          <div>Reversed:<br /> Weakness, self-doubt</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/9.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>The Hermit</div><br />
          <div>Upright:<br /> Solitude, inner guidance</div><br />
          <div>Reversed:<br /> Isolation, withdrawal</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/10.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Wheel of Fortune</div><br />
          <div>Upright:<br /> Destiny, cycles</div><br />
          <div>Reversed:<br /> Setbacks, lack of control</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/11.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Justice</div><br />
          <div>Upright:<br /> Fairness, balance</div><br />
          <div>Reversed:<br /> Injustice, bias</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/12.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>The Hanged Man</div><br />
          <div>Upright:<br /> Surrender, letting go</div><br />
          <div>Reversed:<br /> Resistance, delay</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/13.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Death</div><br />
          <div>Upright:<br /> Transformation, rebirth</div><br />
          <div>Reversed:<br /> Stagnation, fear of change</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/14.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Temperance</div><br />
          <div>Upright:<br /> Balance, harmony</div><br />
          <div>Reversed:<br /> Imbalance, excess</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/15.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>The Devil</div><br />
          <div>Upright:<br /> Temptation, bondage</div><br />
          <div>Reversed:<br /> Release, freedom</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/16.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>The Tower</div><br />
          <div>Upright:<br /> Sudden change, upheaval</div><br />
          <div>Reversed:<br /> Avoidance, delayed disaster</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/17.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>The Star</div><br />
          <div>Upright:<br /> Hope, inspiration</div><br />
          <div>Reversed:<br /> Disillusionment, lack of faith</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/18.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>The Moon</div><br />
          <div>Upright:<br /> Intuition, subconscious</div><br />
          <div>Reversed:<br /> Deception, confusion</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/19.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>The Sun</div><br />
          <div>Upright:<br /> Joy, vitality</div><br />
          <div>Reversed:<br /> Temporary setbacks, lack of clarity</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/20.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Judgment</div><br />
          <div>Upright:<br /> Renewal, reflection</div><br />
          <div>Reversed:<br /> Self-doubt, avoidance of accountability</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/21.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>The World</div><br />
          <div>Upright:<br /> Completion, fulfillment</div><br />
          <div>Reversed:<br /> Unfinished business, lack of closure</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/22.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Ace of Cups</div><br />
          <div>Upright:<br /> Emotional new beginnings, love</div><br />
          <div>Reversed:<br /> Blocked emotions, emptiness</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/23.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Two of Cups</div><br />
          <div>Upright:<br /> Unity, partnership</div><br />
          <div>Reversed:<br /> Disharmony, imbalance</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/24.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Three of Cups</div><br />
          <div>Upright:<br /> Celebration, friendship</div><br />
          <div>Reversed:<br /> Overindulgence, shallow connections</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/25.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Four of Cups</div><br />
          <div>Upright:<br /> Contemplation, introspection</div><br />
          <div>Reversed:<br /> Acceptance, moving forward</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/26.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Five of Cups</div><br />
          <div>Upright:<br /> Loss, grief</div><br />
          <div>Reversed:<br /> Acceptance, moving on</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/27.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Six of Cups</div><br />
          <div>Upright:<br /> Nostalgia, childhood memories</div><br />
          <div>Reversed:<br /> Letting go of the past, moving forward</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/28.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Seven of Cups</div><br />
          <div>Upright:<br /> Choices, fantasies</div><br />
          <div>Reversed:<br /> Clarity, focus</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/29.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Eight of Cups</div><br />
          <div>Upright:<br /> Walking away, seeking something more</div><br />
          <div>Reversed:<br /> Unwillingness to move on, stagnation</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/30.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Nine of Cups</div><br />
          <div>Upright:<br /> Wishes fulfilled, contentment</div><br />
          <div>Reversed:<br /> Complacency, dissatisfaction</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/31.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Ten of Cups</div><br />
          <div>Upright:<br /> Emotional fulfillment, family harmony</div><br />
          <div>Reversed:<br /> Dysfunctional relationships, unfulfilled dreams</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/32.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Page of Cups</div><br />
          <div>Upright:<br /> Emotional sensitivity, creative inspiration</div><br />
          <div>Reversed:<br /> Impracticality, moodiness</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/33.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Knight of Cups</div><br />
          <div>Upright:<br /> Romantic pursuit, emotional idealism</div><br />
          <div>Reversed:<br /> Unrealistic expectations, mood swings</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/34.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Queen of Cups</div><br />
          <div>Upright:<br /> Intuition, compassion</div><br />
          <div>Reversed:<br /> Emotional instability, manipulation</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/35.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>King of Cups</div><br />
          <div>Upright:<br /> Emotional balance, compassion</div><br />
          <div>Reversed:<br /> Emotional manipulation, moodiness</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/36.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Ace of Pentacles</div><br />
          <div>Upright:<br /> Manifestation, prosperity</div><br />
          <div>Reversed:<br /> Financial issues, lack of opportunity</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/37.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Two of Pentacles</div><br />
          <div>Upright:<br /> Balance, adaptability</div><br />
          <div>Reversed:<br /> Imbalance, disorganization</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/38.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Three of Pentacles</div><br />
          <div>Upright:<br /> Collaboration, craftsmanship</div><br />
          <div>Reversed:<br /> Lack of teamwork, poor quality</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/39.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Four of Pentacles</div><br />
          <div>Upright:<br /> Security, possessiveness</div><br />
          <div>Reversed:<br /> Letting go, generosity</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/40.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Five of Pentacles</div><br />
          <div>Upright:<br /> Hardship, poverty</div><br />
          <div>Reversed:<br /> Recovery, assistance</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/41.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Six of Pentacles</div><br />
          <div>Upright:<br /> Generosity, charity</div><br />
          <div>Reversed:<br /> Greed, inequality</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/42.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Seven of Pentacles</div><br />
          <div>Upright:<br /> Assessment, patience</div><br />
          <div>Reversed:<br /> Impatience, lack of progress</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/43.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Eight of Pentacles</div><br />
          <div>Upright:<br /> Diligence, craftsmanship</div><br />
          <div>Reversed:<br /> Lack of focus, mediocrity</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/44.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Nine of Pentacles</div><br />
          <div>Upright:<br /> Independence, self-sufficiency</div><br />
          <div>Reversed:<br /> Dependence, extravagance</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/45.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Ten of Pentacles</div><br />
          <div>Upright:<br /> Wealth, family legacy</div><br />
          <div>Reversed:<br /> Financial issues, family discord</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/46.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Page of Pentacles</div><br />
          <div>Upright:<br /> Manifestation, practicality</div><br />
          <div>Reversed:<br /> Lack of focus, missed opportunities</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/47.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Knight of Pentacles</div><br />
          <div>Upright:<br /> Responsibility, diligence</div><br />
          <div>Reversed:<br /> Laziness, stubbornness</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/48.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Queen of Pentacles</div><br />
          <div>Upright:<br /> Nurturing, practicality</div><br />
          <div>Reversed:<br /> Overbearing, financial dependency</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/49.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>King of Pentacles</div><br />
          <div>Upright:<br /> Financial stability, security</div><br />
          <div>Reversed:<br /> Greed, materialism</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/50.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Ace of Swords</div><br />
          <div>Upright:<br /> Clarity, truth</div><br />
          <div>Reversed:<br /> Confusion, misinformation</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/51.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Two of Swords</div><br />
          <div>Upright:<br /> Decision, balance</div><br />
          <div>Reversed:<br /> Indecision, avoidance</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/52.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Three of Swords</div><br />
          <div>Upright:<br /> Heartbreak, sorrow</div><br />
          <div>Reversed:<br /> Healing, forgiveness</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/53.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Four of Swords</div><br />
          <div>Upright:<br /> Rest, recuperation</div><br />
          <div>Reversed:<br /> Burnout, lack of recovery</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/54.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Five of Swords</div><br />
          <div>Upright:<br /> Conflict, winning at all costs</div><br />
          <div>Reversed:<br /> Reconciliation, compromise</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/55.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Six of Swords</div><br />
          <div>Upright:<br /> Transition, moving on</div><br />
          <div>Reversed:<br /> Unresolved issues, emotional baggage</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/56.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Seven of Swords</div><br />
          <div>Upright:<br /> Deception, strategy</div><br />
          <div>Reversed:<br /> Honesty, coming clean</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/57.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Eight of Swords</div><br />
          <div>Upright:<br /> Restriction, self-imposed limitations</div><br />
          <div>Reversed:<br /> Liberation, breaking free</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/58.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Nine of Swords</div><br />
          <div>Upright:<br /> Anxiety, nightmares</div><br />
          <div>Reversed:<br /> Release, relief</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/59.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Ten of Swords</div><br />
          <div>Upright:<br /> Endings, rock bottom</div><br />
          <div>Reversed:<br /> Recovery, gradual improvement</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/60.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Page of Swords</div><br />
          <div>Upright:<br /> Curiosity, clear communication</div><br />
          <div>Reversed:<br /> Gossip, deceitful communication</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/61.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Knight of Swords</div><br />
          <div>Upright:<br /> Ambition, assertiveness</div><br />
          <div>Reversed:<br /> Aggression, haste</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/62.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Queen of Swords</div><br />
          <div>Upright:<br /> Clarity, independence</div><br />
          <div>Reversed:<br /> Harsh communication, coldness</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/63.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>King of Swords</div><br />
          <div>Upright:<br /> Authority, clear thinking</div><br />
          <div>Reversed:<br /> Tyranny, abusive power</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/64.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Ace of Wands</div><br />
          <div>Upright:<br /> Inspiration, new opportunities</div><br />
          <div>Reversed:<br /> Lack of direction, delays</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/65.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Two of Wands</div><br />
          <div>Upright:<br /> Planning, progress</div><br />
          <div>Reversed:<br /> Lack of planning, impatience</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/66.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Three of Wands</div><br />
          <div>Upright:<br /> Expansion, foresight</div><br />
          <div>Reversed:<br /> Delays, missed opportunities</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/67.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Four of Wands</div><br />
          <div>Upright:<br /> Celebration, harmony</div><br />
          <div>Reversed:<br /> Disruption, instability</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/68.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Five of Wands</div><br />
          <div>Upright:<br /> Competition, conflict</div><br />
          <div>Reversed:<br /> Resolution, finding common ground</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/69.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Six of Wands</div><br />
          <div>Upright:<br /> Victory, recognition</div><br />
          <div>Reversed:<br /> Ego, arrogance</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/70.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Seven of Wands</div><br />
          <div>Upright:<br /> Defensiveness, standing your ground</div><br />
          <div>Reversed:<br /> Surrender, giving in</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/71.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Eight of Wands</div><br />
          <div>Upright:<br /> Swiftness, progress</div><br />
          <div>Reversed:<br /> Delays, frustration</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/72.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Nine of Wands</div><br />
          <div>Upright:<br /> Resilience, persistence</div><br />
          <div>Reversed:<br /> Burnout, giving up</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/73.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Ten of Wands</div><br />
          <div>Upright:<br /> Burden, responsibility</div><br />
          <div>Reversed:<br /> Lightening the load, delegation</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/74.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Page of Wands</div><br />
          <div>Upright:<br /> Enthusiasm, exploration</div><br />
          <div>Reversed:<br /> Lack of direction, impulsiveness</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/75.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Knight of Wands</div><br />
          <div>Upright:<br /> Adventure, energy</div><br />
          <div>Reversed:<br /> Impulsiveness, recklessness</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/76.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>Queen of Wands</div><br />
          <div>Upright:<br /> Confidence, determination</div><br />
          <div>Reversed:<br /> Selfishness, aggression</div>
        </div>
      </div>
      <div className={styles['tarot-card']}>
        <div className="card-image">
          <img src="cards/77.png" alt="Tarot Card" />
        </div>
        <div className="card-keywords">
          <div>King of Wands</div><br />
          <div>Upright:<br /> Leadership, inspiration</div><br />
          <div>Reversed:<br /> Impulsiveness, arrogance</div>
        </div>
      </div>
  </div>

    </>
  )
}
