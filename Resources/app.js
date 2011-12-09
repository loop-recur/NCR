// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.include('initializers/init.js');
try { App.run(); } catch(E) { alert("Failed with "+E); }
require('support/date');

App.setHost("http://quiet-waterfall-1228.herokuapp.com/api");

Layouts.application();
