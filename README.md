## 아리사코리아 입사 과제 
### 23.06.02 ~

### 1. 개발 환경 세팅 방식
  #### a. Database 설치 과정 기술
  (1) MySQL 홈페이지에서 DMG 파일 다운로드 및 로컬 설치

  (2) Workbench로 원격 접속 
<br>
  <img width="600" alt="스크린샷 2023-06-02 오후 5 35 55" src="https://github.com/Minnie5382/aresa_assignment/assets/97179789/43c9d738-7ca6-4c06-a8cb-f49411911c36">

<br>
  (3) ERD Cloud 에서 ERD 설계 후 SQL 내보내기 > 테이블 생성
  <br>
  <img width="600" alt="스크린샷 2023-06-02 오후 6 08 02" src="https://github.com/Minnie5382/aresa_assignment/assets/97179789/11590dce-9a96-457a-b115-f025eb851958">
  <img width="600" alt="스크린샷 2023-06-02 오후 6 55 04" src="https://github.com/Minnie5382/aresa_assignment/assets/97179789/a35edec1-1d86-4ab3-a5d6-a41ad4e99180">
  
  #### b. Frontend 설치 command
  (1) vue-cli 라이브러리 설치
  ```
  % sudo npm install -g @vue/cli
  ```

  (2) vue 프로젝트 생성 및 실행
  ```
  % vue create app
  ```
  
  #### c. Backend 설치 command
  (1) Homebrew로 nvm 설치
  ```
  % brew update
  % brew install nvm
  % nvm -v
  // 0.39.3
  ```
  
  (2) node.js 18.16.0 설치
  ```
  % nvm install 18.16.0
  ```
  
  (3) npm + express 설치
  ```
  % cd /Users/minnie/aresa_assignment
  % npm init
  % npm install express
  ```
  
  #### d. Database 테이블 생성 sql
  ```sql
  show databases;
  create database aresa_apart;
  use aresa_apart;

  CREATE TABLE `HistoricalPrice` (
	`historicalPriceId`	INT	PRIMARY KEY AUTO_INCREMENT,
	`aptId`	INT	NOT NULL,
	`price`	INT	NOT NULL,
	`year`	INT	NOT NULL,
	`month`	INT	NOT NULL,
	`status`	VARCHAR(10)	NOT NULL	DEFAULT 'ACTIVE'	COMMENT 'ACTIVE:활성화 INACTIVE:비활성화 DELETED:삭제됨',
	`createdAt`	TIMESTAMP	NOT NULL	DEFAULT current_timestamp	COMMENT '생성일시'
);

CREATE TABLE `Apartment` (
	`aptId`	INT	PRIMARY KEY AUTO_INCREMENT,
	`aptName`	VARCHAR(45)	NOT NULL,
	`location`	VARCHAR(255)	NOT NULL,
	`saleType`	VARCHAR(20)	NULL	COMMENT 'SALE:매매 LUMP-SUM:전세 RENT:월세',
	`saleStatus`	VARCHAR(20)	NOT NULL	DEFAULT 'ONSALE'	COMMENT 'ONSALE:분양중 SOLD:분양완료 ORDERED:거래진행중',
	`status`	VARCHAR(10)	NOT NULL	DEFAULT 'ACTIVE'	COMMENT 'ACTIVE:활성화 INACTIVE:비활성화 DELETED:삭제됨',
	`createdAt`	TIMESTAMP	NOT NULL	DEFAULT current_timestamp	COMMENT '생성일시'
);

CREATE TABLE `FuturePrice` (
	`futurePriceId`	INT	PRIMARY KEY AUTO_INCREMENT,
	`aptId`	INT	NOT NULL,
	`price`	INT	NOT NULL,
	`year`	INT	NOT NULL,
	`month`	INT	NOT NULL,
	`status`	VARCHAR(10)	NOT NULL	DEFAULT 'ACTIVE'	COMMENT 'ACTIVE:활성화 INACTIVE:비활성화 DELETED:삭제됨',
	`createdAt`	TIMESTAMP	NOT NULL	DEFAULT current_timestamp	COMMENT '생성일시'
);

  ```


### 2. 서비스 실행 방식
#### a. Frontend 실행 command
  ```
  % npm run serve
  ```

#### b. Backend 실행 command
  ```
  % npm start
  ```

### 3. 예제 실행 Step 별 화면 변경사항
   #### a. DB 에 아무 정보 없을 때 화면
   <img width="600" alt="image" src="https://github.com/Minnie5382/aresa_assignment/assets/97179789/f4f5a460-4f95-4e85-a6d8-6eb6282a7827">




   #### b. POST historical_price 에 임의의 값 post
   (1) post curl 커멘드
   ```
   % curl -X POST "http://localhost:8080/arisa-api/historical-price" -H "Content-Type: application/json" -d '{"aptId": 1, "year": 2017, "monthStart" : 1, "values" : 400, 500, 600}'
```
<br>
   (2) post 이후 새로고침 화면
<br>

<img width="600" alt="image" src="https://github.com/Minnie5382/aresa_assignment/assets/97179789/16a8ce66-8c0a-4d37-acb7-83987ad42361">




   #### c. POST futurel_price 에 임의의 값 post
   (1) post curl 커멘드
    
   ```
   % curl -X POST "http://localhost:8080/arisa-api/futurn-price" -H "Content-Type: application/json" -d '{"aptId": 1, "year": 2024, "monthStart" : 1, "values" : 400, 500, 600}'
   ```
   (2) post 이후 새로고침 화면
   <br>
<img width="600" alt="image" src="https://github.com/Minnie5382/aresa_assignment/assets/97179789/60e2f60a-f776-4b18-93e6-225892d8575f">


---
