# Git

[참고 자료](https://git-scm.com/docs)


## 명령어

**checkout**


```
git checkout -b 브렌치 명
```

-b를 추가해서 새로운 브렌치를 생성  
이미 브렌치가 존재할 경우 실행되지 않음

``` 
git checkout 브렌치 명
```

특정 branch로 이동

**branch**

```
git branch
```

로컬 branch 목록을 확인

**status**

```
git status
```

**add**

```
git add 파일명 또는 디렉토리 경로

or

git add .

```

**restore**

> git add 한 파일을 제거

```
git restore --staged 파일명
```

**log**

```
git log
```

**config**

```
git config --list
```

git의 세팅되어 있는 설정을 확인

```
git config --global user.name 사용자명
git config --global user.email 사용자@이메일.com
```

사용자의 이름, 이메일 설정