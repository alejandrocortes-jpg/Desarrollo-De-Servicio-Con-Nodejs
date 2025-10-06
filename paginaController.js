const { winstonLogger, bunyanLogger, pinoLogger, log } = require('../logger');
const { getExampleService, getDataService } = require('../services/exampleService');

const getExample = (req, res) => {
  winstonLogger.info('getExample llamado');
  bunyanLogger.info('getExample llamado');
  pinoLogger.info('getExample llamado');
  log.info('getExample llamado');

  try {
    const data = getExampleService();
    res.json({ message: '¡Funciona!', data });
  } catch (error) {
    winstonLogger.error(`Error: ${error.message}`);
    bunyanLogger.error(`Error: ${error.message}`);
    pinoLogger.error(`Error: ${error.message}`);
    log.error(`Error: ${error.message}`);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const getData = (req, res) => {
  winstonLogger.info('getData llamado');
  bunyanLogger.info('getData llamado');
  pinoLogger.info('getData llamado');
  log.info('getData llamado');

  try {
    const result = getDataService();
    res.json({ data: result });
  } catch (error) {
    winstonLogger.error(`Error: ${error.message}`);
    bunyanLogger.error(`Error: ${error.message}`);
    pinoLogger.error(`Error: ${error.message}`);
    log.error(`Error: ${error.message}`);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = { getExample, getData };
