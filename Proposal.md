# The goal of this app is to create a field staff hiring tracker

At my job, when we land a big project we have to hire a great many contractors that have to go through multiple hurdles to get hired such as drug and fitness testing.  Plus, our managers have to coordinate with HR who has resources that they can't share due to privacy concerns.  An app would be a good way to coordinate these two concerns.

# Name 

Total Station.

  The total station was a significant advance in survey technology, it combined several concerns and moved the field of data collection forward very quickly.  The name represents my ambition to extend my app in the future to be a full fledged land surveying management suite.  I want this to be scalable.  There are many other processes in the surveying industry that most firms are behind on.  I hope to be able to fix this.

# Philosophy

This app will handle the hiring process and allow the survey managers and HR to login and coordinate with each other.  

# Must Haves

1. Login
  * This data will have sensitive data, such as addresses and drug testing results. Login is necessary
  * Look into node passport and hash for this

2. Add Prospect input Form section/page
  * An input form for adding prospective employees is necessary
    - Name
    - Last Name
    - NickName or alias
    - Qualified for position such as PC, IM, or RM
    - Address
      + Street
      + City
      + State
      + Zip
    - Phone1
    - Phone2
    - E-mail
    - Years of Experience
    - Comments

3. Add A project input Section/page

  * Employees will be assigned to individual projects then spreads, so entering those project is necessary
    - Project Number- assigned outside the scope of this app
    - Project Name
    - Survey Manager
    - Project Spread - projects have multiple spreads
      + number or name
      + city
      + state
      + supervisor name
      + per diem
      + vehicle
      + mileage
      + computer assignment
      + phone assignment
      + utv assignment

4. A Section/page to filter and select prospects to move forward *
  * Needs to filter by:
    - Location - State
    - Qualified Position
    - Probably search directly by name
    - A way to exporter just show all candidates
  * Select multiple candidates

5. Interview section/page
  * Track the interview process
  * Perhaps on the filter page the requested project/spread assignment
  * A way wo reject a candidate
    - reason
    - notes
  * A way to assign the below to a candidate
    - Project
    - Spread
    - Title
    - Pay
    - Requested Start Date
  * Make official request to HR

6. HR section

  * HR has authorization for this page
    - show a list of hire requests with
      + Project
      + Spread
      + Title
      + Pay
      + Requested Start Date
    - Remove Candidate from consideration
      + Notes
    - Phases
      + Application
        - Application sent
        - Application returned
      + Reference checks
        - Reference checks in progress
        - Reference checks complete
      + Offer leter and new hire paperwork
        - Offer letter and new hire paperwork sent
        - Offer letter and new hire paperwork returned
      + Drug Test
        - Waiting on drug test
        - Drug test complete
      + Fitness Test
        - Waiting on fitness test
        - Fitness test complete

7. Completed Section

  * Hiring complete
    - set start date
    - set mobilization date
  * Hired List

# Nice to haves

* Picture of prospects
* export to csv
