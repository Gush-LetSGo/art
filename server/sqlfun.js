// sql语句
var sqlMap = {
    // 用户
    user: {
        login: 'SELECT password FROM user WHERE name = ?;',
        add: 'insert into admin(username, userpsw) values ( ?, ?);'
    }
}

module.exports = sqlMap;