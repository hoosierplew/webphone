# WebPhone

## SOW: Design the interface for a web-based phone
The user needs to be able to initiate and receive calls to any phone number or contact. They should also be able to listen to any voice messages left for them. A large portion of the user base will use the phone in areas with poor internet connection reliability and may experience disconnected calls at a higher than normal rate.

## Deliverables
Deliverables include any written thoughts, sketches and/or wireframes created during this process.

### Inspirations

#### Skype

- [x] **Initiate and receive calls to any phone number or contact** (_desktop browser only_)

Skype allows its users to initiate and receive calls to any phone number or contact by providing a dialpad within the browser for calls. Users can import contacts from several social media channels by searching contacts within those channels for associated Skype accounts.

Interestingly, Skype does not support browser-based usage of its services within a tablet or mobile device. Users must use the Skype app available for that device.

- [x] **Listen to any voice messages left for them** (_desktop browser only_)

Skype offers both voice and video messaging via a chat window associated with a contact. Users who pay for a subscription have access to a phone number with the ability to listen to voice messages from that number within the Skype environment.

* [Screenshot: iPhone 6s](https://www.evernote.com/l/ANwAvyTCbWFLA43E-a7Oc4oiSI0nO4DIkOUB/image.png)
* [Screenshot: Desktop](https://www.evernote.com/l/ANyu6uILx_NBA4gMlXYgNNxdRpK9D_rQetcB/image.png)

#### Google Voice

- [ ] **Initiate and receive calls to any phone number or contact** (_phone browser only_)

Google Voice allows users to send and receive calls from any phone number, but only allows Google Contacts data to be used for looking up contacts. Other avenues for finding contact information (Facebook, Twitter, Linkedin, etc) are not available.

Google Voice's phone calling system is different from desktop to mobile device. For desktop users, Google Voice allows the user to initiate a call and send it to either their mobile device or to Google Hangouts. The user then leaves the Google Voice environment to complete the call.

- [x] **Listen to any voice messages left for them**

Voicemails sent to the user's Google Voice phone number are available in-app.

* [Screenshot: iPhone 6s](https://www.evernote.com/l/ANx9C2xuN2tD3LXI8O9fq16JPwGltVXenNAB/image.png)
* [Screenshot: Desktop](https://www.evernote.com/l/ANzERO2Lz-9EkK0DALIATeIjl1r7KgbCYc4B/image.png)

### Approach

WebPhone will be developed as a fully responsive web-based application, taking advantage of the latest available frameworks and web APIs to delver a web-based telephony application that will be accessible in-browser on a desktop, tablet, or mobile device.

WebPhone will offer integrations with an array of existing social and professional media applications for importing contact information to allow for initiation of phone calls with anyone.

In the event that a call is ended by a poor connection, WebPhone will notify both parties that there are connection problems and notify the user as soon as their connection has stabilized. The application will also invite the user to record a 30-second message that can be sent to the other party as soon as an internet connection is available

WebPhone will have several premium features such as phone call transcripts, voicemail-to-text, and advanced conference calling

### Tools

* [Foundation for Apps], an Angular-based front-end framework, to support the basic front-end behavior of the site.

* [Notifications Web API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API) to support notifying the user of incoming calls, call interruptions, and other important events

* [Web Storage Web API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API) to enable saving important session-based information regarding current and recent calls without the need for more invasive cookies, including audio messages to be sent when internet connections fail

### Functional Wireframe

#### Prereqs
In order to run the functional wireframe on your machine, you should have the following items installed:
* [Node Package Manager](https://nodejs.org/en/download/package-manager/)
* [Bower](https://bower.io/#install-bower)
* [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

#### Setup
1. Clone this Repo to your local machine
2. In a terminal, navigate to the `/app` directory within the Repo and run the following commands in order:
```bash
npm update
bower update
gulp
```
3. A browser window should pop up at this point with the application - hooray!

#### Available Actions
Imma put things here that the user can do on as I build this thing out.

----

## Questions

### What are the challenges of designing such an interface?
* Hardware varies wildly from device to device when accounting for desktop, tablet, and mobile devices.
* Spotty connections have to be treated with great care to keep the user's confidence, need to be aware they may want to blame the application and not their equipment. Have to be able to communicate this to the user.
* Maintaining a common design language across platforms can be tricky. Skype's dialpad looks pretty bad on a desktop, where Google's interface is completely different between a desktop and mobile device. Have to design a highly usable and recognizable product across all required platforms.

### What are some common use cases for such an interface?
* _Internet-connected devices that do not have a SIM card_ - take advantage of available wifi to make calls
* _Users with prepaid plans that have reliable wifi_ - save money and still use your phone to make calls
* _Disaster relief, where cellular networks are down but internet connections are available_ - keep your friends and family up to date or coordinate volunteers
* _Conference calls without the overhead_ - user initiates a call with multiple participants or sends an SMS to multiple recipients with a link to the call via the app

### What would make your design better?
* _In-Person UI Testing_: Have a pool of volunteers sit with a UX professional and use the wireframe to tackle certain scripted scenarios to determine better placement of UI components
* _Peer Review_: Sit down with a group of UX Designers/Developers to assess how they may have approached things differently
