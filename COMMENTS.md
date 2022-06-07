# Main architecture decisions you've made and a quick explanation of why
I chose to go thru rxjs suscription instead of using emitting in filter due to have a less complex flux data, i just update the value of my suscription each time event is cached and casted.
I created a component file in order to have my components available to any other modules inside the project.
I separated the services into a service which makes the call to RestAPI and Helpers that just contains operations that can be executed over and over thru the entire project, created a constans, models and states. 

# List of third party libraries and why you chose each one
I picked ng bootstrap instead of pure bootstrap due to reduce complexity on creating controllers, for example i have saved time on modal behaviour.

# What in your code could be improved if you had more time
The first thing is to review the state result which throws a single element of the complete array. The second thing was implementing a paginator with 25 items per page, everytime page is passed, i would check the event and if the remaining items are 1 page ahead, make an another call asking for the next data payload and add that data to the previous one. 
At ngOnInit i would have receive my stored data and show it at first time, if it not exist make the call to API, i would have cleaned the raw object response from API to one which fits the project right after making the call with the rxjs operator map.
Place a button to give the users the opportunity to consult more tv shows when he's watching only their favourite ones. 
I would have included unitary test.