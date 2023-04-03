const { Given, When, Then } = require('@cucumber/cucumber');
const { Actor, BrowseTheWeb } = require('@serenity-js/playwright');
const { Ensure, equals } = require('@serenity-js/assertions');

Given('I am on the Makemytrip homepage', async function () {
  const actor = new Actor('User');
  actor.abilityTo(BrowseTheWeb.using(playwright));
  await actor.attemptsTo(
    Navigate.to('https://www.makemytrip.com/')
  );
});

When('I click on the {string} tab', async function (tabName) {
  const actor = Actor.named('User');
  await actor.attemptsTo(
    Click.on(Link.to(tabName))
  );
});

Then('I should be on the flight booking page', async function () {
  const actor = Actor.named('User');
  await actor.attemptsTo(
    Ensure.that(Current.url(), equals('https://www.makemytrip.com/flights/'))
  );
});
