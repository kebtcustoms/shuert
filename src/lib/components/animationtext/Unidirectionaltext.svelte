<div class="left" >
    <div class="detailsWrapper">
        <div class="left-element" id="leftElement1">
            <div class="headline"></div>
            <div class="text"></div>
            <div class="text"></div>
            <div class="text"></div>
            <div class="text"></div>
        </div>
        <div class="left-element" id="leftElement2">
            <div class="headline"></div>
            <div class="text"></div>
            <div class="text"></div>
            <div class="text"></div>
            <div class="text"></div>
        </div>
        <div class="left-element" id="leftElement3">
            <div class="headline"></div>
            <div class="text"></div>
            <div class="text"></div>
            <div class="text"></div>
            <div class="text"></div>
        </div>
    </div>
</div>

<style>
      .left {
      /* width: 50%; */
      flex: 1;
      /* take up equal space as right content */
      outline: 1px solid rgb(0, 170, 255);
      /* height: 2700px; */
      display: flex;
      justify-content: center;
      /* z-index: 99; */
  }

  .detailsWrapper {
      /* margin: auto; */
      width: 80%;
      margin: 0;
      position: relative;
      /* top: 50%; */
      /* left: 27.5%; */
      /* -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%); */
      outline: 1px solid rgb(255, 0, 200);
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* border: 1px solid whitesmoke; */
  }

  /* .detailsWrapper > * + * {
  margin-top: -130px;
} */

  .left-element {
      position: absolute;
      opacity: 0;
      width: 100%;
      /* height: 100vh; */
      outline: 1px solid rgb(8, 0, 255);
      display: flex;
      flex-direction: column;

      justify-content: center;
      /* height: 100%; */
      /* height: 650px; */
      transition: opacity 0.7s;
      /* Other styles ... */
  }

  .headline {
      background: #2d4e86;
      border-radius: 6px;
      height: 4em;
      width: 100%;
  }

  .text {
      margin: 0.8em 0 0 0;
      background: #2d4e86;
      border-radius: 6px;
      height: 1em;
      width: 100%;
  }

  @media (max-width: 1921px) {
    .left {

width: 80%;
height: fit-content;
position: fixed;
top: 510px;
outline: 0px;
}

.left-element {
outline: 0px;
}

.detailsWrapper {
width: 100%;
position: relative;
height: 100%;
left: 50%;
top: 50%;
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
outline: 0px;
}

  }
</style>