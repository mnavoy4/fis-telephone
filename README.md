# Stranger Things Telephone

You are making an app that shows some characters from _Stranger Things_ and allows the user to send a character a message.

You'll need to read a list of characters and their info from an external URL

## Instructions

Using the included `app.js` file, make a `GET` request to the URL `https://telephone-assessment.herokuapp.com/api/v1/contacts`.

Once you have the data, add the following elements to the `index.html` page. Please note that the styles are done for you. 😀
* An `li` for each character that includes:
  * An `img` tag that renders the character's image
  * A `span` tag that displays the character's name and phone number
  * A `p` tag that displays the character's Message
  * An `a` tag that says 'Leave `${character.name}` a message' and when clicked takes the user to the `contact.html` page. Add a query string that has a `character` key set to the character's name.
* When finished, your home page should look like this:

![Home Page](assets/home-page.png)
