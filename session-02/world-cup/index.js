#!usr/bin/env node

const program = require('commander')
const models = require('./models/manage')

program
  .version('1.0.0')
  .description('World Cup 2018 Russia')

program
  .command('refresh')
  .alias('r')
  .description('Get newest data from server')
  .action(() => {
    models.refreshData()
  })

program
  .command('show_stadium')
  .alias('std')
  .description('Get newest data from server')
  .action(() => {
    models.getStadiums()
  })

program
  .command('show_tv_channels')
  .alias('tvc')
  .description('Get newest data from server')
  .action(() => {
    models.getTvChannels()
  })

program
  .command('show_teams')
  .alias('teams')
  .description('Get newest data from server')
  .action(() => {
    models.getTeams()
  })

program
  .command('get_group_match')
  .alias('ggm')
  .description('Get newest data from server')
  .action(() => {
    models.getGroupsMatch()
  })

program
  .command('get_match_by_group_name')
  .alias('gmgn')
  .description('Get newest data from server')
  .action(() => {
    args = process.argv.slice(3);
    models.getMatchByGroupName(args)
  })

program.parse(process.argv)