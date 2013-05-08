// removing existing services just in case
Accounts.loginServiceConfiguration.remove({
  service: 'github',
  service: 'twitter'
});

// github
Accounts.loginServiceConfiguration.insert({
  service: 'github',
  clientId: '7af657962eb41af4130b',
  secret: '61e41bfd95ed92b497b889e6c84b3cb145c3b720'
});

// twitter
Accounts.loginServiceConfiguration.insert({
  service: 'twitter',
  clientId: '9TEqwuyoHO7JHVrisxmuSQ',
  secret: 'xYFr4YsuXmUZqfDfTDgecnxRxFrPYftkGsfH8WykIA'
});