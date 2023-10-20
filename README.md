# What is this ?

---

This is supposed to be an alternate desktop frontend for UTube for Windows, Linux, and Mac. Almost entire functionalities based on Js, so it can be used as a normal web app or a PWA. Developing using the **Wails framework** of **Golang** and **Vuejs** instead of **Nuxtjs**.

***Name ? I dont have one :)***

## Screenshots

![ss](/images/Screenshot%20(0).png)
![ss](/images/Screenshot%20(2).png)
![ss](/images/Screenshot%20(3).png)
![ss](/images/Screenshot%20(4).png)
![ss](/images/Screenshot%20(5).png)
![ss](/images/Screenshot%20(6).png)
![ss](/images/Screenshot%20(7).png)
![ss](/images/Screenshot%20(8).png)
![ss](/images/Screenshot%20(9).png)
![ss](/images/Screenshot%20(10).png)

---

## Live Development

### **Requirements**

1. [VSCode](https://code.visualstudio.com/download)
2. [Go extension](https://marketplace.visualstudio.com/items?itemName=golang.Go)
3. [NodeJs (v18)](https://nodejs.org/en/download)
4. [PNPM](https://pnpm.io/installation)
5. [Golang (v1.18+)](https://go.dev/dl/)
6. [Wails](https://wails.io/docs/gettingstarted/installation/)

### Run

To run in live development mode, in the project root directory.

```bash
    # On root directory,
    cd frontend && pnpm dev
```

Go to <http://127.0.0.1:3000> on browser.

### Or

To run in live development mode, run `wails dev` in the project root directory. This will run a Vite development
server that will provide very fast hot reload of your frontend changes.

If you want to develop in a browser and have access to your Go methods, there is also a dev server that runs on <http://127.0.0.1:3000>.

Connect to this in your browser, and you can call your Go code from devtools.

### Before install node packages

```bash
    cd frontend
```

## Building

To build a redistributable, production mode package, use `wails build`.

More CLI options are [here.](https://wails.io/docs/reference/cli#build)

---
