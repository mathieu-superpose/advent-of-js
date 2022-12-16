# Advent of Javascript 2021

## Presentation

A collection of daily integrations from the [Advent of JS challenge](https://www.adventofjs.com/)

## Techno

[React](https://reactjs.org/)

## 01: Pomodoro App

### Description

A simple pomodoro App

### User stories

- I can start the timer by clicking on the start link/button.
- I can start and stop the timer on the same button.
- I can set the timer by clicking on the gear icon.
- I can see the end of the timer: the ring change from green to red and an alert message is passed.

### Extra

- I can figure the time elapsed through the light surrounding the counter

### Useful ressources

[CSS countdown animation](https://spin.atomicobject.com/2018/11/08/countdown-timer-react-typescript/)

## 02: eCommerce Component

### Description

A list of items and a cart associated

### User stories

- I can see a list of plates and add them to my cart.
- I can see a message "Your cart is empty." when it is.
- I can see the total and subtotal automatically update when I add a plate in my cart.
- I can increase and decrease the quantity of the products in my cart.
- I can never obtain a negative quantity of items.
- I can remove a product from the cart.
- I can see the taxed price (based on the state of Tennessee sales tax: `0.0975`)

## 03: Piano

### Description

A piano playing various sounds by clicking on the keys.

### User stories

- I can see the keyboard centered on the page
- I can see a color change when I hover over a specific key (white becomes yellow and black pink)
- I can hear an audio clip when I click on a specific key
- I can hear 2 sounds simultaneaously if I rapidly click on two separate keys

## 04: Keyboard

### Description

A simple game aiming to press from your keyboard the keys highlighted on screen

### User stories

- I can see the computer keyboard centered on the page
- I can see a random letter jiggling
- I can press a key and it appear on screen
- I can press the same key as the one jiggling and a new random key will jiggle

### Useful ressources

[Global Keyboard Event in React](https://stackoverflow.com/questions/55565444/how-to-register-event-with-useeffect-hooks)

## 05: Podcasts

### Description

Check multiple checkboxes at one time.

### User stories

- I can see the list of podcast episodes
- I can check one episode, and shift-click to select/unselect all the episodes in between

## 06: Slidebar

### Description

A simple Range Slider that updates a price

### User stories

- I can move the knob on the range and the dollar amount above updates itself.

## 07: Tip Calculator

### Description

A simple way to split a bill including tips

### User stories

- I can fill the bill amount and number of people
- I can select the tip percentage
- I can see the total amount of tips and due amount per person

## 08: Meteo

### Description

### User stories

- I can move the knob on the range and the dollar amount above updates itself.

### Useful ressources

[Get geolocalisation](https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs)

[Meteo API](https://www.7timer.info/)

## 09: Caroussel

### Description

An Image Carousel

### User stories

- I can toggle left and right through the image thumbnails
- I can click on an image to select it manually

### Future Improvement

Infinite scrolling

## 14: Youtube Gallerie

### Description

A YouTube Video Gallery

### User stories

- I can view title, description, and embed of featured video from the channel
- I can view gallery of title and thumbnails for other videos

### To be fixed

CORS from embeded video:
src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
