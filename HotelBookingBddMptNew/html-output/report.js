$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("hotelbookingregistration/HotelBooking.feature");
formatter.feature({
  "line": 3,
  "name": "HotelBookingApplication",
  "description": "",
  "id": "hotelbookingapplication",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HotelBooking"
    }
  ]
});
formatter.background({
  "line": 5,
  "name": "User has already logged in to hotel application",
  "description": "and is navigated to Hotel Booking register page.",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "checking for the title",
  "description": "",
  "id": "hotelbookingapplication;checking-for-the-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "User is already in hotel booking page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "check the page title in booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsHotelBooking.user_is_already_in_hotel_booking_page()"
});
formatter.result({
  "duration": 5594241090,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.check_the_page_title_in_booking_page()"
});
formatter.result({
  "duration": 250994256,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User has already logged in to hotel application",
  "description": "and is navigated to Hotel Booking register page.",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 12,
  "name": "Hotel Booking Failure when first Name is empty",
  "description": "",
  "id": "hotelbookingapplication;hotel-booking-failure-when-first-name-is-empty",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "User is already in hotel booking page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "first Name is empty",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "click submit",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "display the error msg to user and close",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsHotelBooking.user_is_already_in_hotel_booking_page()"
});
formatter.result({
  "duration": 2844000192,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.first_Name_is_empty()"
});
formatter.result({
  "duration": 1069120211,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.click_submit()"
});
formatter.result({
  "duration": 115018626,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHotelBooking.display_alert_msg_to_user()"
});
