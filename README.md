## 아리사코리아 입사 과제 
### 23.06.02 ~

### 1. 개발 환경 세팅 방식
  #### a. Database 설치 과정 기술
  (1) MySQL 홈페이지에서 DMG 파일 다운로드 및 로컬 설치

  (2) Workbench로 원격 접속 

  <img width="600" alt="스크린샷 2023-06-02 오후 5 35 55" src="https://github.com/Minnie5382/aresa_assignment/assets/97179789/43c9d738-7ca6-4c06-a8cb-f49411911c36">

<br>
  (3) ERD Cloud 에서 ERD 설계 후 SQL 내보내기 > 테이블 생성
  
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
	`historicalPriceId`	INT	AUTO_INCREMENT PRIMARY KEY,
	`apartId`	INT	NOT NULL,
	`year`	INT	NOT NULL,
	`month`	INT	NOT NULL,
	`status`	VARCHAR(10)	NOT NULL	DEFAULT 'ACTIVE'	COMMENT 'ACTIVE:활성화 INACTIVE:비활성화 DELETED:삭제됨',
	`createdAt`	TIMESTAMP	NOT NULL	DEFAULT current_timestamp	COMMENT '생성일시'
);

CREATE TABLE `Apartment` (
	`apartId`	INT	AUTO_INCREMENT PRIMARY KEY,
	`apartName`	VARCHAR(45)	NOT NULL,
	`location`	VARCHAR(255)	NOT NULL,
	`saleType`	VARCHAR(20)	NULL	COMMENT 'SALE:매매 LUMP-SUM:전세 RENT:월세',
	`saleStatus`	VARCHAR(20)	NOT NULL	DEFAULT 'ONSALE'	COMMENT 'ONSALE:분양중 SOLD:분양완료 ORDERED:거래진행중',
	`status`	VARCHAR(10)	NOT NULL	DEFAULT 'ACTIVE'	COMMENT 'ACTIVE:활성화 INACTIVE:비활성화 DELETED:삭제됨',
	`createdAt`	TIMESTAMP	NOT NULL	DEFAULT current_timestamp	COMMENT '생성일시'
);

CREATE TABLE `FuturePrice` (
	`futurePriceId`	INT	AUTO_INCREMENT PRIMARY KEY,
	`apartId`	INT	NOT NULL,
	`year`	INT	NOT NULL,
	`month`	INT	NOT NULL,
	`status`	VARCHAR(10)	NOT NULL	DEFAULT 'ACTIVE'	COMMENT 'ACTIVE:활성화 INACTIVE:비활성화 DELETED:삭제됨',
	`createdAt`	TIMESTAMP	NOT NULL	DEFAULT current_timestamp	COMMENT '생성일시'
);

  ```


### 2. 서비스 실행 방식
#### a. Frontend 실행 command
  (1) path 모듈 설치
  ```
  npm install path --save
  ```

#### b. Backend 실행 command

---
