# 2022.10.14 - 주제 설정, 레이아웃 완료

주제 설정 : 꺼무위키 사이트 만들기

프로젝트명 : turnOffWiki

- intro

  나무위키를 보다가 위키 사이트를 하나 만들어보면 어떨까 생각이 들었다. 이유는 일단 재미있을 것 같고,

  지금까지 배운 프론트, 백, 컨트랙트 모두를 적절히 배우고 활용할만한 기능을 넣을 수 있을 것 같아서..

  결과가 아주 나쁘지 않다면 동일 토큰을 공유하는 다른 어플리케이션을 만드는 것도 좋겠다.

- front-end

  - nextjs 사용 - 위키내에 존재할 문서들이 제목으로도 검색 엔진에 걸리게 하고 싶음
  - redux-toolkit < 이거 넥스트js에 사용 가능한가? 찾아볼것
  - oauth login < DID 프로젝트때 한 거 + 카카오 로그인을 사용 하고 싶다
  - 메타마스크 로그인을 하고 이 상태로 위키에 기여하면 토큰을 준다.

- back-end

  - ts 사용, 라우터의 layer를 잘 나눠서 해보자.
  - orm은 시퀄라이즈를 사용하되, join등의 기능을 적극 활용해볼것
  - dotenv, res.local, cors 등 확실히 이해가 가지 않는 부분은 공부해볼 예정

- BlockChain

  - web3를 이용해 bc network와 통신
  - private eth network를 다시 setup 해보고 싶다
  - 우선 생각나는 기능은 로그인이지만, 추가적인 다른 기능도 있으면 좋겠다.
  - 문서 생성, 편집자 등 위키에 기여하는 사람들에게 코인을 발급
  - 가끔 기념으로 nft도 준다. 이건 토큰을 이용해 구매하거나, 교환도 가능하게 하고 싶다.
  - truffle 대신 hardhat을 배워서 써보면 좋을 것 같다.

- 배포

  - 실제로 배포를 하진 않는다.
  - nginx, pm2등 관련 라이브러리에 대한 공부는 해둘 것
