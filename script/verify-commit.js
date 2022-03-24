const chalk = require('chalk');
const msgPath = process.env.HUSKY_GIT_PARAMS;
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim();
const commitRE = /^(feat|fix|chore|revert|release)(\(.+\))?: .{1,80}/;

if (!commitRE.test(msg)) {
    console.error(`${chalk.bgRed.white(' ERROR ')} ${chalk.red('不合法的 commit 消息格式')}\n\n`
        + chalk.red(
            '  请使用正确的提交格式，如下:\n\n'
        )
        + `    ${chalk.green('feat: 新增了xxx新功能')}\n`
        + `    ${chalk.green('fix: 修改了xxxbug')}\n\n`
        + chalk.blue('  请查看 git commit 提交规范：https://github.com/buer-mim/min-project/blob/main/COMMIT.md。\n')
    );
    process.exit(1);
}