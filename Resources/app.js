// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.include('initializers/init.js');
try { App.run(); } catch(E) { alert("Failed with "+E); }
require('support/date');
require('support/twitterlib');

// App.setHost("http://ncr.herokuapp.com/api");
App.setHost("http://localhost:3000/api");

Repository.set("sessions", Sessions);

Layouts.application();
