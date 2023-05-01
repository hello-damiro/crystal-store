# crystal-store

## Warning! This is a work in progress

</br>

The Odin Project - Intermediate JS project

SEE LIVE WORKING APP [HERE](http://hello-damiro.github.io/crystal-store)

**Day 1**: Prepared environment and initial files. Design and conceptualize the shop on figma. I would like to use readily available API but cant find anything on the interwebs thats suitable with Odin's design system. SO I made something up. Enter **Odin's Crystal Store**, and yeah, I made use of futharks again and conceptualize an imaginary crystals to sell, because why not. 🤣

**Day 2**: Done with the overall layout and css. Will be working with shop logic next. Had fun deisgning this simple website. All imaginary.

</br>

## Project screenshots

![Screenshot](https://github.com/hello-damiro/crystal-store/blob/main/src/assets/screenshot.png?raw=true)

</br>

## Challenges

1. Think about the component and the folder structure. How could you set up your application? Which components or functionalities do you need?
2. You should have at least two pages (a homepage and a shop page, which includes your shopping cart). Let a user navigate between the pages with a navigation bar, which will be shown on both routes.
3. To your homepage, you can add whatever you’d like! A few images or information will be totally fine; it doesn’t have to be something fancy. The main goal of the project is to focus on setting up the shopping cart. The homepage is there to practice routing using `react-router-dom`.
4. On your shopping cart route, a user should see a sticky bar (it can be just a top section as well), which displays the number of items currently in the cart. You should also have a button next to it where you can go to the cart to checkout and pay (however we are not going to implement this logic here).
5. Build individual card items for each of your products. Display an input field on it, which lets a user manually type in how many items they want to buy. Also, add an increment and decrement button next to it for fine-tuning. You can also display a title for each product as well as an “Add To Cart” button.
6. Once a user has submitted their order, the amount on the cart itself should adjust.
7. Make sure to test your app thoroughly using the React Testing Library. Take care that you don’t directly test `react-router-dom`, since it is an external library and the developers working on it must have tested the library already.
