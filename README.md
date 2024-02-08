```
┌───────────────────────────────────────────────┐
                                       _       
     __ _  ___   ___  _ __ _ __ ___   (_) ___  
    / _` |/ _ \ / _ \| '__| '_ ` _ \  | |/ _ \ 
   | (_| | (_) | (_) | |  | | | | | |_| | (_) |
    \__, |\___/ \___/|_|  |_| |_| |_(_)_|\___/ 
    |___/                                      
			     🌩 𝘼𝙣𝙮𝙤𝙣𝙚 𝙘𝙖𝙣 𝙙𝙚𝙫𝙚𝙡𝙤𝙥!
└───────────────────────────────────────────────┘
```
참고로, 도커컴포즈 작업 전 원본 소스는 https://github.com/kimilguk/react-basic 에 있습니다.
참고로, 도커컨테이너에 대한 기초 내역은 이전 포스트참조: https://kimilguk.tistory.com/855?category=1019223

### 앱 프로젝트 작업하다보면 리액트js앱 만으로 원하는 기능을 구현하지 못할 때가 있다.

- 위와 같은 상황에서 노드js서버 앱도 필요할 때, 도커 이미지 관리를 어떻게 하는 것이 좋을까요?

- 일반적으론, 리액트 앱 이미지만들고 배포 후 노드js 앱 이미지만들고 배포 합니다.(아래)

 1). 리액트js앱을 도커 이미지로 만들고 ( docker build . -t kimilguk/react_map )

 2). 도커 실행 명령으로 결과를 확인 ( docker run -d -p 3000:80  kimilguk/react_map )

 3). 노드js앱을 도커 이미지로 만들고 ( docker build . -t kimilguk/express_server )

 2). 도커 실행 명령으로 결과를 확인 ( docker run -d -p 3000:80  kimilguk/express_server )

 - 좀 더 간편한 방법으로 위 작업을 일괄처리하는 docker-compose (도커컴포즈)라는 툴을 사용해 봅니다.
 
# goormIDE
Welcome to goormIDE!

goormIDE is a powerful cloud IDE service to maximize productivity for developers and teams.  
**DEVELOP WITH EXCELLENCE**  

`Happy coding! The goormIDE team`


## 🔧 Tip & Guide

* Command feature
	* You can simply run your script using the shortcut icons on the top right.
	* Check out `PROJECT > Common/Build/Run/Test/Find Command` in the top menu.
	
* Get URL and Port
	* Click `PROJECT > URL/PORT` in top menu bar.
	* You can get default URL/Port and add URL/Port in the top menu.

* Useful shortcut
	
| Shortcuts name     | Command (Mac) | Command (Window) |
| ------------------ | :-----------: | :--------------: |
| Copy in Terminal   | ⌘ + C         | Ctrl + Shift + C |
| Paste in Terminal  | ⌘ + V         | Ctrl + Shift + V |
| Search File        | ⌥ + ⇧ + F     | Alt + Shift + F  |
| Terminal Toggle    | ⌥ + ⇧ + B     | Alt + Shift + B  |
| New Terminal       | ⌥ + ⇧ + T     | Alt + Shift + T  |
| Code Formatting    | ⌥ + ⇧ + P     | Alt + Shift + P  |
| Show All Shortcuts | ⌘ + H         | Ctrl + H         |

## 💬 Support & Documentation

Visit [https://ide.goorm.io](https://ide.goorm.io) to support and learn more about using goormIDE.  
To watch some usage guides, visit [https://help.goorm.io/en/goormide](https://help.goorm.io/en/goormide)
