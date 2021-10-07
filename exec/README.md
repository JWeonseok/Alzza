# Porting Manual

## Deploy Document

### Version
- openjdk 1.8.0_262
- Node.js 14.17.3
- MySql 8.0
- GitLab
- MobaXterm 21.3

## Deploy Description

### MobaXterm 환경설정

![](https://i.imgur.com/BCdp8RF.png)



MobaXterm 설치 후 실행한다. remote host에 도메인명, use private key에 pem 파일을 첨부하여 session 설정을 한다.


![2번사진](https://user-images.githubusercontent.com/69133236/136125405-65389cb7-df45-44ed-9f67-b877aeb44a36.jpg)
ubuntu 환경으로 접속한다.

### Nginx 설치

```
$ sudo docker pull nginx
```

### Jenkins 설치
```
$ sudo apt-get update
$ sudo apt-get install jenkins
$ sudo apt-get install openjdk-8-jdk
```
### Jenkins 서버 포트 변경
```
// HTTP_PORT=8080 을 9090으로 변경
$ sudo vi /etc/default/jenkins

// 재시작
$ sudo service jenkins restart

// Jenkins 상태 확인
$ sudo systemctl status jenkins
```

### Jenkins 초기 패스워드 확인

```
$ sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

### Jenkins 접속
Jenkins에 접속(`http://[도메인명]:9090/`) 후 확인한 초기 패스워드를 입력한다. Jenkins 추천 패키지를 설치한다.
![4번사진](https://user-images.githubusercontent.com/69133236/136126395-c819dd1e-828a-4d8f-bf04-24a8982fe2b9.jpg)

### Jenkins plugin 설치
(Jenkins 설정 - 플러그인 관리 - 설치가능 탭)에서 다음의 플러그인들을 설치한다. ( `nodejs`, `blue ocean`, GitLab과 관련된 plugin )


### Jenkins GitLab 연동
GitLab -> user settings -> access tokens 페이지에서 Scope의 api 체크한다. access token의 이름과 만료일을 입력하여 token을 생성한다.

Jenkins 시스템 설정에서 GitLab Connection name과 Gitlab host URL를 입력한다. Credentials에서 Add를 눌러 추가한다. Credentials 정보로 Kind는 GitLab API Token, API token은 access token, ID는 GitLab ID를 입력한다.
![](https://i.imgur.com/CFXPSQY.png)


### Jenkins Item과 GitLab repository 연결

- 대시보드 - 새로운 아이템 - 프리스타일 프로젝트를 통해서 item을 생성
- 해당 item의 빌드 유발에서 GitLab webhook URL을 확인
![](https://i.imgur.com/xrblCDJ.png)
- 빌드유발의 고급 - generate를 통해서 Secret token을 생성 후 확인
![](https://i.imgur.com/JiNAFsn.png)
- GitLab - repository - settings - webhooks에서 webhook URL과 secret token 입력
![](https://i.imgur.com/8A8sscq.png)
- MobaXterm에서 ssh 배포키 생성

```
$ ssh-keygen -t rsa -C [your_GitLab_Email]

Generating public/private rsa key pair.
Enter file in which to save the key (/home/ubuntu/.ssh/id_rsa):
/home/ubuntu/.ssh/id_rsa already exists.
Overwrite (y/n)? y
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/ubuntu/.ssh/id_rsa
Your public key has been saved in /home/ubuntu/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:vL6MJ8aNwoy2ghleTIQC0rBIlhgm+cGH6bBiwbBQEtE [your_GitLab_Email]
The key's randomart image is:
+---[RSA 3072]----+
|^.#+o            |
|&zE..            |
|==oo             |
|o.o .            |
|o 8  e  q        |
|.  o  t  .       |
|o.o.+ . o.       |
|+.o + 2.+        |
| o3. o.1+.       |
+----[SHA256]-----+
```

- ssh 키 확인
```
$ cd home/ubuntu/.ssh/

// ssh 키 파일
$ cat id_rsa.pub
```
```
// ssh 키
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCmS6iOiKbxIRITRuJgVbe6u4x9K/4xoT+QfR+3PzLHAnbemFoBJmqmPn/BOB+2WlDaDPXwI+R6lJp0S6/bXj5DgxbEW8FCuGHKo+69uxpjb0ZDVK+2NPsHpPpOQHLiGcDGlPmzT+AnVUx9iab6LJLzm8iOBMEwL+bDDNV9MjhLjuHfMgUHuFNAmZTXTH/LhD7Hn3xE6yErPaieOUBuSxKS1YDpzKu1Y6wEW/HyR2tYtoOo8ymBGallB3clh3NROxm4zabW/x7l2ZanombArvatxFuF55dqcrtsitwg1J9NaaWT66oTKpzoLO7yNZUo0ly8LIVZLWBZxmAi0XAmb10zIQrHMoTulAWdqB3nffLAv35Mqsp3iSSq1t+v1DRITU2uhIKDNbYBh8L5vgcgKfvigO4iX3CtFKoljoJNkrs6jKvPULcoq5sQknjHv+pQiOB6vBvci328AZsk/HbDkyXBSJZmQXkjjPRkZW2E/YgcmCgvZL+YKDTT9L76K31UfbM= [your_GitLab_Email]
```

- GitLab - preference - SSH keys에 ssh 키 등록
- Jenkins - Item - 소스 코드 관리에서 Git 선택 후 repository URL에 
`https://[GitLab_ID]:[access_Token]@[your_repository_URL]` 입력
    ![](https://i.imgur.com/Ka35hA6.png)
- Add 클릭 후 GitLab repository credential 생성
    - kind : ssh username with private key
    - id : [your_GitLab_ID]
    - user name : [your_GitLab_Email]

### DB연결

- ubuntu에서 입력

```
$ sudo apt update
$ sudo apt install mysql-server
$ sudo apt isntall net-tools
$ sudo netstat -tap | grep mysql
$ sudo service mysql restart
```

- MYSQL 외부접속 설정

```
// 경로이동
$ cd /etc/mysql/mysql.conf.d

// bind-address를  127.0.0.0 -> 0.0.0.0 으로 변경
$ sudo vi mysqld.cnf
```

- MySQL 접속 및 계정 생성 & 권한부여

```
// mysql에 접속
$ sudo mysql

// 외부 접속 계정 생성 & 권한 부여
> create user '계정이름'@'%' identified by '패스워드';
> grant all privileges on *.* to '계정이름'@'%' with grant option;
```

- MySQL workbench에서 접속 확인
![](https://i.imgur.com/PDMHjRp.png)



### Build command 설정

- Jenkins 프로젝트 - 구성 - 빌드 - execute shell command에 입력
![](https://i.imgur.com/iIZ24RC.png)

### Build 후 실행
- Jenkins 프로젝트 - 구성 - 빌드 후 조치 - Post build task 추가
    - Log text: `BUILD SUCCESS`
    - Script: `nohup java -jar /var/lib/jenkins/workspace/[your_Item_Name]/backend/build/libs/backend-0.0.1-SNAPSHOT.jar &`
![](https://i.imgur.com/iPnhii3.png)

### Nginx 기본 실행 위치 변경 후 설정파일 변경

```
$ cd etc/nginx/sites-enabled

// root var/www/html -> root /var/lib/jenkins/workspace/[your_Item_Name]/frontend/build
$ sudo vi default

// Nginx 재시작
$ sudo service nginx stop
$ sudo nginx
```

### 인증서 적용하기


- letsencrypt 설치
```
$ sudo apt-get update -y & sudo apt-get install letsencrypt -y
```

- nginx 중지
```
// 인증서 발급을 위해 실행중인 nginx 중지
$ sudo systemctl stop nginx
```

- 인증서 발급 및 ssl_certificate와 key 확인
```
$ sudo letsencrypt certonly --standalone -d [your_Domain_Name]
```
![](https://i.imgur.com/PPMpIfP.png)

- Nginx 설정파일 수정

```
server {
        listen 80 default_server;
        listen [::]:80 default_server;

        server_name [your_Domain_Name];

        return 301 https://$server_name$request_uri;

        index index.html index.htm;
}

server {
        listen 443 ssl;
        listen [::]:443 ssl;

        server_name [your_Domain_Name];

        ssl_certificate [your_ssl_certificate];
        ssl_certificate_key [your_ssl_certificate_key];

        root /var/lib/jenkins/workspace/[your_Item_Name]/frontend/build;
        index index.html;

        location / {
                try_files $uri $uri/ /index.html;
        }

// /api와 같이 요청 url을 똑같이 입력해줘야합니다.
        location /api {
                proxy_pass http://localhost:서버포트/api/;
                proxy_redirect off;
                charset utf-8;

                proxy_set_header  X-Real-IP $remote_addr;
                proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header  X-Forwarded-Proto $scheme;
                proxy_set_header  X-NginX-Proxy true;
        }

}
```