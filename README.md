# HelpDesk Advanced

## Summary

An open source tool for logging, viewing, and resolving technical tickets for teams.  Users verified as 'fellows' are given access to respond to and resolve tickets. 


## Getting Started

![Login](https://user-images.githubusercontent.com/74384669/109879433-692d9e00-7c2a-11eb-9822-bcb82c370d04.png)

1) Establish connection with SQL or noSQL database.
2) For new users: create username and password.  For returning users: login.

![New Ticket](https://user-images.githubusercontent.com/74384669/109879508-7d719b00-7c2a-11eb-88a4-a193cd93f155.PNG)

3) Under "New Ticket," complete and submit form.
4) A fellow will check in with user via zoom link. 

![View Tickets](https://user-images.githubusercontent.com/74384669/109879527-882c3000-7c2a-11eb-83cc-de1ebe88ef20.png)

5) Once ticket is resolved, it can be viewed under "View Tickets" along with other previously resolved and open tickets.


## Tech Stack

Front-end technologies:

1) React, React Router, React Hooks, React-Toastify 
2) Bootstrap
3) Axios
4) Sass

Back-end technologies:

1) noSQL
2) Express
3) Authentication: b-crypt


## Future Optimizations and Areas of Expansion

- Login - indicate whether new users are creating non-fellow or fellow accounts.
- TicketDetail - if fellows are logged in, they should be able to see a 'Resolve' button and a text field for notes on each open ticket.


## Stretch goals

1) Users to be able to star/favorite tickets they'd like to keep track of, so that if the same problem(s) occurs, they have a customized log of records to help themselves or others.
2) Add search feature so that users can quickly find specific tickets with keywords or tickets of the same topic.


## Contributors

- Heidi Bang @heidibang
- Lex Choi @lexiphur
- Cole Styron @C-STYR
- Julie Wu @yutingwu4
