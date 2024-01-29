import Head from 'next/head'
import <st</style>;

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
      <body style="display: flex;
justify-content: center;
align-items: center;
height: fit-content;
margin: 0;">
  <div class="tarot-container" style="display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 80%;">
     <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        Single Card Reading<br /><br />1. Focus and Draw:
        Concentrate on your question, shuffle, and draw a single card.<br /><br />
        2. Observe and Relate:
        Note card imagery and keywords, connect them to your question, and trust your instincts.
    </div>
    <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
      <div class="card-image" style="width: 80px;
      height: 150px;">
        <img src="public/cards/0.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
        <div>The Fool</div><br />
        <div>Upright:<br /> Beginnings, spontaneity</div><br />
        <div>Reversed:<br /> Recklessness, irresponsibility</div>
      </div>
    </div>  
    <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/1.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>The Magician</div><br />
          <div>Upright:<br /> Manifestation, power</div><br />
          <div>Reversed:<br /> Manipulation, untapped potential</div>
        </div>
      </div>    
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/2.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>The High Priestess</div><br />
          <div>Upright:<br /> Intuition, mystery</div><br />
          <div>Reversed:<br /> Hidden agendas, lack of insight</div>
        </div>
      </div>
      
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/3.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>The Empress</div><br />
          <div>Upright:<br /> Nurturing, abundance</div><br />
          <div>Reversed:<br /> Dependency, neglect</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/4.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>The Emperor</div><br />
          <div>Upright:<br /> Authority, structure</div><br />
          <div>Reversed:<br /> Domineering, lack of control</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/5.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>The Hierophant</div><br />
          <div>Upright:<br /> Tradition, spirituality</div><br />
          <div>Reversed:<br /> Rebellion, nonconformity</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/6.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>The Lovers</div><br />
          <div>Upright:<br /> Connection, choice</div><br />
          <div>Reversed:<br /> Disharmony, indecision</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/7.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>The Chariot</div><br />
          <div>Upright:<br /> Determination, victory</div><br />
          <div>Reversed:<br /> Lack of direction, inner conflict</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/8.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Strength</div><br />
          <div>Upright:<br /> Courage, inner strength</div><br />
          <div>Reversed:<br /> Weakness, self-doubt</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/9.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>The Hermit</div><br />
          <div>Upright:<br /> Solitude, inner guidance</div><br />
          <div>Reversed:<br /> Isolation, withdrawal</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/10.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Wheel of Fortune</div><br />
          <div>Upright:<br /> Destiny, cycles</div><br />
          <div>Reversed:<br /> Setbacks, lack of control</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/11.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Justice</div><br />
          <div>Upright:<br /> Fairness, balance</div><br />
          <div>Reversed:<br /> Injustice, bias</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/12.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>The Hanged Man</div><br />
          <div>Upright:<br /> Surrender, letting go</div><br />
          <div>Reversed:<br /> Resistance, delay</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/13.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Death</div><br />
          <div>Upright:<br /> Transformation, rebirth</div><br />
          <div>Reversed:<br /> Stagnation, fear of change</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/14.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Temperance</div><br />
          <div>Upright:<br /> Balance, harmony</div><br />
          <div>Reversed:<br /> Imbalance, excess</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/15.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>The Devil</div><br />
          <div>Upright:<br /> Temptation, bondage</div><br />
          <div>Reversed:<br /> Release, freedom</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/16.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>The Tower</div><br />
          <div>Upright:<br /> Sudden change, upheaval</div><br />
          <div>Reversed:<br /> Avoidance, delayed disaster</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/17.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>The Star</div><br />
          <div>Upright:<br /> Hope, inspiration</div><br />
          <div>Reversed:<br /> Disillusionment, lack of faith</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/18.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>The Moon</div><br />
          <div>Upright:<br /> Intuition, subconscious</div><br />
          <div>Reversed:<br /> Deception, confusion</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/19.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>The Sun</div><br />
          <div>Upright:<br /> Joy, vitality</div><br />
          <div>Reversed:<br /> Temporary setbacks, lack of clarity</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/20.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Judgment</div><br />
          <div>Upright:<br /> Renewal, reflection</div><br />
          <div>Reversed:<br /> Self-doubt, avoidance of accountability</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/21.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>The World</div><br />
          <div>Upright:<br /> Completion, fulfillment</div><br />
          <div>Reversed:<br /> Unfinished business, lack of closure</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/22.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Ace of Cups</div><br />
          <div>Upright:<br /> Emotional new beginnings, love</div><br />
          <div>Reversed:<br /> Blocked emotions, emptiness</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/23.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Two of Cups</div><br />
          <div>Upright:<br /> Unity, partnership</div><br />
          <div>Reversed:<br /> Disharmony, imbalance</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/24.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Three of Cups</div><br />
          <div>Upright:<br /> Celebration, friendship</div><br />
          <div>Reversed:<br /> Overindulgence, shallow connections</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/25.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Four of Cups</div><br />
          <div>Upright:<br /> Contemplation, introspection</div><br />
          <div>Reversed:<br /> Acceptance, moving forward</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/26.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Five of Cups</div><br />
          <div>Upright:<br /> Loss, grief</div><br />
          <div>Reversed:<br /> Acceptance, moving on</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/27.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Six of Cups</div><br />
          <div>Upright:<br /> Nostalgia, childhood memories</div><br />
          <div>Reversed:<br /> Letting go of the past, moving forward</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/28.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Seven of Cups</div><br />
          <div>Upright:<br /> Choices, fantasies</div><br />
          <div>Reversed:<br /> Clarity, focus</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/29.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Eight of Cups</div><br />
          <div>Upright:<br /> Walking away, seeking something more</div><br />
          <div>Reversed:<br /> Unwillingness to move on, stagnation</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/30.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Nine of Cups</div><br />
          <div>Upright:<br /> Wishes fulfilled, contentment</div><br />
          <div>Reversed:<br /> Complacency, dissatisfaction</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/31.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Ten of Cups</div><br />
          <div>Upright:<br /> Emotional fulfillment, family harmony</div><br />
          <div>Reversed:<br /> Dysfunctional relationships, unfulfilled dreams</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/32.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Page of Cups</div><br />
          <div>Upright:<br /> Emotional sensitivity, creative inspiration</div><br />
          <div>Reversed:<br /> Impracticality, moodiness</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/33.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Knight of Cups</div><br />
          <div>Upright:<br /> Romantic pursuit, emotional idealism</div><br />
          <div>Reversed:<br /> Unrealistic expectations, mood swings</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/34.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Queen of Cups</div><br />
          <div>Upright:<br /> Intuition, compassion</div><br />
          <div>Reversed:<br /> Emotional instability, manipulation</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/35.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>King of Cups</div><br />
          <div>Upright:<br /> Emotional balance, compassion</div><br />
          <div>Reversed:<br /> Emotional manipulation, moodiness</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/36.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Ace of Pentacles</div><br />
          <div>Upright:<br /> Manifestation, prosperity</div><br />
          <div>Reversed:<br /> Financial issues, lack of opportunity</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/37.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Two of Pentacles</div><br />
          <div>Upright:<br /> Balance, adaptability</div><br />
          <div>Reversed:<br /> Imbalance, disorganization</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/38.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Three of Pentacles</div><br />
          <div>Upright:<br /> Collaboration, craftsmanship</div><br />
          <div>Reversed:<br /> Lack of teamwork, poor quality</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/39.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Four of Pentacles</div><br />
          <div>Upright:<br /> Security, possessiveness</div><br />
          <div>Reversed:<br /> Letting go, generosity</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/40.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Five of Pentacles</div><br />
          <div>Upright:<br /> Hardship, poverty</div><br />
          <div>Reversed:<br /> Recovery, assistance</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/41.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Six of Pentacles</div><br />
          <div>Upright:<br /> Generosity, charity</div><br />
          <div>Reversed:<br /> Greed, inequality</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/42.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Seven of Pentacles</div><br />
          <div>Upright:<br /> Assessment, patience</div><br />
          <div>Reversed:<br /> Impatience, lack of progress</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/43.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Eight of Pentacles</div><br />
          <div>Upright:<br /> Diligence, craftsmanship</div><br />
          <div>Reversed:<br /> Lack of focus, mediocrity</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/44.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Nine of Pentacles</div><br />
          <div>Upright:<br /> Independence, self-sufficiency</div><br />
          <div>Reversed:<br /> Dependence, extravagance</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/45.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Ten of Pentacles</div><br />
          <div>Upright:<br /> Wealth, family legacy</div><br />
          <div>Reversed:<br /> Financial issues, family discord</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/46.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Page of Pentacles</div><br />
          <div>Upright:<br /> Manifestation, practicality</div><br />
          <div>Reversed:<br /> Lack of focus, missed opportunities</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/47.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Knight of Pentacles</div><br />
          <div>Upright:<br /> Responsibility, diligence</div><br />
          <div>Reversed:<br /> Laziness, stubbornness</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/48.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Queen of Pentacles</div><br />
          <div>Upright:<br /> Nurturing, practicality</div><br />
          <div>Reversed:<br /> Overbearing, financial dependency</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/49.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>King of Pentacles</div><br />
          <div>Upright:<br /> Financial stability, security</div><br />
          <div>Reversed:<br /> Greed, materialism</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/50.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Ace of Swords</div><br />
          <div>Upright:<br /> Clarity, truth</div><br />
          <div>Reversed:<br /> Confusion, misinformation</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/51.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Two of Swords</div><br />
          <div>Upright:<br /> Decision, balance</div><br />
          <div>Reversed:<br /> Indecision, avoidance</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/52.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Three of Swords</div><br />
          <div>Upright:<br /> Heartbreak, sorrow</div><br />
          <div>Reversed:<br /> Healing, forgiveness</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/53.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Four of Swords</div><br />
          <div>Upright:<br /> Rest, recuperation</div><br />
          <div>Reversed:<br /> Burnout, lack of recovery</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/54.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Five of Swords</div><br />
          <div>Upright:<br /> Conflict, winning at all costs</div><br />
          <div>Reversed:<br /> Reconciliation, compromise</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/55.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Six of Swords</div><br />
          <div>Upright:<br /> Transition, moving on</div><br />
          <div>Reversed:<br /> Unresolved issues, emotional baggage</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/56.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Seven of Swords</div><br />
          <div>Upright:<br /> Deception, strategy</div><br />
          <div>Reversed:<br /> Honesty, coming clean</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/57.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Eight of Swords</div><br />
          <div>Upright:<br /> Restriction, self-imposed limitations</div><br />
          <div>Reversed:<br /> Liberation, breaking free</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/58.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Nine of Swords</div><br />
          <div>Upright:<br /> Anxiety, nightmares</div><br />
          <div>Reversed:<br /> Release, relief</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/59.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Ten of Swords</div><br />
          <div>Upright:<br /> Endings, rock bottom</div><br />
          <div>Reversed:<br /> Recovery, gradual improvement</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/60.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Page of Swords</div><br />
          <div>Upright:<br /> Curiosity, clear communication</div><br />
          <div>Reversed:<br /> Gossip, deceitful communication</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/61.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Knight of Swords</div><br />
          <div>Upright:<br /> Ambition, assertiveness</div><br />
          <div>Reversed:<br /> Aggression, haste</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/62.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Queen of Swords</div><br />
          <div>Upright:<br /> Clarity, independence</div><br />
          <div>Reversed:<br /> Harsh communication, coldness</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/63.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>King of Swords</div><br />
          <div>Upright:<br /> Authority, clear thinking</div><br />
          <div>Reversed:<br /> Tyranny, abusive power</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/64.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Ace of Wands</div><br />
          <div>Upright:<br /> Inspiration, new opportunities</div><br />
          <div>Reversed:<br /> Lack of direction, delays</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/65.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Two of Wands</div><br />
          <div>Upright:<br /> Planning, progress</div><br />
          <div>Reversed:<br /> Lack of planning, impatience</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/66.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Three of Wands</div><br />
          <div>Upright:<br /> Expansion, foresight</div><br />
          <div>Reversed:<br /> Delays, missed opportunities</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/67.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Four of Wands</div><br />
          <div>Upright:<br /> Celebration, harmony</div><br />
          <div>Reversed:<br /> Disruption, instability</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/68.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Five of Wands</div><br />
          <div>Upright:<br /> Competition, conflict</div><br />
          <div>Reversed:<br /> Resolution, finding common ground</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/69.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Six of Wands</div><br />
          <div>Upright:<br /> Victory, recognition</div><br />
          <div>Reversed:<br /> Ego, arrogance</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/70.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Seven of Wands</div><br />
          <div>Upright:<br /> Defensiveness, standing your ground</div><br />
          <div>Reversed:<br /> Surrender, giving in</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/71.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Eight of Wands</div><br />
          <div>Upright:<br /> Swiftness, progress</div><br />
          <div>Reversed:<br /> Delays, frustration</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/72.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Nine of Wands</div><br />
          <div>Upright:<br /> Resilience, persistence</div><br />
          <div>Reversed:<br /> Burnout, giving up</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/73.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Ten of Wands</div><br />
          <div>Upright:<br /> Burden, responsibility</div><br />
          <div>Reversed:<br /> Lightening the load, delegation</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/74.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Page of Wands</div><br />
          <div>Upright:<br /> Enthusiasm, exploration</div><br />
          <div>Reversed:<br /> Lack of direction, impulsiveness</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/75.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Knight of Wands</div><br />
          <div>Upright:<br /> Adventure, energy</div><br />
          <div>Reversed:<br /> Impulsiveness, recklessness</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/76.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>Queen of Wands</div><br />
          <div>Upright:<br /> Confidence, determination</div><br />
          <div>Reversed:<br /> Selfishness, aggression</div>
        </div>
      </div>
      <div class="tarot-card" style="font-size: 12px;
    width: 180px; 
    height: 150px; 
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;">
        <div class="card-image" style="width: 80px;
      height: 150px;">
          <img src="public/cards/77.png" style="width: 80px;
        height: 150px;" alt="Tarot Card">
      </div>
      <div class="card-keywords" style="font-size: 12px;
      text-align: left;
      padding-left:20px;">
          <div>King of Wands</div><br />
          <div>Upright:<br /> Leadership, inspiration</div><br />
          <div>Reversed:<br /> Impulsiveness, arrogance</div>
        </div>
      </div>
  </div>
</body>
    </>
  )
}
