# 🗓️ 프로젝트 기간

## 2023.8.19 ~ 2023.9.17

<br/>

# ✨ 프로젝트 설명

|화면|설명|
|------|---|
|![비회원화면](https://github.com/ARONGLEE/pre-onboarding-10th-3-9/assets/74637336/51c3f461-94e8-4cbc-b3dd-17e8c911cae5)|**비회원 화면** <br/> 로그인 안 했을 경우 홈 화면, products 화면, 제품 상세페이지 화면만 보입니다.|
|![로그인회원가입](https://github.com/ARONGLEE/pre-onboarding-10th-3-9/assets/74637336/a41afa1a-7a02-49f5-9041-e0293bdef607)|**회원가입&로그인 화면** <br/> 회원가입, 로그인은 유효성검사를 적용했습니다.|
|![일반회원화면](https://github.com/ARONGLEE/pre-onboarding-10th-3-9/assets/74637336/ac42d9e7-5d38-46d0-928d-4fcd52be208a)|**일반회원 화면** <br/> 일반회원은 홈 화면, products 화면, 제품 상세페이지 화면, 장바구니 화면까지 보입니다.|
|![어드민회원화면](https://github.com/ARONGLEE/pre-onboarding-10th-3-9/assets/74637336/30bea2c1-a047-4e52-b006-80012eea98e7)|**어드민회원 화면** <br/> 어드민회원은 쇼핑몰 관리자로 제품 등록을 할 수 있습니다. <br/> 홈 화면, products 화면, 제품 상세페이지 화면, 장바구니 화면, 제품등록 화면까지 보입니다.|
|![장바구니화면](https://github.com/ARONGLEE/pre-onboarding-10th-3-9/assets/74637336/92000fd1-abdc-4177-a8ef-b54ce1f13a1a)|**장바구니 화면** <br/> 장바구니 화면은 수량변경, 제품 삭제가 가능합니다.|


<br/>

# 📌 프로젝트 실행 방법

1. Clone the repo

```javascript
$ git clone https://github.com/ARONGLEE/ongshop.git
```

2. Install npm packages

```javascript
$ npm install
```

3. Getting Started

```javascript
$ npm start
```

4. Login <br/>
   일반 계정 : 회원가입 후 로그인 <br/>
   어드민 계정 : 아이디 adminTest / 비밀번호 qwe1234!

<br/>

# 🛠️ 기술스택

<p>
 <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
 <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=black">
 <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=black">
 <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=black">
 <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=black">
 <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=black">
</p>

<br />

# 🚀 배포 페이지

### [ONGSHOP 배포 링크](https://ongshop.netlify.app/)

<br/>

# 📂 폴더 구조

```javascript
📦src
 ┣ 📂api
 ┃ ┣ 📜auth.ts
 ┃ ┣ 📜axios.ts
 ┃ ┣ 📜carts.ts
 ┃ ┣ 📜products.ts
 ┃ ┗ 📜upload.ts
 ┣ 📂components
 ┃ ┣ 📜CartItem.tsx
 ┃ ┣ 📜CartStatus.tsx
 ┃ ┣ 📜Navbar.tsx
 ┃ ┣ 📜PriceCard.tsx
 ┃ ┣ 📜ProductCard.tsx
 ┃ ┣ 📜Products.tsx
 ┃ ┗ 📜User.tsx
 ┣ 📂context
 ┃ ┗ 📜AuthContext.tsx
 ┣ 📂fonts
 ┃ ┣ 📜NanumSquareNeoOTF-Lt.otf
 ┃ ┣ 📜NanumSquareNeoOTF-Rg.otf
 ┃ ┣ 📜Oswald-VariableFont_wght.ttf
 ┃ ┗ 📜RobotoCondensed-Light.ttf
 ┣ 📂hooks
 ┃ ┣ 📜useCart.tsx
 ┃ ┗ 📜useProducts.tsx
 ┣ 📂pages
 ┃ ┣ 📜AddProduct.tsx
 ┃ ┣ 📜AllProducts.tsx
 ┃ ┣ 📜Carts.tsx
 ┃ ┣ 📜Home.tsx
 ┃ ┣ 📜Login.tsx
 ┃ ┣ 📜NotFound.tsx
 ┃ ┣ 📜ProductDetail.tsx
 ┃ ┣ 📜ProtectedRoute.tsx
 ┃ ┗ 📜Signup.tsx
 ┣ 📂types
 ┃ ┣ 📜auth.ts
 ┃ ┣ 📜carts.ts
 ┃ ┣ 📜products.ts
 ┃ ┗ 📜route.ts
 ┣ 📜App.css
 ┣ 📜App.test.tsx
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┗ 📜setupTests.ts
```
