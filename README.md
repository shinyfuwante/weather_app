# weather_app

Practicing async/promises and using api's with JS. Async is JS's answer to doing processes that require time without blocking. Because JS is single threaded, any synchronous code that is blocking will halt the whole program and will cause bad UX. To take advantage of this, we use async/await or promises, which is a step up from callbacks. 

Notes: 
--Async and await must accompany each other. Await will return a promise (or a value wrapped in a promise).

--Trying to conceptualize promises and chaining thenables is a little hard, but go through it a step at a time. 

--I like async/await better... but having the basic experience with Promises will help with times where I will need to use that syntax. 

--Remember that if code requires the value from an async value, to await on that value. 

*This was an exercise I did after coming from a long hiatus, so I'm relearning CSS.*

--border-box will eliminate any random margins from the default browsers. 

NOTE: I understand that it is very *very* bad practice to publish my API keys as they can easily be abused by others. However, the API keys used for this project are easily accessible and free, and the focus of this project is to practice promises and the equivalent code using async/await. In the future, I may revisit this project to obscure the API key once I have a better understanding of deployment.
