const chalk = require('chalk')

import app from './app'

const APP_SERVER_POST = 4000

app.listen(APP_SERVER_POST, () => {
    console.log(
        chalk.blue('Running development server at ') + 
        chalk.yellow(chalk.underline(chalk.bold(`http://localhost:${APP_SERVER_POST}`)))
    )
})