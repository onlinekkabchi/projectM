# projectM dd

## 구동방법

[과제 구현 페이지 LINK](https://application-0-fvdvu.mongodbstitch.com/)

-   MongoDB와 GitHub를 통해 결과물을 자동으로 배포하고 있다. 데이터는 제공받은 JSON을 사용하였다.
-   작성한 스크립트는 hosting/files 폴더에서 전부 확인할 수 있다.

## 선정이유

-   vanillaJs 사용 : component 중심으로 돌아가는 ReactJs보다 다양한 값을 결과값으로 낼 수 있기 때문에 자동완성기능이 있는 동적인 페이지를 구현하는데는 vanillaJs가 적합하다고 판단했다. TypeScript는 사용할 수 있지만 아직 미숙하기때문에 과제에 사용하지 않았다.
-   css에 동적으로 움직이는 부분이 많아. pure css를 사용할 경우 작업규모가 커질수록 수정이 어려워질거라 판단하여 sass를 사용하였다. sass 작업물(.scss 파일)은 sass-style 폴더에서 확인할 수 있다.

## 구성

-   script는 component위주로 작성하였다.
-   main/hosting/files 폴더 안에 페이지를 구성하는 script가 전부 들어있다. MongoDB로 자동배포 중인데 별도의 Route가 있지않은 이상 폴더를 허용하지않는 MongoDB의 호스팅 법 상 따로 폴더구조가 존재하지 않는다. 따로 폴더를 만드는 대신 서로 영향을 많이 주는 파일은 부분적으로 이름을 통일했다.(예시: product-card.js/product-card-draw.js)

**_구조_**
<br>
<br>
![structure_mu](https://user-images.githubusercontent.com/66970178/179390462-54ab8539-4d40-42df-89b4-ec96d7c1f08a.png)

**_product-card.js의 결과물_**
<br>
<br>
![product-card](https://user-images.githubusercontent.com/66970178/179386180-be36704e-9789-4443-8ec3-13adde3fe70d.png)

**_base-header-menu.js가 담당하는 부분 : 상위 메뉴 버튼에 들어가는 기능_**
<br>
<br>
![base-header-menu](https://user-images.githubusercontent.com/66970178/179386182-9ec09b66-1e4c-436c-aaa0-f8ce3e4e4e26.png)

## Reference

-   [Working with JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
-   [fetch multiple urls at the same time](https://stackoverflow.com/questions/59037553/fetch-multiple-urls-at-the-same-time)
-   [How to get the heigt of scroll bar using JavaScript?](https://www.geeksforgeeks.org/how-to-get-the-height-of-scroll-bar-using-javascript/)

**Infinite Scroll 관련**

-   [scrollHeight, mdn](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight)

-   [Window.pageYOffset, mdn](https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset)

**검색 관련**

-   [intersection of two arrays by partial matches, stackoverflow](https://stackoverflow.com/questions/56251223/intersection-of-two-arrays-by-partial-matches)

-   [How to retrieve all localStarage items without knowing the keys in advance?, stackoverflow](https://stackoverflow.com/questions/17745292/how-to-retrieve-all-localstorage-items-without-knowing-the-keys-in-advance)
