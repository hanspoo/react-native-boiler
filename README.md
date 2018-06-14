## Welinux Custom Boilerplate

This is our selection for react native projects, all packages are latest version to Jun 2018.

An app with login page, REST login and home page with tabs.

It creates a sample app with an initial stack navigation, on landing yout get into a login page where you should complete the email and password; the form is created with tcomb which is much simpler than redux-form and uses local state. 

When you press the login button it uses a free fake REST web service on https://reqres.in/, where any email or password will do; it uses fetch and, redux and redux-thunk.

On successful login you navigate to a home page built with a tab navigator with two tabs; each one is a stack navigator.  

In the second tab is the option to logout and return to login again. 

Full image background in login page give it a professional look.

It uses the next libraries:

* react-navigation 2
* redux
* redux-thunk + fetch
* native-base
* estlint and prettier 
* tcomb

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

