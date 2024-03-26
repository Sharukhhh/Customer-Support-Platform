export const dbConfig = {

    HOST : 'localhost' ,
    USER : 'root' ,
    PASSWORD : 'sr123',
    DB : 'customer_support',
    dialect : 'mysql',
    pool: {
        max: 5, 
        min: 0,
        acquire: 30000,
        idle: 10000
    }

}