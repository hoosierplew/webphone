# WebPhone

## SOW: Design the interface for a web-based phone
The user needs to be able to initiate and receive calls to any phone number or contact. They should also be able to listen to any voice messages left for them. A large portion of the user base will use the phone in areas with poor internet connection reliability and may experience disconnected calls at a higher than normal rate.

## Deliverables
Deliverables include any written thoughts, sketches and/or wireframes created during this process.

### Inspirations

#### Skype

- [X] **Initiate and receive calls to any phone number or contact** (_desktop browser only_)

Skype allows its users to initiate and receive calls to any phone number or contact by providing a dialpad within the browser for calls. Users can import contacts from several social media channels by searching contacts within those channels for associated Skype accounts.

Interestingly, Skype does not support browser-based usage of its services within a tablet or mobile device. Users must use the Skype app available for that device.

- [X] **Listen to any voice messages left for them** (_desktop browser only_)

Skype offers both voice and video messaging via a chat window associated with a contact. Users who pay for a subscription have access to a phone number with the ability to listen to voice messages from that number within the Skype environment.

* [Screenshot: iPhone 6s](https://www.evernote.com/l/ANwAvyTCbWFLA43E-a7Oc4oiSI0nO4DIkOUB/image.png)
* [Screenshot: Desktop](https://www.evernote.com/l/ANyu6uILx_NBA4gMlXYgNNxdRpK9D_rQetcB/image.png)

#### Google Voice

- [ ] **Initiate and receive calls to any phone number or contact** (_phone browser only_)

Google Voice allows users to send and receive calls from any phone number, but only allows Google Contacts data to be used for looking up contacts. Other avenues for finding contact information (Facebook, Twitter, Linkedin, etc) are not available.

Google Voice's phone calling system is different from desktop to mobile device. For desktop users, Google Voice allows the user to initiate a call and send it to either their mobile device or to Google Hangouts. The user then leaves the Google Voice environment to complete the call.

- [X] **Listen to any voice messages left for them**

Voicemails sent to the user's Google Voice phone number are available in-app.

* [Screenshot: iPhone 6s](https://www.evernote.com/l/ANx9C2xuN2tD3LXI8O9fq16JPwGltVXenNAB/image.png)
* [Screenshot: Desktop](https://www.evernote.com/l/ANzERO2Lz-9EkK0DALIATeIjl1r7KgbCYc4B/image.png)

### Approach

WebPhone will be developed as a fully responsive web-based application, taking advantage of the latest available frameworks and web APIs to delver a web-based telephony application that will be accessible in-browser on a desktop, tablet, or mobile device.

WebPhone will offer integrations with an array of existing social and professional media applications for importing contact information to allow for initiation of phone calls with anyone.

In the event that a call is ended by a poor connection, WebPhone will notify both parties that there are connection problems and notify the user as soon as their connection has stabilized. The application will also invite the user to record a 30-second message that can be sent to the other party as soon as an internet connection is available

WebPhone will have several premium features such as phone call transcripts, voicemail-to-text, and advanced conference calling

### Tools

* [Foundation for Apps](http://foundation.zurb.com/apps.html), an Angular-based front-end framework, to support the basic front-end behavior of the site.

* [Notifications Web API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API) to support notifying the user of incoming calls, call interruptions, and other important events

* [Web Storage Web API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API) to enable saving important session-based information regarding current and recent calls without the need for more invasive cookies, including audio messages to be sent when internet connections fail

### Preliminary Sketches

**[Home Page: Mobile Device](mockups/WebPhone%20-%20Mobile.jpeg)**

I took a mobile-first approach to this design, supposing the app's audience may be inclined to use the browser on their phone to make calls on a regular basis.

* *Main Menu Drawer*: I've moved the main menu into a collapsible panel that can be accesses via a button located at the upper-left of the application while in mobile view
* *Notifications, Search Results*: I've noted where notifications and search results may be displayed in this layout
* *Hitbox*: I've noted the need to increase the size of list results to provide better touch screen capability
* *Monochromatic Iconography*: Prior to identifying the iconset for this project, I noted the need for monochromatic iconography for better usability

**[Home Page: Desktop Browser](mockups/WebPhone%20-%20Desktop.jpeg)**

I sketched out a desktop layout for the application, attempting to take advantage of additional screen real estate available to the user.

* *Main Menu*: The main menu will be visible for users on tablets or computers
* *Hitbox*: Having learned from my first sketch, I made an effort to display list items with a taller footprint to improve usability
* *Tools*: I added a tools section to the right of the recent activity feed to fill in the additional space provided by the larger browser window
* *Help*: I added a help section to the lower-left of the screen for users who need additional resources to find what they're looking for

### [Functional Wireframe](https://hoosierplew.github.io)

After applying my initial sketches I began to feel that the extra space afforded by desktop browsers wasn't quite enough to place a list of tools to the right of the recent activity feed. I made the decision to move tools directly below recent activities.

Source code for the functional wireframe can be found in the `app/` directory of this repo.

**[View the functional wireframe](https://hoosierplew.github.io)**

#### Available Actions

I have provided two wireframes of content for this project. Additional wireframes would follow the same basic pattern established on these pages.

**Home Page**

This is a no-nonsense homepage, with important navigation on the left and quick actions in the main area.

* *Quick Call Bar*: Users can immediately enter a contact name or any phone number to initiate a call. This field will auto-focus upon page load
* *Recent Activities*: these activities will be clickable to view more information and available actions associated with the activity type
* *Tools*: quick links to different WebPhone tools available to the user

**Make a Call**

* *Speed Dial*: The `/call` endpoint has access to the user's speed dial list directly below the quick call bar

* *All Contacts*: This will be an endless scrolling list of all contacts. A search filter input is available at the top of the list to narrow results

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
* _UI Revisions_: There are items in my functional wireframes I would like to spend more time with. Particularly, I'd like to be able to pin the tools section to the bottom of the screen, just above the footer, for mobile device users. I'd also like to spend some time with the help section (not delivered in functional wireframes) - I'd like to try a few options for mobile users, and see what I may be able to do with collapsing/expanding help at the desktop level
* _In-Person UI Testing_: Have a pool of volunteers sit with a UX professional and use the wireframe to tackle certain scripted scenarios to determine better placement of UI components
* _Peer Review_: Sit down with a group of UX Designers/Developers to assess how they may have approached things differently
