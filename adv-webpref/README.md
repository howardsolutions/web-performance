# Web Performance Notes 🏎️

## 🥸 The First Problem - If the website is slow

👉 We are losing $$$$ because of less conversion, bad user experience <br />
👉 It's mostly Frontend Responsibilities

## You're already doing things below to optimize the website

<details> 
    <summary>Here is The List</summary>
    👉 Optimize Network Transfer <br />
    👉 Working with HTTPS and HTTP2 <br />
    👉 CSS as Appetizer<br />
    👉 JavaScript<br />
    👉 Optimizing Images<br />
    👉 Defining Policy for HTTP Cache<br />
    👉 Using Service Worker
</details>
<br />

🚨 `It turns out the time to Interatice on the website is still SLOW, as page load time goes from 1s to 10s, the probability of a mobile visitor to bound INCREASE BY 123%, we're losing client and money`

## 🥸 Not Bandwidth, The problem with browsing speed on the web is LATENCY

👉 Latency is the TIME DELAY between when a data packet is sent and when it's received (express in milliseconds) <br />
👉 EVERY Http Request to get the Response Will Have a LATENCY

## 👨🏻‍💻 We also have CPU and GPU problems

![CPU and GPU problems](/adv-webpref/images/CpuGpu.png)

<hr />

# METRICS to the Rescue

## We can't improve what we can't measure

### BROWSER-CENTRIC METRICS

<details>
    <summary>Here is the List</summary>
👉 Time to First Byte (TTFB) - browser sending http request to the server to get the response, this metric is all about time for the browser to load the first Byte from the response

👉 First Paint - First time browser paint something to the screen

👉 Page Load (Not using this event anymore at modern day)

👉 Browser centric metrics are NOT SO IMPORTANT for WEB PERFORMANCE OPTIMIZATION

</details>

### USER-CENTRIC METRICS

#### First Interactive (Time Interactive)

👉 Simply means: The Main Thread has been Released, at least for several miliseconds <br />
👉 Browser ONLY HAVE 1 THREAD, Single Thread

#### Speed Index

<details open>
    Below is the image process of content loading on the web of Gmail and Amazon
    Even Page Load Time is the same for both. <br/>
    👉 BUT the user will have the FEELING of Amazon is Faster <br />
    👉 Speed Index used to measure that Feeling
</details>

![Amazon and Gmail Page Loading](/adv-webpref/images/speed%20index.png)

#### Time to Interactive

<details open> 
👉 Different with first interactive <br />
👉 It's interactive enough for a couple of milliseconds
</details>

#### Largest Contenful Paint (LCP)

#### Custom Metric

<hr />

# CORE WEB VITALS

<b>Today, Core Web Vitals is actually including 3 metrics</b>

## Largest Contentful Paint (LCP) - Initial Load

<details open>
👉 How fast at which point your content appears on the screen

👉 Because it has to do with the screen, it'll be different on different viewport sizes

</details>

## First Input Delay - FID - Interactivity

<details open>
👉 at which moment you're releasing the thread enough to interact with the content
</details>

## Cumulative Layout Shift - CLS - Visual Stability

<details open>
👉 we dont want the content to ship around while the page load
</details>

## Interaction to Next Paint = Responsiveness

![Perfomance Budget](/adv-webpref/images/performance-budget.png)

## Where to Optimize?

![Where to Optimize](/adv-webpref/images/where%20to%20optimize.png)

👉 It's Frontend Responsibility <br />
👉 Optimize the Backend has LESS impact and it's not a simple or Cheap Task. <br />

🌟 OPTIMIZE THE FRONTEND HAS HIGH IMPACT, It's relatively CHEAP to optimize and RESULTS are IMMEDIATE.

<hr />

# BASIC OPTIMIZATION

## Process of browsing the web

![Process of browsing website](./images/Browsing%20the%20web.png)

## Evolution of HTTP: 1.1 -> 2 -> 3

## Browser Cache

Typically we gonna focus on the `Resource Discovery Queue`

### How The Cache on Browser Work? 🥸

Browser check the cache to see if we have the version of that file or not.

👉 Define Cache Headers per file

- Absolute expiration date (1.0) - Example: `this file will expired at 4PM, May 21, 2024` <br />
- Relative expiration date (1.1) - Example: `this file will expired after 2 months, 1 year,...` <br />
- More specs / values

👉 Browser needs a resource

1. It checks the Cache <br />
   A) Cache Miss: we go to the network <br />

   B) Cache HIT: the file we need are in the Cache

   🚨 It's Expired --> It's make `conditional request` <br />

   Server Response Can be:

   1. Not modified (updated cache Header)
      OR
   2. OK, New File

   🟢 It's NOT expired => We use the file from the Cache
   <hr />

