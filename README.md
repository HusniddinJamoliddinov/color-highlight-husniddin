# color Highlight

## using

```Html
 <div class="d-flex justify-content-center">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
      <script type = "module" src="./main.js"></script>
```

```css
body {
  background-color: #292121;
  height: 100vh;
  display: grid;
  place-items: center;
}
.box {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: #464343;
  margin: 10px;
  transition: 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
```

```js
import { colorHighlight } from "./main.js";

const boxes = document.querySelectorAll(".box");
colorHighlight(boxes);
```
