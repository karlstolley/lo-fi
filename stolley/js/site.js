window.addEvent('domready', function() {
var myDefTerms = $ES('dt','manifesto-points');
var myDefDefs = $ES('dd','manifesto-points');
for (i=0;i<myDefTerms.length;i++)
{
  myDefTerms.addClass('toggler atStart');
 }
for (i=0;i<myDefDefs.length;i++)
{
  myDefDefs.addClass('element atStart');
 }
});
//run the accordion on manifesto-points
window.addEvent('domready', function(){
var accordion = new Accordion('dt.atStart', 'dd.atStart', {
	display: null, //hide everything at start
	alwaysHide: true, //allow everything to be closed
	opacity: false, //no opacity 
	duration: 1000, //take a second to open
	onActive: function(toggler, element){
		toggler.addClass('accActive');
	},
 	onBackground: function(toggler, element){
		toggler.removeClass('accActive');
	}
}, $('manifesto-points'));
});