## Back / Forward Cache (BF Cache)

<details open>
    👉 It keeps your page navigation in memory if the user navigates away <br />
    👉 It's automatic  <br />
    👉 You shouldn't use unload events, Cache-Control: no-store <br />
    👉 Use Page Navigation API to Open / restore Connections Or Abort pending transactions
</details>

## Service Worker and Cache Storage

### Quick Definition of Service Worker

👉 A service worker is a web server written in JavaScript that we install locally on user's device <br />
👉 It's kind of the similar algorithm with the Browser Cache, the difference is that this is written by us <br />
👉 Instead of relying on the browser's cache, now you have your own cache <br />
👉 Service worker might not help the first initial visit of user, BUT it might help from the second visit, because next time we can serve the files locally <br />
👉 Can improve the core web vital (performance) a lot, because we dont need go to the network every time

<b> One Use Case / Design Pattern for using Service Worker and Cache Storage </b>

![Use Case Using Service Worker](./images/use%20case%20of%20using%20service%20worker.png)

<hr />

## RESOURCE LOADING, FRAMES, INTERACTIVITY

### 👉 JavaScript blocks PARSING BY DEFAULT

<details>
    Browser is reading the HTML, if it encouters a JS, it will stop parsing <br />
    it will not read the rest of the HTML
</details>

<strong>👉 If we block PARSING, we're ALSO blocking RENDERING, because RENDERING happens AFTER Parsing. </strong>

### 👉 CSS Blocks Rendering

<details>
    The browse will never render the pixel on the screen if ALL the CSS that is known at that moment was not downloaded and parsed. 
</details>

## Some Basic Performance Opitmization

<details>
<summary> Here is the Long List => Open to Read 👇 </summary>
 <br />
👉 Enable GZIP on text-based files (HTML Static and Dynamic), JS, CSS, JSON and SVG <br />

👉 Make Static Content Expire Late in the FUTURE

👉 Use a CDN for static content (CDN has servers all across over the world => closer to the user => the latencies will be shorter => lead to better user experience)

👉 Consider implementing HTTP/2 and HTTPS

👉 Use cookie-less domain

👉 Reduce cookie size

👉 Reduce Redirects (redirects are expensive)

👉 JavaScript as Dessert => We should DEFER it AS MUCH AS POSSIBLE, it uses the main thread, remove or defer unused code, JS is the most expensive asset that you have in your website

👉 Compress / Obfuscate JS and CSS

👉 Release the Main thread ASAP

👉 Embrace Responsive Images, SVG

👉 Compress Images, Define placeholder size

</details>

<hr />

# Advanced Optimizations

## Optimizing the FIRST LOAD

<details> 
    ➡️ Avoid more than one Roudtrip  <br />
    ➡️ Avoid http to httpS redirect (HSTS - HTTP Strict Transport Security) => can save around 150-200 milliseconds
</details>

## Hacking LCP

### by preloading HTML resources

Help the browser discover resources that are obscure in the document <br />
So then your browser will know that CSS or that web file will be needed even before start rendering the HTML

```html
<link rel="preload" href="style.css" as="style" />
```

### Fetch Priority

```html
<link rel="preload" href="style2.css" as="style" fetchpriority="high" />
<link rel="preload" href="otherimage.png" as="image" fetchpriority="low" />
```

### HTTP Early Hints

![Http Early Hints](./images/early%20hints.png)

### Optimize Data Transfer

<details> 
    ➡️ HTTP/3 - transport protocol over UDP, Reduces latency and connection messages, HTTP/2 interface with TLS
    <br />
    ➡️ Use Zopfli (Save 3-8% data transfer with GZIP) but it's 80x slower for compression NOT for decompression
    <br />
    ➡️ Brotli (Save 25% data transfer compared with GZIP, check Encoding header)
</details>

<hr />

## Optimize Resource Loading

➡️ Use Modern Image Formats (Not just PNG and JPEG) - use SVG for instance <br />
➡️ WebP, AVIF, Zopfl PNG, Guetzli JPEG <br />
➡️ Muted videos instead of GIFs <br />

[Squoosh is the open source allow us to convert image](https://squoosh.app/)

## Cache Control, dns-prefetch & preconnect (to warm up the engine)

## Lazy loading Images & Fonts

```html
<img loading="lazy" /> <iframe loading="lazy"></iframe>
```

```css
font-display: optional or swap;
```

## Optimizing Interactions

➡️ We SHOULD NOT doing CLIENT-SIDE RENDERING - it's terible idea for initial load, terible for performance
better performance leads to better conversion
<br />

➡️ Move HEAVY tasks to WebAssembly

➡️ Stop serving legacy code

➡️ Reactive Web Performance

➡️ Provide a Constistent Experience

➡️ Get Reports from the Browser
