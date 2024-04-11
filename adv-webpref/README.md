# Web Performance Notes

## 🥸 The First Problem - If the website is slow

👉 We are losing $$$$ because of less conversion, bad user experience
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

👉 Time to First Byte (TTFB) - browser sending http request to the server to get the response, this metric is all about time for the browser to load the first Byte from the response

👉 First Paint - First time browser paint something to the screen

👉 Page Load (Not using this event anymore at modern day)

👉 Browser centric metrics are NOT SO IMPORTANT for WEB PERFORMANCE OPTIMIZATION

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
