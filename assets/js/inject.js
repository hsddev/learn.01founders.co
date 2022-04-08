document.body.innerHTML += `
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=2942291289344991&ev=PageView&noscript=1"
/></noscript>
`;

!(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
        n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
})(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
);
fbq("init", "2942291289344991");
fbq("track", "PageView");

document.getElementsByTagName("head")[0].innerHTML += `<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-199770866-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-199770866-2');
</script>`


if (location.pathname === "/") {
    const rightContent = document.querySelector(".right");
    const textContent = document.querySelector(".text");
    let contactContent = document.querySelector(".contact");
    const welcome = document.getElementById("welcome");

    // welcome to 01 Founders
    welcome.innerHTML = `Welcome to <span style="color: #56C271;">01Founders</span>`;
    document.querySelector(".title").style.fontSize = "3rem !important";

    // Video
    const htmlVideoString = `
  <iframe width="500" height="300" src="https://www.youtube.com/embed/0CWzFx1HRvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="margin-bottom: 100px;"></iframe>
`;

    rightContent.insertAdjacentHTML("afterbegin", htmlVideoString);

    // text
    textContent.innerHTML = `<div class="text">
     <span id="zone-01">Zone 01 is our collaborative coding education platform.</span>
     <br><br>
     <span id="zone-01-process">New here? Here’s what you need to do:</span>
     <br><br>
     1)
     <span id="instruction-1">Create an account, and log into the platform.</span>
     <br>
     2) <span id="instruction-2">Complete the online cognitive test.</span>
     <br>
<br><br>
<h4>This is a two part game which challenges your memory and logical thinking.</h4>
 <ul>
 <li>Prepare for the 1.5 hour Online Test - use a computer and a mouse.</li>
 <li>Create an account and log into the platform.</li>
 <li>Complete the Test - remember, you can't pause it!</li>
 
 </ul>
 <br><br>
     <h2>More info about the Online Test:</h2>
     <h2>Game #1 - Memory</h2>
     <p>Begin the application with a game that tests your memory. Getting harder as the levels progress, test your memory in this colourful game.</p>
     <h2>Game #2 - Zzle</h2>
    <p>This is where the challenge begins. Zzle tests your logic and perseverance. You'll be lead through a series of puzzles and your job is to figure out how to move the cursor to the end. 
     Experiment with different possibilities and see how quickly you can get through.</p>

     <br>
     <br>
     <span id="account">That’s it! If you’ve already created an account, sign in to complete
       your application or check for updates.</span>
   </div>`;

    // Contact
    contactContent = `<div class="contact" style="padding: 20px 0px;font-size:1rem !important">
    <div id="about-us">Want to know more about us ?</div>
    <a id="contact-link" style="color: #56C271 !important;border-bottom: solid 1px #56C271 !important" target="_blank" href="mailto:hello@01founders.co">
      <span class="arrow">→</span>
      <span id="contact">Contact us.</span>
    </a>
  </div>`;

    contactContent.insertAdjacentHTML("afterend", contactContent);
    contactContent.remove();
}
