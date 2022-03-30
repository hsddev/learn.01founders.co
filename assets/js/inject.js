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

document.body.innerHTML +=
    '<script async src="https://www.googletagmanager.com/gtag/js?id=G-FLXP00HX2X"></script>';
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "G-FLXP00HX2X");

if (location.pathname === "/") {
    const rightContent = document.querySelector(".right");
    const textContent = document.querySelector(".text");
    const contactContent = document.querySelector(".contact");
    const welcome = document.getElementById("welcome");
    const contactLink = document.getElementById("contact-link");

    // welcome to 01 Founders
    welcome.innerHTML = `Welcome to <span style="color: #56C271;">01Founders</span>`;
    welcome.style.fontSize = "font-size: 3rem !important";

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
    contactString.style.fontSize = "1rem !important";
    contactString.style.padding = "20px 0px";
    contactLink.style.color = "#56C271 !important";
    contactLink.style.borderBottom = "solid 1px #56C271 !important";

    contactContent.insertAdjacentHTML("afterend", contactString);
    contactContent.remove();
}
