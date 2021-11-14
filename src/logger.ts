import "./style.scss";

let logsToRender: string[] = [];
let intervalId: number;

const loggerElement = document.getElementById("logger");

const logger = {
  info: function (
    component: string,
    message: string,
    hook = "",
    args: string[] = []
  ) {
    logsToRender.push(
      `<span class='cmp'>${component}:&nbsp;</span>
      <span class='hook'>${hook || ""}</span>
      <span class='msg'>${message}</span>
      <span class='addl'>${args.map((arg) => arg.toString()).join(" ")}</span>`
    );
    this._renderQueue();
  },

  _renderQueue: function () {
    if (intervalId) {
      return;
    }
    intervalId = setInterval(() => {
      if (logsToRender.length > 0) {
        const li = document.createElement("li");
        li.innerHTML = logsToRender.shift() + "";
        loggerElement?.appendChild(li);

        if (logsToRender.length === 0 && intervalId) {
          clearInterval(intervalId);
          intervalId = 0;
        }
      }
    }, 200);
  },

  clear: function () {
    //loggerElement?.innerHTML = "";
  }
};

export default logger;
