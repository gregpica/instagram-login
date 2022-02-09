# Instagram Log In Web UI/UX

Create React App and Express server

`yarn start` runs the react app on [http://localhost:3000](http://localhost:3000)

`yarn server-start` runs the server on [http://localhost:3002](http://localhost:3002)

I mimiced the validations that occur on instagram. An incorrect login can be from entering an existing phone number, username, or email, but entering the wrong password OR from entering a non-existent phone number, username, or email - and then at that point the password is irrelevant.

This can be tested in various configurations. To get a successful login with redirect to /success, enter one of the email/password pairs:
- `josh.maynard@ruggable.com` and `password1`
- `jon.presley@ruggable.com` and `password2`
- `gpica@bu.edu` and `password3`

### Features
- Used react-slideshow-image for the phone fading slideshow UI
- Log In submit button is dulled out blue, no pointer. When the fields have more than 6 characters each, it becomes more vibrant, has a pointer, and allows for a submit
- included 'Show/Hide' button for password text
- included footer
- responsive


### If I had more time
- automated tests (component/unit) using jest/enzyme
- move 'placeholder' to top of input fields when you begin to type
- finesse styling

### Screenshots
![image](https://user-images.githubusercontent.com/40278754/153137997-ba11c37e-cb43-430b-8e75-5032177d851a.png)
![image](https://user-images.githubusercontent.com/40278754/153137676-97cd0591-1544-4be9-83f0-7b7165da570f.png)
![image](https://user-images.githubusercontent.com/40278754/153137768-4b1741af-6760-4d44-982c-6901c5d8f996.png)


