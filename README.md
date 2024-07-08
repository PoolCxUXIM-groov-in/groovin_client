# PoolC-X-Uxim

PoolC와 Uxim의 합동 프로젝트 Frontend

> ## Run

```
npm run dev
```

> ## Environment

- ### Next.js
- ### Tailwind.css
- ### TypeScript

> ## Coding Convention

- ### Airbnb: Eslint + Prettier
- ## Setting

  ### eslint

  Next.js를 통해 eslint설치.

  ### airbnb eslint 설정

  #### 1. airbnb + 종속 패키지까지 설치하기

  > ```
  > npx install-peerdeps --dev eslint-config-airbnb
  > ```

  #### 2. TypeScript 관련 airbnb, lint 패키지 설치하기

  > ```
  > npm install -D eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
  > ```

  ### Prettier

  #### 설치 및 eslint와 충돌 관리

  > ```
  > npm install -D prettier eslint-plugin-prettier eslint-config-prettier
  > ```

  #### .prettierrc 파일 생성

  > ```JSON
  > {
  > "semi": false,
  > "singleQuote": true,
  > "tabWidth": 2,
  > "trailingComma": "all"
  > }
  > ```

  \* next.js에서는 세미콜론을 안 쓰다고 합니다.

> ## Commit Convention

- feat: 새로운 기능 추가
- fix: 버그 수정 또는 typo
- refactor: 리팩토링
- design: CSS 등 사용자 UI 디자인 변경
- comment: 필요한 주석 추가 및 변경
- style: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- test: 테스트(테스트 코드 추가, 수정, 삭제, 비즈니스 로직에 변경이 없는 경우)
- chore: 위에 걸리지 않는 기타 변경사항(빌드 스크립트 수정, assets image, 패키지 매니저 등)
- init: 프로젝트 초기 생성
- rename: 파일 혹은 폴더명 수정하거나 옮기는 경우
- remove: 파일을 삭제하는 작업만 수행하는 경우
