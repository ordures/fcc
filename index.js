#!/usr/bin/env node

const fs = require('fs');
const ncp = require('ncp');
const config = require('./config.json');
const program = require('commander').program;
const version = require('./package.json').version;
const { writeFile, delDir } = require('./lib/utils');

let source = __dirname + '/templates';
let target = config.targetPath;

program.version(version);

program
  .command('target [targetPath]')
  .alias('t')
  .description('设置目标路径')
  .action((targetPath, option) => {
    fs.readFile(__dirname + '/config.json', 'utf8', (err, data) => {
      const _config = JSON.parse(data);
      _config.targetPath = targetPath;
      const result = JSON.stringify(_config);
      writeFile(__dirname + '/config.json', result);
    });
  });

program
  .command('source [sourcePath]')
  .alias('s')
  .description('设置模板路径')
  .action((sourcePath, option) => {
    if (fs.existsSync(sourcePath)) {
      delDir(source);
      ncp(sourcePath, __dirname + '/templates', (err) => {
        if (err) {
          console.log(err);
          return;
        }
      });
    } else {
      console.log('!!路径不正确!!');
    }
  });

program
  .command('module [moduleName]')
  .alias('m')
  .description('创建模块')
  .action((modules, option) => {
    if (fs.existsSync(target)) {
      const ModulePath = target + '/' + modules;
      fs.mkdirSync(ModulePath);
      ncp(source, ModulePath, (err) => {
        if (err) {
          console.log(err);
          return;
        }
      });
    } else {
      console.log(`!!该项目下不存在${target}路径!!`);
    }
  });

program.parse(process.argv);
