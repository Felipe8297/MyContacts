const errorHandler = (error, request, response, next) => {
  if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
    return response.status(400).json({ error: 'Invalid JSON payload' });
  }

  if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message });
  }

  if (error.name === 'NotFoundError') {
    return response.status(404).json({ error: error.message });
  }

  console.error(error); // Log the error for debugging
  return response.status(500).json({ error: 'Internal Server Error' });
};

module.exports = errorHandler;
