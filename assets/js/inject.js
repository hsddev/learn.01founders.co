document.body.innerHTML += `<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=2942291289344991&ev=PageView&noscript=1"
/></noscript>`

!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2942291289344991');
fbq('track', 'PageView');

document.body.innerHTML += '<script async src="https://www.googletagmanager.com/gtag/js?id=G-FLXP00HX2X"></script>'
window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'G-FLXP00HX2X');

if (location.pathname === "/") {

  const rightContent = document.querySelector('.right')
  const textContent = document.querySelector('.text')
  const contactContent = document.querySelector('.contact')

  const htmlVideoString = `
  <iframe width="500" height="300" src="https://www.youtube.com/embed/0CWzFx1HRvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="margin-bottom: 100px;"></iframe>
`

  rightContent.insertAdjacentHTML('afterbegin', htmlVideoString)
  
  
  // Changing the color of the sign in button
if (document.querySelector("#sign-in")) {
    signIn.style.background = "#56C271"
    signIn.style.color = "hsl(0, 0%, 8%)"
  
  const titleString = `
    Welcome to <span style="color: #56C271">01 Founders!</span>
`

  const contentString = `<span id="zone-01">Zone 01 is our collaborative coding education platform.</span>
        <br><br>
        <span id="zone-01-process">New here? Here’s what you need to do:</span>
        <br><br>
        1)
        <span id="instruction-1">Create an account, and log into the platform.</span>
        <br>
        2) <span id="instruction-2">Complete the online cognitive test.</span>
        <br>
        3)
        <span id="instruction-3">Wait to find out whether you’ve made it to the next stage.</span>
        <br>
        <br>
        <span id="account">That’s it! If you’ve already created an account, sign in to complete
          your application or check for updates.
          
        <h1 >Try out the first step of application - the Online Test.</h1>
        <h2 >This is a two part game which challenges your memory and logical thinking.</h2>
        <h3 >1) Prepare for the 1.5 hour Online Test - use a computer and a mouse.</h3>
        <h3 >2) Create an account and log into the platform.</h3>
        <h3>3) Complete the Test - remember, you can't pause it!</span>
        <h3>4) Come back on Tuesday to know if you made it through to the next step - the Selection Sprint.</h3>
        <h1>More info about the Online Test:</h1>
        <h2>Game #1 - Memory</h2>
        <h3>Begin the application with a game that tests your memory. Getting harder as the levels progress, test your memory in this colourful game.</h3>
        <h2>Game #2 - Zzle</h2>
        <h3>This is where the challenge begins. Zzle tests your logic and perseverance. You'll be lead through a series of puzzles and your job is to figure out how to move the cursor to the end. 
        Experiment with different possibilities and see how quickly you can get through.</h3>  </span>`


  const contactString = `<div id="about-us">Want to know more about 01 Founders, London's new free coding school, with a job guarantee?&thinsp;</div>
      <div class="contact">
      <a target="_blank" href="https://www.01founders.co/">
        <span class="arrow">→</span>
        <span id="contact">Visit our main website.</span>
      </a>
      </div>
      <div class="contact">
      <a target="_blank" href="https://www.01founders.co/faq">
        <span class="arrow">→</span>
        <span id="faq">Read the Frequently Asked Questions</span>
      </a>
      </div>
      <div class="contact" style="display:none;">
      <a id="contact-link" target="_blank" href="mailto:theteam@01founders.co" style="display:block;">
        <span class="arrow">→</span>
        <span id="contact">Contact us.</span>
      </a>
      </div>`


  textContent.innerHTML = contentString

  contactContent.insertAdjacentHTML('afterend', contactString)
  contactContent.remove()

}
  
  
