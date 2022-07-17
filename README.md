# projectM

구성, 선정이유 및 구동방법 간단하게 작성하기

## 구성
- vanillaJs 사용 : component 중심으로 돌아가는 ReactJs보다 다양한 값을 결과값으로 낼 수 있기 때문에 자동완성기능이 있는 동적인 페이지를 구현하는데는 vanillaJs가 적합하다고 판단했다. TypeScript는 사용할 수 있지만 아직 미숙하기때문에 과제에 사용하지 않았다.

- script는 component위주로 작성하였다.

- main/hosting/files 폴더 안에 페이지를 구성하는 script가 전부 들어있다. MongoDB로 자동배포 중인데 별도의 Route가 있지않은 이상 폴더를 허용하지않는 MongoDB의 호스팅 법 상 따로 폴더구조가 존재하지 않는다. 따로 폴더를 만드는 대신 서로 영향을 많이 주는 파일은 부분적으로 이름을 통일했다.(예시: product-card.js/product-card-draw.js)

***hosting 폴더***
![screencapture-github-onlinekkabchi-projectM-tree-temp-hosting-files-2022-07-17-14_55_49](https://user-images.githubusercontent.com/66970178/179385975-bd3028d1-7495-4780-8262-562f125ecc5e.png)

***product-card의 구성요소***
![product-card](https://user-images.githubusercontent.com/66970178/179386180-be36704e-9789-4443-8ec3-13adde3fe70d.png)

***상위 메뉴***
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
