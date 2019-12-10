
import mongoose from 'mongoose';


mongoose.Promise = Promise;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connection.on('connected', () => {
  console.log('Database connection successed');
});

mongoose.connection.on('reconnected', () => {
  console.log('Database connection restablished');
});

mongoose.connection.on('disconnected', () => {
  console.log('Database connection disconnected');
});

mongoose.connection.on('close', () => {
  console.log('Database connection closed');
});

mongoose.connection.on('error', (error) => {
  console.log(error)
  console.log('Database connection error');
});

const database = async (url: string): Promise<boolean> => {
  if (!url) throw new Error('No URL for database was provided');
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    autoReconnect: true,
    reconnectTries: 1000000,
    reconnectInterval: 30000
  }).catch(error => {
    console.log('Database error');
    return false;
  });
  return true
}

export default database;
