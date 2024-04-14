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

## Procss of browsing the web

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
