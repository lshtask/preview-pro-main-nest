export function dbConfig() {
  return {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'wshlsh0108',
    database: 'lishuo',
    autoLoadEntities: true, // 使用这个配置自动导入entities
    synchronize: true,
  };
}
