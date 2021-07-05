import 'reflect-metadata';
import app from './config/express';

import logger from './config/logger';
const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  logger.info(`Server running at ${PORT}`);
});

// createConnection()
//   .then(() => {
//     logger.info('database connection created');
//     app.listen(PORT, () => {
//       logger.info(`Server running at ${PORT}`);
//     });
//   })
//   .catch((error: Error) => {
//     logger.info(`Database connection failed with error ${error}`);
//   });
