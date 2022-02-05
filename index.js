'use strict';
// { name: タスクの文字列, state: 完了しているかどうかの真偽値 }
const tasks = [];

/**
 * TODOを追加する
 * @param {string} taskName
 */
function add(taskName) {
  tasks.push({ name: taskName, state: false });
}

/**
* TODOの一覧の配列を取得する
* @return {array}
*/
function list() {
  return tasks
    .filter(task => !task.state)
    .map(task => task.name);
}

/**
 * TODOを完了状態にする
 * @param {string} taskName
 */
function done(taskName) {
  const indexFound = tasks.findIndex(task => task.name === taskName);
  if (indexFound !== -1) {
    tasks[indexFound].state = true;
  }
}

/**
 * 完了済みのタスクの一覧の配列を取得する
 * @return {array}
 */
function donelist() {
  return tasks
    .filter(task => task.state)
    .map(task => task.name);
}

/**
 * 項目を削除する
 * @param {string} taskName
 */
function del(taskName) {
  const indexFound = tasks.findIndex(task => task.name === taskName);
  if (indexFound !== -1) {
    tasks.splice(indexFound, 1);
  }
}

module.exports = {
  add,
  list,
  done,
  donelist,
  del
};
