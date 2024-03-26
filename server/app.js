import express from 'express'
const app = express();
import cors from 'cors'
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js'
import dbConnection from './connections/database.js';
import morgan from 'morgan';

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);

dbConnection.sequelize.sync()
.then(() => {  
    console.log('Data base connected');
})
.catch((error) => {
    console.log('Not connected' , error);
})

const PORT = process.env.PORTNUM || 4000;


app.listen(PORT , () => {
    console.log('Server running');
})