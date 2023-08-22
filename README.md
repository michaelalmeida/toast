# Toast component

<p align="center">
<img src="https://i.ibb.co/zJWyZCV/Screenshot-2023-08-22-at-11-46-50.png" >
<img src="https://i.ibb.co/R2NyF4C/Screenshot-2023-08-22-at-11-47-25.png" >
</p>

A toast component that can be integrated with web applications

## Summary

- [Main Stack](#main-stack)
- [Env](#env)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Toast Documentation](#toast-documentation)

## Main Stack

| Package          | Description                                       |
| ---------------- | ------------------------------------------------- |
| React            | A JavaScript library for building user interfaces |
| Context API      | A React built-in feature to pass data             |
| Typescript       | A superset of the JavaScript language             |
| styled-component | CSS as Components                                 |
| RTL              | JavaScript Testing utility for React              |
| Jest             | JavaScript Testing Framework                      |

## Env

Node version: v18.12.1
Npm version: 8.19.2

## Installation

Clone the repository

```bash
$ git clone https://github.com/michaelalmeida/toast.git
$ cd toast
```

When that's done, install the project dependencies, go to the server folder and run:

```bash
$ npm install
```

## Running the Project

After finish the previous step ([installation](#installation)) , you can start the project:

Starting running the server, inside the /server folder execute:

```bash
$ npm start
```

Then you can execute the same command in the /client folder to run the app in the development mode. Open http://localhost:3000 to view it in the browser.

| `npm <script>` | Description                         |
| -------------- | ----------------------------------- |
| `start`        | Serves your app at `localhost:3000` |
| `build`        | Builds the application              |
| `test`         | Runs unit tests                     |

## Toast Documentation

In order to use, first you need to use the wrapper in your component, we recommend to use in the App file

    <ToastProvider>
     {/*All your code here */}
    </ToastProvider>

Then, inside the component you want to use a Toast notificaiton, you can easily create use object destructuring syntax to use the addToast function from the useToast custom hook:

    const { addToast } =  useToast();

Now, you can trigger it using a onClick event, as a result of an endpoint call, etc:

     addToast({
    	 title: "Success",
    	 message: "This is a warning toast",
    	 type: "success",
    	 timer:
     })

Since only message property is required (for the rest there are default values), when you need just a simple warning, you can call like this:

     addToast({
    	 message: "This is a simple warning toast",
     })

| Property | Description                                  | Type                             | Default                         |
| -------- | -------------------------------------------- | -------------------------------- | ------------------------------- |
| type     | The style and icon                           | "warning" , "success" , "danger" | "warning"                       |
| title    | The toast title                              | string                           | "Warning", "Success" , "Danger" |
| message  | The toast message                            | string                           | -                               |
| timer    | Time to the toast auto close in milliseconds | number                           | 6000                            |
